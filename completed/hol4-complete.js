
var expect = require('chai').expect;
var request = require('request');
require('../hol3.js');

describe("Get all products", function () {
    var result; // Used to store the result
    // First we call the service
    before(function (done) {
        // Configure the call with content-type and uri
        var options = {
            headers: { "Content-Type": "application/json"},
            uri: 'http://localhost:8080/products',
            json: {}
        };
        // Make call
        request.get(options, function (err, res, body) {
            result = {err, res, body};
            done();
        });
        
    });
    it('should execute without errors', function (done) {
       expect(result.err).to.equal(null);
       done();
    });
    it('should return an http status 200', function (done) {
       expect(result.res.statusCode).to.equal(200);
       done();
    });
    it('should return three items', function (done) {
       expect(result.body.length).to.equal(3);
       done();
    });
});
describe("Get one product", function () {
    var result;
    
    before(function (done) {
        request.get('http://localhost:8080/products?id=3', function (err, res, body) {
            result = {err, res, body};   
            done();
        });
        
    });
    it('should execute without errors', function (done) {
       expect(result.err).to.equal(null);  
       done();
    });
    it('should return an http status 200', function (done) {
       expect(result.res.statusCode).to.equal(200);
       done();
    });
    it('should return "Dajm"', function (done) {
       expect(result.body[0].name).to.equal('Dajm');
       done();
    });
});
describe("Add one product", function () {
    var result;
    
    before(function (done) {
        var options = {
            headers: { "Content-Type": "application/json"},
            uri: 'http://localhost:8080/products',
            json: {
                id: 4,
                name: "Fransk norgat",
                price: 8.2
            }
        };
        request.post(options, function (err, res, body) {
            result = {err, res, body};    
            done();
        });
        
    });
    it('should execute without errors', function (done) {
       expect(result.err).to.equal(null);
       done();
    });
    it('should return an http status 200', function (done) {
       expect(result.res.statusCode).to.equal(200);
       done();
    });
});
describe("Get all products again", function () {
    var result;
    
    before(function (done) {
        request.get('http://localhost:8080/products', function (err, res, body) {
            result = {err, res, body};  
            done();
        });
        
    });
    it('should execute without errors', function (done) {
       expect(result.err).to.equal(null);
       done();
    });
    it('should return an http status 200', function (done) {
       expect(result.res.statusCode).to.equal(200);
       done();
    });
    it('should return four items', function (done) {
       expect(result.body.length).to.equal(4);
       done();
    });
});
