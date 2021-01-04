const models = require('../models/example');
const standardLogger = require('../logger');

function getExamples(paginationData, fieldData){
    try{
        return {status: 200, body: models.getExamples(paginationData, fieldData)}
    }
    catch(e){
        standardLogger.error(e);
        return {status: 500, body: {message:'Failure to read/write database'}}
    }
}

function getSpecificExample(exampleId, fieldData){
    try{
        return {status: 200, body: models.getSpecificExample(exampleId)}
    }
    catch(e){
        standardLogger.error(e);
        return {status: 500, body: {message:'Failure to read/write database'}}
    }
}

function postExample(exampleData){
    try{
        return {status: 200, body: models.postExample(exampleData)}
    }
    catch(e){
        standardLogger.error(e);
        return {status: 500, body: {message:'Failure to read/write database'}}
    }
}

function updateExamples(exampleDataArray){
    try{
        return {status: 200, body: models.updateExamples(exampleDataArray)}
    }
    catch(e){
        standardLogger.error(e);
        return {status: 500, body: {message:'Failure to read/write database'}}
    }
}

function updateSpecificExample(exampleData){
    try{
        return {status: 200, body: models.updateSpecificExample(exampleData)}
    }
    catch(e){
        standardLogger.error(e);
        return {status: 500, body: {message:'Failure to read/write database'}}
    }
}

function deleteExamples(exampleIdList){
    try{
        return {status: 200, body: models.deleteExamples(exampleIdList)}
    }
    catch(e){
        standardLogger.error(e);
        return {status: 500, body: {message:'Failure to read/write database'}}
    }
}

function deleteSpecificExample(exampleId){
    try{
        return {status: 200, body: models.deleteSpecificExample(exampleId)}
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