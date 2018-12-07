# Book Search App
This is a small implementation of a React/Redux frontend with a Node/Express API.

## Prerequisites
* Yarn v1.9.4
* Node v10.7

## Installation
* Clone the respository `git clone https://github.com/hernang87/book-search-app.git`
* Move into the base of the project `cd book-search-api`
* Install dependencies `yarn install-deps`
    * This script installs dependencies for both API and Frontend

## Running the application
For development purposes: `yarn dev`, by default it starts the Frontend on port 3000 and the API on port 3002. If `process.env.PORT` exists it will use that for the API instead.

### Starting the Frontend
Simply run `yarn client` on the project's root.

### Starting the API
Simply run `yarn server` on the project's root.
