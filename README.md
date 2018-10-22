# Buyandsell

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.
Nodejs is setup for the backend of the project.
Important file and folder:
`server.js` : This is nodejs file that has express server
`server\routes\api.js` : This is api that is used by the font-end to communicate with back-end
`src\app` : This folder contain components of the applications
`src\app\app-routing.module.ts` : This file contains routings of the application and decides which components is displayed in which routing.

## Running the program

After cloning to your desired location in your system, go the the directory of the project from console and run `npm install`. This command will install all the module and add `node_modules` folder in the project. After that run `npm run build` command. This command will first build your project which will automatically create a `dist` folder in the project and after completing the execution of building application it will automatically run `node server` command that run the node server.

Now navigate to `http://localhost:3000/` which is our home page.
