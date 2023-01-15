# Project 1. Api Pet Store Automation


### Installation

You must have installed node.js

Then

Open your CMD

Clone the reposository https://github.com/germanmpesce/challengeAutomation.git

Install the dependencies with "npm install". The dependencies contains 'newman' to run headless colecction.

On the route \challengeAutomation\apiPetStore execute the collection and generate the HTML report with command:

 `newman run "apiPetStoreCollection.json" -r html`
 
 Or yo can see the HTML report in route: apiPetStore\newman

### Collection

The collection contains asserts of multiples responses from API: https://petstore.swagger.io/

The user can see how to validate jsonSchema and statusCode 




# Project 2. WebPage Demoblaze Automation


### Installation

You must have installed node.js

Then

Open your CMD

Clone the reposository https://github.com/germanmpesce/challengeAutomation.git

Install the dependencies with "npm install". The dependencies contains 'cucumber' to run the BDD tests

On the route \challengeAutomation\demoblaze execute the tests with:
`npm run open`


### Collection

The repository contains automation tests of multiples iterations from web: https://www.demoblaze.com/

You can get sinUp, logIn, logOut and add a laptop in the cart

The user can see how to validate multiples response from demoblaze and get report headless.

### About

Developed by Germán Pesce (ARG) - January 2023.
