const fetch = require('node-fetch');
let expect = require("chai").expect

let url = "" + "/api/v3/addItem";
let startDate = new Date();
let endDate = new Date(new Date().setDate(new Date().getDate() - 1));
let myHeaders = new fetch.Headers();
myHeaders.append("Content-Type", "application/json");

let body = JSON.stringify({ "name": "Axa test", "description": "this is a description", "startDate": startDate, "endDate": endDate });

let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: body,
    redirect: 'follow'
};

describe("========== Exercise 3: ==========", function () {
    describe("I make a POST call to the following endpoint /api/v3/addItem : ", function () {
        it('The response code is 200', function () { //if i'm adding an item the response code should be 201
            return fetch(url, requestOptions)
                .then(response => response)
                .then(result => expect(result.status).to.equal(201));
        });
        it('The following values are present ', function () {
            return fetch(url, requestOptions)
                .then(response => response.json())
                .then(result => {
                    expect(result.id).to.equal('893281')
                    expect(result.name).to.equal('Axa test')
                    expect(result.description).to.equal('this is a description')
                    expect(new Date(result.startDate).toString()).to.equal(startDate.toString())
                    expect(new Date(result.endDate).toString()).to.equal(endDate.toString())
                });
        });
    });
});