const models = require('../models/example');
const standardLogger = require('../logger');

async function getExamples(paginationData, fieldData){
    try{
        return {status: 200, body: await models.getExamples(paginationData, fieldData)}
    }
    catch(e){
        standardLogger.error(e);
        return {status: 500, body: {message:'Failure to read/write database'}}
    }
}

async function getSpecificExample(exampleId, fieldData){
    try{
        return {status: 200, body: await models.getSpecificExample(exampleId)}
    }
    catch(e){
        standardLogger.error(e);
        return {status: 500, body: {message:'Failure to read/write database'}}
    }
}

async function postExample(exampleData){
    try{
        return {status: 200, body: await models.postExample(exampleData)}
    }
    catch(e){
        standardLogger.error(e);
        return {status: 500, body: {message:'Failure to read/write database'}}
    }
}

async function updateExamples(exampleDataArray){
    try{
        return {status: 200, body: await models.updateExamples(exampleDataArray)}
    }
    catch(e){
        standardLogger.error(e);
        return {status: 500, body: {message:'Failure to read/write database'}}
    }
}

async function updateSpecificExample(exampleData){
    try{
        return {status: 200, body: await models.updateSpecificExample(exampleData)}
    }
    catch(e){
        standardLogger.error(e);
        return {status: 500, body: {message:'Failure to read/write database'}}
    }
}

async function deleteExamples(exampleIdList){
    try{
        return {status: 200, body: await models.deleteExamples(exampleIdList)}
    }
    catch(e){
        standardLogger.error(e);
        return {status: 500, body: {message:'Failure to read/write database'}}
    }
}

async function deleteSpecificExample(exampleId){
    try{
        return {status: 200, body: await models.deleteSpecificExample(exampleId)}
    }
    catch(e){
        standardLogger.error(e);
        return {status: 500, body: {message:'Failure to read/write database'}}
    }    
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