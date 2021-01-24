const logger = require('../logger');

const dependencyInjector = require('../dependency-injector');
const models = dependencyInjector.inject('exampleModel');

async function getExamples(paginationData, fieldData){
    return {status: 200, body: await models.getExamples(paginationData, fieldData)}
}

async function getSpecificExample(exampleId, fieldData){
    return {status: 200, body: await models.getSpecificExample(exampleId, fieldData)}
}

async function postExample(exampleData){
    return {status: 200, body: await models.postExample(exampleData)}
}

async function updateExamples(exampleDataArray){
    return {status: 200, body: await models.updateExamples(exampleDataArray)}
}

async function updateSpecificExample(exampleData){
    return {status: 200, body: await models.updateSpecificExample(exampleData)}
}

async function deleteExamples(exampleIdList){
    return {status: 200, body: await models.deleteExamples(exampleIdList)}
}

async function deleteSpecificExample(exampleId){
    return {status: 200, body: await models.deleteSpecificExample(exampleId)}  
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