const exampleService = require('../services/example');

function getExamples(request, response){
    const paginationData = {
        limit: request.query.limit ? request.query.limit : 10,
        offset: request.query.offset ? request.query.offset : 0
    };

    const fieldData = request.query.fields ? request.query.fields : 'id,description';

    const result = exampleService.getExamples(paginationData, fieldData);
    return response.status(result.status).json(result.body);
}

function getSpecificExample(request, response){
    const fieldData = request.query.fields ? request.query.fields : 'id,description';
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

function deleteSpecificExample(request, response){
    const result = exampleService.deleteSpecificExample(request.params.id);
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