const request = require('supertest');
const exampleControllers = require('./example.js');


const mockResponse = () => {
    const res = {};
    res.status = (passedInStatus) => {
        res.status = passedInStatus
        return res;
    };
    res.json = (passedInBody) => {
        res.body = passedInBody;
        return res;
    }

    return res;
};
  

describe('Example tests', () => {
    it('should pass', () => {
        expect(true).toBe(true);
    });

    it('correct request schema should return status 200', () => {
        const mockRequestObj = {
            query: {
                limit: 50,
                offset: 50
            }
        };
        var response = exampleControllers.getExamples(mockRequestObj, mockResponse());

        expect(response.status).toBe(200);
    });

    it('incorrect request schema should return status 400', () => {
        const mockRequestObj = {
            query: {
                limit: 'string words',
                offset: 50
            }
        };
        var response = exampleControllers.getExamples(mockRequestObj, mockResponse());

        expect(response.status).toBe(400);
    })
});
