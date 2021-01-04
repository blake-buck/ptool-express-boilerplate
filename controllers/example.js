const Joi = require('joi');

const exampleService = require('../services/example');

const getExamplesSchema = Joi.object({
    limit: Joi.number().default(10),
    offset: Joi.number().default(0),
    fields: Joi.string().pattern(/^[\w+,*]+$/i).default('id,description')
});
function getExamples(request, response){
    const validationResult = getExamplesSchema.validate(request.query);
    if(validationResult.error){
        return response.status(400).json(validationResult.error);
    }

    const paginationData = {limit, offset} = validationResult.value;
    const fieldData = validationResult.value.fields;

    const result = exampleService.getExamples(paginationData, fieldData);
    return response.status(result.status).json(result.body);
}

const getSpecificExampleSchema = Joi.object({
    fields: Joi.string().pattern(/^[\w+,*]+$/i).default('id,description')
})
function getSpecificExample(request, response){
    const validationResult = getSpecificExampleSchema.validate(request.query);
    if(validationResult.error){
        return response.status(400).json(validationResult.error);
    }

    const fieldData = validationResult.value.fields;

    const result = exampleService.getSpecificExample(request.params.id, fieldData);
    return response.status(result.status).json(result.body);
}

function postExample(request, response){
    const result = exampleService.postExample(request.body);
    return response.status(result.status).json(result.body);
}

function updateExamples(request, response){
    const result = exampleService.updateExamples(request.body);
    return response.status(result.status).json(result.body);
}

function updateSpecificExample(request, response){
    const result = exampleService.updateSpecificExample(request.body);
    return response.status(result.status).json(result.body);
}

function deleteExamples(request, response){
    const result = exampleService.deleteExamples(request.query.deletedExamples);
    return response.status(result.status).json(result.body);
}

const deleteSpecificExampleSchema = Joi.object({
    id: Joi.number()
});
function deleteSpecificExample(request, response){
    const validationResult = deleteSpecificExampleSchema.validate(request.params);
    if(validationResult.error){
        return response.status(400).json(validationResult.error);
    }

    const result = exampleService.deleteSpecificExample(validationResult.value.id);
    return response.status(result.status).json(result.body);
}

module.exports = {
    getExamples,
    getSpecificExample,
    postExample,
    updateExamples,
    updateSpecificExample,
    deleteExamples,
    deleteSpecificExample
}