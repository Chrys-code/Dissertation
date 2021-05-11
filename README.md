# UniMeetingsApp

This is an application that aims to help people who needs to travel during the pandemic. During the study a set of problems were defined and the application offers feature(s) to help to solve these problems.

## Accounts to access the application for live testing on Heroku:

The application is personal- use only. There are no interactions between the accounts, so feel free to register.
Even though your password will be encrypted, I recommend to not to use real credentials!!! 

## Getting Started

To install locally:

- Clone the repository
- In the root folder:
- Run "npm run install" - This should install both server and client-side tools as both included in the same root package.json
- Open the server/server.js and copy the commented line  on line:11 into the next function. It should look like this: "const server = next({ dev, dir: path.join(__dirname, '../') })"
- Replace mongoDB connection to your mongoDB connection
- Run "npm run dev" - This should start a nodemon server concurrently with front-end in the same terminal
- Register and use the app

## Deployment on live system

- The application built to be hosted on Heroku as it needs a server for server-side rendering. 
- For deployment, remove copied code described the 4th step in the **Getting Started** section
- Upload to GitHub

  On Heroku:
  - Open a new project
  - On deploy tab: 
    - Attach GitHub Repository in which the application is uploaded
    - Scroll down the page, click deploy
    - Heroku automatically recognize heroku-postbuild (by now it is not required as " npm run build" is enough)
    - Wait until Heroku install, build, purging and compile the application 

  On other live host:
   - Run "npm run build" in the root folder

## Built With

* [Next.js](https://nextjs.org/) - The web framework used
* [TypeScript](https://webpack.js.org/) - JavaScript framework to help prevent bugs
* [Next-pwa](https://www.npmjs.com/package/next-pwa) - To generate service-worker and caching
* [Framer-motion](https://www.npmjs.com/package/framer-motion) - The animations made with
* [Webpack](https://webpack.js.org/) - Dependency Management
* [SCSS](https://sass-lang.com/) - Sassy Cascading Style Sheet
* [Node/Express](https://sass-lang.com/) - Backed with
* [MongoDB](https://www.npmjs.com/package/mongodb) - Database used
* [Jest](https://jestjs.io/) - Testing library used


## Authors

* **Krisztian Nagy** - *End-to-End development* - [Chrys-code](https://github.com/Chrys-code)

## Acknowledgments

This project was created as a University Assessment.

Initial problems:
 - Database was not structured with scalability in mind
 - Due to the server shutdown on Heroku, service-worker is not available after a server shutdown (it would be valid if the app is rebuilt on every server start...)
 - Front-End input validation is not implemented yet to help users register with fake credentials