const fetch = require("node-fetch");
let expect = require("chai").expect

let requestGETOptions = {
    method: 'GET',
    redirect: 'follow'
};

let myHeaders = new fetch.Headers();
myHeaders.append("Content-Type", "application/json");

let body = JSON.stringify({ "title": "Frist post", "body": "first body post", "userId": 1 });

let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: body,
    redirect: 'follow'
};

let comment = {"name": "name for my comment", "email": "albert@email.com", "body": "lorem ipsum"};
let requestOptionsComment = {
    method: 'POST',
    headers: myHeaders,
    body: comment,
    redirect: 'follow'
};
let id = 101;
let commentId = 123;

let requestOptionsDelete = {
    method: 'DELETE',
    redirect: 'follow'
};


describe("========== Exercise 1: ==========", function () {
    describe("I make a POST call to the following endpoint /api/v3/addItem : ", function () {
        it('Get all posts', function () {
            return fetch("https://jsonplaceholder.typicode.com/posts", requestGETOptions)
                .then(response => response.json())
                .then(json => expect(json.length).to.equal(100));
        });
        it('Create a new post', function () {
            return fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
                .then(response => response.text())
                .then(result => result);
        });
        it('Get all posts after posting', function () {
            return fetch("https://jsonplaceholder.typicode.com/posts", requestGETOptions)
                .then(response => response.json())
                .then(json => expect(json.length).to.equal(101));
        });
        it('Create a new comment to my post', function () {
            return fetch("https://jsonplaceholder.typicode.com/posts/" + id + "/comments", requestOptionsComment)
                .then(response => response.text())
                .then(result => result)
                .catch(error => console.log('error', error));
        });
        it('Getting my post', function () {
            return fetch("https://jsonplaceholder.typicode.com/posts/" + id, requestGETOptions)
                .then(response => response)
                .then(result => expect(result.status).to.equal(200));
        });
        it('Validate the comment', function () {
            return fetch("https://jsonplaceholder.typicode.com/posts/" + id + "/comments", requestGETOptions)
                .then(response => response.json())
                .then(json => expect(json.body).to.equal(comment));
        });
        it('Delete the comment', function () {
            return fetch("https://jsonplaceholder.typicode.com/posts/" + id + "/comments/" + commentId, requestOptionsDelete)
                .then(response => response)
                .then(result => expect(result.status).to.equal(200));
        });
        it('Get all post comments', function () {
            return fetch("https://jsonplaceholder.typicode.com/posts/" + id + "/comments", requestGETOptions)
                .then(response => response.json())
                .then(json => expect(json.length).to.equal(0));
        });
        it('Delete the post', function () {
            return fetch("https://jsonplaceholder.typicode.com/posts/" + id, requestOptionsDelete)
                .then(response => response)
                .then(result => expect(result.status).to.equal(200));
        });
        it('Get all posts', function () {
            return fetch("https://jsonplaceholder.typicode.com/posts", requestGETOptions)
                .then(response => response.json())
                .then(json => expect(json.length).to.equal(100));
        });
    });
});