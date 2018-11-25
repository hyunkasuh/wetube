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
- Break into many small files of routers, and make all of the routes seperate
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
    - 아래 V-part에서, response는 templete으로 render하게 함.. 

#### ✦ V-part with Pug 
- **V**: <u>how does the data look</u>
- In the app.js, view engine을 pug로 설정
```app.set("view engine", "pug");```
- views folder: templete들의 모음 (home.pug 파일)
  - and change the contoller part to ...`=> res.render("home");`
  - layouts folder 에 main.pug, partials folder 에 header.pug, footer.pug, ...
- Local variables in pug
  - localsMiddleware라는 걸 따로 만들어서 local variables를 넣어두고 이를 app.js에서 use하면, 다른 templete에서도 이 local variables에 access할 수 있다. 
  - ※ 이름이 locals 이기는 하지만...we can use them in the global scope, in the whole website. 
- Templete variables in pug
  - contollers에서, render 함수의 두번째 argument를 통해, variable을 직접 templete에 전달할 수 있다. 
  - templete마다 달라질 수 있는 variable들...
- 🐶 pug 기타
  - indentation으로 element 간 관계를 결정
  - | 뒤에 태그명이 아닌 그냥 text를 넣을 수 있음

#### ✦ M-part
- **M**: <u>data</u>

## Adding pages constructing the website...(on going)
- [x] Search Controller
  - hanle in videoContoller, and templates.
- [x] Home
- [x] Join (register) + social authentication
- [x] Log In + social authentication
- [ ] User Detail
- [ ] User Profile
- [ ] Change Password
- [ ] Upload
- [ ] Video Detail
- [ ] Edit Video

⁉️ BAM? from KakaoTalk?

##### Home 화면
- Create a fake database called 'db.js'
  - video demo from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
- mixin: HTML elements that is going to be repeated in many parts of our website

##### Join controller
##### Log in and User detail controllers
##### Video detail, log out, Upload controllers and pages