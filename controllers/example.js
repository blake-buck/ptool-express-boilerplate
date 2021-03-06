const Joi = require('joi');
const controllerWrapper = require('./controllerWrapper');
const dependencyInjector = require('../dependency-injector');

const exampleService = dependencyInjector.inject('exampleService');

const getExamplesSchema = Joi.object({
    limit: Joi.number().default(10),
    offset: Joi.number().default(0),
    fields: Joi.string().pattern(/^[\w+,*]+[\w]$/i).default('id,description')
});

const {BadRequestError} = require('../constants/errors');

async function getExamples(request, response){
    const validationResult = getExamplesSchema.validate(request.query);
    if(validationResult.error){
        throw new BadRequestError(validationResult.error);
    }

    const paginationData = {limit, offset} = validationResult.value;
    const fieldData = validationResult.value.fields;

    const result = await exampleService.getExamples(paginationData, fieldData);
    return response.status(result.status).json(result.body);
}

const getSpecificExampleSchema = Joi.object({
    fields: Joi.string().pattern(/^[\w+,*]+[\w]$/i).default('id,description')
})
async function getSpecificExample(request, response){
    const validationResult = getSpecificExampleSchema.validate(request.query);
    if(validationResult.error){
        throw new BadRequestError(validationResult.error);
    }

    const fieldData = validationResult.value.fields;

    const result = await exampleService.getSpecificExample(request.params.id, fieldData);
    return response.status(result.status).json(result.body);
}

const postExampleSchema = Joi.object({
    description: Joi.string(),
    status: Joi.number()
})
async function postExample(request, response){
    const validationResult = postExampleSchema.validate(request.body);
    if(validationResult.error){
        throw new BadRequestError(validationResult.error);
    }

    const result = await exampleService.postExample(request.body);
    return response.status(result.status).json(result.body);
}

const updateExamplesSchema = Joi.array().items({
    id: Joi.number(),
    description: Joi.string(),
    status: Joi.number()
}) 
async function updateExamples(request, response){
    const validationResult = updateExamplesSchema.validate(request.body);
    if(validationResult.error){
        throw new BadRequestError(validationResult.error);
    }

    const result = await exampleService.updateExamples(request.body);
    return response.status(result.status).json(result.body);
}

const updateSpecificExampleSchema = Joi.object({
    id: Joi.number(),
    description: Joi.string(),
    status: Joi.number()
})
async function updateSpecificExample(request, response){
    const validationResult = updateSpecificExampleSchema.validate(request.body);
    if(validationResult.error){
        throw new BadRequestError(validationResult.error);
    }

    const result = await exampleService.updateSpecificExample(request.body);
    return response.status(result.status).json(result.body);
}

const deleteExamplesSchema = Joi.array().items(Joi.number());
async function deleteExamples(request, response){
    const validationResult = deleteExamplesSchema.validate(request.body);
    if(validationResult.error){
        throw new BadRequestError(validationResult.error);
    }

    const result = await exampleService.deleteExamples(request.body);
    return response.status(result.status).json(result.body);
}

const deleteSpecificExampleSchema = Joi.object({
    id: Joi.number()
});
async function deleteSpecificExample(request, response){
    const validationResult = deleteSpecificExampleSchema.validate(request.params);
    if(validationResult.error){
        throw new BadRequestError(validationResult.error);
    }

    const result = await exampleService.deleteSpecificExample(validationResult.value.id);
    return response.status(result.status).json(result.body);
}

module.exports = {
    getExamples: controllerWrapper(getExamples),
    getSpecificExample: controllerWrapper(getSpecificExample),
    postExample: controllerWrapper(postExample),
    updateExamples: controllerWrapper(updateExamples),
    updateSpecificExample: controllerWrapper(updateSpecificExample),
    deleteExamples: controllerWrapper(deleteExamples),
    deleteSpecificExample: controllerWrapper(deleteSpecificExample)
}