Feature: Exercise 1
    Scenario: Create
        Given I have the following url <"https://jsonplaceholder.typicode.com">
        When I make a POST call to the following endpoint <"/post">
        Then the response is 201
        And the following values are present
            | title       | Frist post            |
            | body        | first body post       |
            | userId      | 1                     |
            | id          | 101                   |
    
    Scenario: Create new comment
        Given I have the following url <"https://jsonplaceholder.typicode.com">
        When I make a POST call to the following endpoint <"/posts/id/comments">
        Then the response is 201
        And the following values are present
            | name        | name for my comment   |
            | email       | albert@email.com      |
            | body        | lorem ipsum           |
            | postId      | 101                   |
            | id          | 501                   |

    Scenario: Read the post
        Given I have the following url <"https://jsonplaceholder.typicode.com">
        When I make a GET call to the following endpoint <"/posts/id">
        Then the response is 200
        And the following values are present
            | userId      | 1                     |
            | id          | 101                   |
            | title       | Frist post            |
            | body        | first body post       |

    Scenario: Read the new comment of the new post
        Given I have the following url <"https://jsonplaceholder.typicode.com">
        When I make a GET call to the following endpoint <"/posts/id/comments">
        Then the response is 200
        And the following values are present
            | postId      | 101                   |
            | id          | 501                   |
            | name        | name for my comment   |
            | email       | albert@email.com      |
            | body        | lorem ipsum           |

    Scenario: Read the new comment of the new post
        Given I have the following url <"https://jsonplaceholder.typicode.com">
        When I make a GET call to the following endpoint <"/posts/id/comments">
        Then the response is 200
        And the following values are present
            | postId      | 101                   |
            | id          | 501                   |
            | name        | name for my comment   |
            | email       | albert@email.com      |
            | body        | lorem ipsum           |

    Scenario: Delete the new comment of the new post
        Given I have the following url <"https://jsonplaceholder.typicode.com">
        When I make a DELETE call to the following endpoint <"/posts/id/comments/commentId">
        Then the response is 200

    Scenario: Delete the new post
        Given I have the following url <"https://jsonplaceholder.typicode.com">
        When I make a DELETE call to the following endpoint <"/posts/id">
        Then the response is 200

    Scenario: Read the deleted comment
        Given I have the following url <"https://jsonplaceholder.typicode.com">
        When I make a GET call to the following endpoint <"/posts/id">
        Then the response is 404