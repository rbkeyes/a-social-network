# A Social Network

![repo License](https://img.shields.io/github/license/rbkeyes/team-profile-generator?color=green)
![GitHub language count](https://img.shields.io/github/languages/count/rbkeyes/team-profile-generator?color=purple)
![GitHub top language](https://img.shields.io/github/languages/top/rbkeyes/team-profile-generator)


## Description

An API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list.

Technologies used include: 
- node
- nodemon (dev)
- express
- mongoDB
- mongoose

No starter code was provided for this project. However, the acceptance criteria were very clear and specific about the structure and functionality required and I found it to be quite straightforward once I had read through the instructions. 

The biggest challenge for me was deciding where to start! I ultimated decided to start by setting up the index and config, then followed the instructions to build the models, routes, and controllers. 

I ran into a bug when I started working on the routes and controllers to add and delete reactions. The error message was saying that Reaction was not defined. After looking through my code several times, I finally noticed that I had incorrectly defined the reactionSchema to be "new Reaction" rather than "new Schema". Once I corrected this mistake, everything ran as expected. 

This application has not been deployed, and does not include a front-end.



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Contact](#contact)


## Installation


To install and run this application, you must have Node.js on your computer. Instructions to install Node.js can be found [here](https://nodejs.org/en/). You will also need to install [Insomnia](https://insomnia.rest/) to test the routes and view available data.

Clone the [GitHub repo](https://github.com/rbkeyes/a-social-network) to a local repo. The package-json file includes the necessary npm packages and can be installed by running 
```
npm i
```
in the terminal command line. 

To start the server, run
``` 
npm start
```
or, to start with nodemon, 
```
npm run dev
```

## Usage

Once you have installed all dependencies specified above and started the server, open Insomnia. Start a new HTTP request and enter `http://localhost:3001` for the URL. 

***User routes include:***

- **/api/users** : GET to find all users and POST to create new user.
    
    Sample JSON format to create new user in Insomnia:
    ```
    {
        "username": "[enter username]",
        "email": "[enter email]"
    }
    ```

- **/api/users/:userId** : GET to find specific user, PUT to find and update user, and DELETE to delete user. Add user's mongoDB _id to the route in place of **:userID** to use these routes.

- **/api/users/:userId/friends/:friendId** : POST to add a friend to user's friends array, and DELETE to pull friend from user's friends array. Add user's mongoDb _id in place of **:userId** and the user _id of the friend to be added in place of **:friendId** to use these routes.

***Thought routes include:***

- **/api/thoughts** : GET to find all thoughts, and POST to create new thought and add to associated user's thoughts array. 

    Sample JSON format to create new thought in Insomnia:
    ```
    {
        "thoughtTest": "[enter thought text]",
        "username": "[username of user adding thought]"
    }
    ```

- **/api/thoughts/:thoughtId** : GET to find specific thought, PUT to update an existing thought, and DELETE to delete thought and remove from user's thoughts array. Add _id of specific thought to route in place of **/:thoughtId** to use these routes.

- **/api/thoughts/:thoughtId/reactions** : POST to create a new reaction and add to reactions array of associated thought. Add _id of specific thought to route in place of **/:thoughtId** in addition to entering JSON (sample below) to use these routes.

    Sample JSON format to create new thought in Insomnia:
    ```
    {
        "reactionBody": "[enter reaction text]",
        "username": "[username of user adding reaction]"
    }
    ```

- **/api/thoughts/:thoughtId/reactions/:reactionId** : DELETE to delete reaction and remove from reactions array of associated thought. Add _id of specific thought to route in place of **/:thoughtId**, and reactionId of reaction in place of **/:reactionId** to use these routes.

## Credits

Coursework for the bootcamp, module 18, was used as reference material in completing this project.


## License

[MIT license](./LICENSE)


## Tests

There are no tests for this application at this time.


## Contact

Still have questions? Find me on [GitHub](https://github.com/rbkeyes).

Or, you can [email me](mailto:rbkeyes@gmail.com).

