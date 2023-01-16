# Project 1. Api Pet Store Automation

### Installation

You must have installed node.js

Then

Open your CMD

Clone the reposository https://github.com/germanmpesce/challengeAutomation.git

Install the dependencies with `npm install`. The dependencies contain 'newman' to run headless colecction.

In the route \challengeAutomation\apiPetStore, execute the collection and generate the Html Report with the following command:

`newman run "apiPetStoreCollection.json" -r html`

Or you can see the Html Report in route: apiPetStore\newman

### Collection

The collection contains asserts of multiple responses from API: https://petstore.swagger.io/

The user can see how to validate jsonSchema and statusCode


# Project 2. WebPage Demoblaze Automation

### Installation
You must have installed node.js

Then

Open your CMD

Clone the reposository https://github.com/germanmpesce/challengeAutomation.git

Install the dependencies with `npm install`. The dependencies contains 'cucumber' to run the BDD tests

In the route \challengeAutomation\demoblaze, execute the tests with the following command: 

`npm run open`

### Collection

The repository contains automation tests of multiple iterations from the web: https://www.demoblaze.com/

You can get SinUp, LogIn, LogOut and Add a Product on the cart

The user can see how to validate multiple responses from Demoblaze and get a headless report.

### About

Developed by Germán Pesce (ARG) - January 2023.
