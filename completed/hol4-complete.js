
var expect = require('chai').expect;
var request = require('request');
require('../hol3-complete.js');

var options = {
    headers: { "Content-Type": "application/json"},
    uri: 'http://localhost:8080/products',
    method: undefined,
    json: {}
};

describe("Get all products", function () {
    var result;
    before(function (done) {
        options.method = "GET";
        request.get(options, function (err, res, body) {
            result = {err, res, body};
            done();
        });
        
    });
    it('should execute without errors', function () {
       expect(result.err).to.equal(null);
    });
    it('should return an http status 200', function () {
       expect(result.res.statusCode).to.equal(200);
    });
    it('should return three items', function () {
       expect(result.body.length).to.equal(3);
    });
});
describe("Get one product", function () {
    var result;
    
    before(function (done) {
        options.method = "GET";
        options.uri += "?id=3";
        request.get(options, function (err, res, body) {
            result = {err, res, body};   
            done();
        });
        
    });
    it('should execute without errors', function () {
       expect(result.err).to.equal(null);
    });
    it('should return an http status 200', function () {
       expect(result.res.statusCode).to.equal(200);
    });
    it('should return "Dajm"', function () {
       expect(result.body[0].name).to.equal('Dajm');
    });
});
describe("Add one product", function () {
    var result;
    
    before(function (done) {
        options.method = "POST";
        options.json = {
            id: 4,
            name: "Fransk norgat",
            price: 8.2
        };
        request.post(options, function (err, res, body) {
            result = {err, res, body};    
            done();
        });
        
    });
    it('should execute without errors', function () {
       expect(result.err).to.equal(null);
    });
    it('should return an http status 200', function () {
       expect(result.res.statusCode).to.equal(200);
    });
});
describe("Get all products again", function () {
    var result;
    
    before(function (done) {
        options.method = "GET";
        options.uri = 'http://localhost:8080/products';
        request.get(options, function (err, res, body) {
            result = {err, res, body};  
            done();
        });
        
    });
    it('should execute without errors', function () {
       expect(result.err).to.equal(null);
    });
    it('should return an http status 200', function () {
       expect(result.res.statusCode).to.equal(200);
    });
    it('should return four items', function () {
       expect(result.body.length).to.equal(4);
    });
});
