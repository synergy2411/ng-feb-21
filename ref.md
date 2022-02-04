# Break Time
- Tea/Coffee : 10:00AM - 10:20AM (20 Minutes) 
- Lunch : 12:30PM - 01:30PM (60 Minutes)
- Tea/Coffee : 03:00PM - 03:20PM (20 Minutes)


# Frontend Technologies
- HTML : presentation layer
- CSS : changes appearence / layout
- JavaScript : dynamic behaviour

# What is JavaScript?
- Scripting language
- Dynamic behaviour
- Client-side / Browser
- Open Source
- Single threaded
- Fast
- Non Blocking / Asynchronous
- Light-weight
- Event-driven
- Object-oriented (ES6+/ ES2015) - ECMA Script
- Object-based / Vanilla JavaScript

# Full Stack 
# MEAN - Mongo ExpressJS Angular NodeJS 
# MERN - Mongo Express React Node

# JavaScript Running Environment
- Browser Environment / Client-side Scripting
- Node Platform / Server-side Scripting


# NodeJS - platform built on V8 Engine, JavaScript with C++
- Node Package Manager (NPM)
- Node Runtime Environment (NRE / REPL)
- Node Native/ Core Module


# ES6/ES2015 Specification
- Arrow Function
- Destructuring
- Rest / Spread 
- Template String
- Block Scope Variables
- Default / optional Parameter
- Map / Set
- Class / inheritance
- Decorators
- Promise


# Async Concepts - time consuming
- Timers : setTimeout() / setInterval() / setImmediate()
- XMLHTTPRequest(XHR) Call : GET/ POST/ PUT/ PATCH/ DELETE
- File Operation - Reading / Writing
- Complex Calculation : Muliply [1500] * [1500]

# JavaScript Async vs Sync
- Executes all sync tasks first.
- Executes async tasks, depending upon the completion

- Callback Functions : supplied as parameter to another function
- Promises : to consume the JS async behaviour, Producer | Consumer 
    : Resolve - Success case
    : Reject - Failure case
    : then() - consume the promise, if resolved
    : catch() - consume the promise, if rejected
- Async...await : Another way to consume the promise API
- Observables : streams on which series of data flow at certain time interval


# Types in JavaScript
- Primitive : String, Numbers, Booleans
- Reference : Array, Object, Function, Date


# What is TypeScript?
- Superset of JavaScript given by Microsoft
- Type Definition
- Type Robust
- Object Oriented
- ES6+ Features
- Angular itself programmed in TS


# To install Typescript compiler
> npm install typescript -g
> tsc --version

# Compilation Context - ts-config.json file
> tsc --init
> tsc --watch


# JavaScript Libraries and Framework
- *Angular : MVC, UI efficiently, Shadow DOM, Components, Data binding, Templates, SPA, Great CLI Tool, Built Tool, State management, Filerting, formatting, DOM Manipulation, Dependency Injection, SSR, Material theme, XHR/AJAX Calls etc
- React : rendering the view efficiently; Virtual DOM, Diffing Algorithm, Hooks, Component based architecture; State Management - Redux, react-router : SPA, Form Validation : formik
- Vue : Evan You; Template oriented; Virtual DOM; Component; state management - vuex etc
- Redux : State management Tool; browser / server / native device; live code editing; time travel debugging etc
- Backbone : MVC pattern at client side
- Knockout : MVVM Pattern; efficient two way data binding
- AngularJS - v1.x : Library, MV* pattern, components, data-binding, filtering, formatting etc
- jQuery : DOM manipulation, AJAX Calls, Animations
- D3 : Creating charts
- Polymer : Custom Web Components
- Stencil : Virtual DOM, Creating Web Components, MVC pattern 
- *Ember : frequently change in API

- Express / Hapi / Koa  : Web framework for Node Platform; Server-side Framework
- NodeJS : Platform; Server-side


# Angular Compilers
- AoT : Ahead-Of-Time Compiler, Tree-shaking, reduce app size (by 40%), lesser time to load it on device
- JIT : Just-In-Time Compiler, renders compiled app quickly on browser
- Angular Universal : Server-side rendering


# Angular CLI Tool
> npm install @angular/cli@8 -g
> ng --version
> ng new users-app
> cd users-app
> ng serve | npm run start

> cd users-app
> npm install --legacy-peer-deps

> ng generate component path/to/components/componentName
> ng g c componentName
> ng g d directiveName
> ng g s serviceName
> ng g p pipeName
> ng g m moduleModule


> npm install bootstrap@4 

# Component Types
- Smart | Container | Parent (UsersComponent) - business logic, contains other component
- Dump | Presentational | Child (UserImg, UserInfo) - receives data from parent component to create the UI



# Pure Change

let user = {name :"John"}           // xxxx09iudyxhx

// Impure Change
user.name = "James"                 // xxxx09iudyxhx

// Pure Change
user = {name : "Jenny"}            // xxxx098djbwbd


let fruits = ["apple", "banana"]            // xxxx0909ufkjjsk

// Impure Change
fruits.push("guava")                    // xxxx0909ufkjjsk

// Pure Change
fruits = ["apple", "banana", "guava"]       // xxxxiuefbmd98

# Pure pipes will run on pure changes only (default)
# Impure pipes will run on pure as well as impure changes


# Forms and Form Controls - State and Classes
- ngValid | ngInvalid
- ngPristine | ngDirty
- ngTouched | ngUntouched


> ng new ng-workspace --create-application=false
> cd ng-workspace
> ng generate application <appName>
> ng generate library <libName>


# JSON-SERVER install command
> npm install json-server -g
> json-server --watch db.json

https://kcctechnologies.com/feedback/
https://kcctechnologies.com/feedback/online_attendance_form/


# Observable API
- are cold [by default]
- are lazy (don't execute until subscribe)
- emits series of data (multiplle data on same stream)
- pipeable operators (backbone of observable API)
- are cancelable (unsubscribable)
- based upon Events API (PubSub pattern)
- keeps the data source under watch condition

# Creational Operators
- from
- of
- timer
- range
- interval
- fromEvent
- Observable Constructor


# Pipeable Operators - pipe(operator())

> npm uninstall firebase --save
> npm i firebase@8


# Single Page App
- One HTML page
- Page will NOT reload / refresh
- User interactivity
- Served in one go
- less network bandwidth

# SPA Mode
- HTML5 Mode / Regular URL Mode -> http://www.your-domain.com/index/product
- Hashbang Mode (#) -> http://www.your-domain.com/index/#/product
- http://localhost:4200/product/overview


# Routing Terminologies
- Routes : Create the configuration to map components with url
- RouterModule - enable SPA, accepts route configuration
- RouterOutlet - provides the space on view to load the component template
- Router - programmatically navigate 
- ActivatedRoute - access to URL


# ng add @angular/pwa

# ng build --prod


> npm install -g http-server
> ng build --prod
> cd dist/users-app
> http-server -p 8081



- Chrome debugger
- Window back button


# Creating Production build with AOT compilation
> ng build --test --aot
> ng build

# Firebase Deployment Steps -
- npm install -g firebase-tools
- firebase login
- firebase init
- firebase deploy


# Unit Testing
- Component
- Service
- Pipe

- Karma : test-runner
- Jasmine : Testing Framework for JavaScript Apps
: describe() - Testing Suites
: it() - single test
: expect() - Assertion