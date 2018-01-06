# Project 2 WDI13 by Joshua Schoenfeld

## Application Name: Petme

### App Overview

Petme is a basic social networking framework project I've created to emulate the basic functions of sites like imgur and reddit.
I hope to be able to implement multiple users who can add their multiple pets, and each of those pets can have multiple pictures and other identifying information.

#### [Heroku Link](https://schoenfeld-project2-wdi13.herokuapp.com/)

#### [Trello Board](https://trello.com/b/l9vYTumX/wdi-project-2)

#### [Figma Wireframes](https://www.figma.com/file/SlvcWeb3e0szCOA9F2KoXX1F/WDI13-Project-2-Wireframes)

#### [Figma ERD](https://www.figma.com/file/Pj3Yzj8Y0i5bILnPJrk7an/WDI13-Project-2-ERD)

### Schemas (Database Modeling)

```js
User = {
    ID: ID,
    username: String,
    password: String,
    pets: [petSchema],
}
Pets = {
    ID: ID,
    petName: String,
    age: Number,
    image:[imageSchema],
}
Images = {
    ID: ID,
    description: String,
    imageLink: String
}
```

#### Technologies used

* Node - js runtime
* NPM - package manager
* Express - web framework
* Mongoose - async DB handler
* HBS - view handler
* dotenv - loads environment variables, such as the DB
* body-parser - translator of rawtext
* trello - user story tracking
* figma - wire-framing
* vs code - text editor of choice
* imgur - image hosting

#### Approach taken

* Started off getting a baseline project working with npm and express-generator.
* Worked on getting a fleshed out README to build on later.
* Built out an ERD and wireframe.

#### Unsolved problems

* I'm sure this list is going to be very long.

#### Notes to yourself

* You'll get there someday!
* Never give up!
* Never Surrender!
* Harness the Passion of YOUTH!