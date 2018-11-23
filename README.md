# WeTube 🌱

Cloning YouTube with VanillaJS and NodeJS

## Creating server with expressJS and nodeJS
- create server
- create routes
- handle routes 
  - GET / POST **request**
  - send **response** (such as html, css files)
    + req, res are objects.

#### ✦ babel
- babel-node will transform the code, so that we can use the newist JS version (ES6) syntax -> make it sexier!
  - such as arrow functions in JS (implicitly return)
- Install & check the "dependencies"...
  - @babel/node
  - @babel/presetenv
  - @bable/core

#### ✦ nodemon
- Everytime I save the JS file, it restarts again. (No save-stop-restart)
- Install, but put it in the "devDependencies" entry

## Middleware in express
- Think express server like an onion. it has many layers. The middlewares are the layers. center of the onion will be the last function that returns something to the users. (catching or checking user's status or somthing...)
  - Order of where we put the lines of middleware really metters!
    ```
    app.user(betweenHome); // write middlewares first!
    app.get("/", handleHome); // and then handle the routes
    ```
  - If you invoke `res.send("somthing");` inside of the definition of middleware instead of `next()`, it kills the connection.
#### ✦ morgan 
an example of popular middlewares
- for logging (registry of what's happening and where)
- have some options: `"tiny"` or `"combined"` or `"dev"`, ...
#### ✦ helmet
another example, for security purpose... 
#### ✦ cookie-parser
let the server to be able to understand cookies coming from users
- save user information in the cookie to be able to handle some sessions
#### ✦ body-parser
let the server be able to understand what data(Json, html,...) we send him 
- have some options to define: `urlencoded()` and `json()` ...

## Express Core Routing
Router in express: `express.Router()`
Divide and conquer, basically!
- Break into many small files of router, and make all of the routes seperate
- Mixing the URLs with functions.

## MVC Pattern
Model - View - Control, pattern = sexy structure
- **M**: <u>data</u>
- **V**: <u>how does the data look</u>
- **C**: <u>function that looks for the data</u>

#### ✦ C-part
- **C**: <u>function that looks for the data</u>
  - Seperate the URLS from the functions that execute them.
  - routers folder: router들의 모음 (`express.Router()`로 생성된) (routes.js: 사용된 route들의 이름 모음)
  - controllers folder: router의 response에 해당하는 function들의 모음

#### ✦ V-part with PUG 
- **V**: <u>how does the data look</u>

#### ✦ M-part
- **M**: <u>data</u>
- In the app.js, view engine을 put로 설정
```app.set("view engine", "pug");```
- view folder: templete들의 모음 (home.pug 파일)
- and change the contoller part to ...`=> res.render("home");`