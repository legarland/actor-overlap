# Actor Overlap
I wanted to familiarize myself with using Microsoft's Azure services, so I needed something to deploy. 
I decided to build upon IMDB's "common" feature and make a tool that shows you which actors/actresses appear in two films/shows 
of your choosing. I also wanted to show what character they played and a photo of that character if possible. 
IMDB doesn't provide a public API, so I am leveraging an open REST service of theirs for searching titles. 
I'm scraping their actual pages for the rest of the information.

## Architecture
A react app (create-react-app) hosted on Azure Storage that makes AJAX requests to an Azure Functions App.

## Azure Services
I am utilizing Azure Functions and Azure Storage for this project. Both are very cost efficient and fairly easy to setup. 
The deployment process to both services is a breeze with VS Code and Azure extensions.

## Setup
- Clone this repo and run `npm install` in both the `client` and `functions` folders.
- I recommend installing the Azure Storage and Azure Functions VS Code extensions. If you do not use VS Code then you will 
need to refer to the docs for command line deployment instructions.
- Press F5 to launch the functions app locally
- Run `npm start` in the `client` folder to launch the local react app
