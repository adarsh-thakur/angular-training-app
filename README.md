# Angular Training App
Requirement to create a Angular Application
- Node.js V14+
- NPM 6+
- Angular-cli v12+

### Verify package Installation
Node.js -> node --version
NPM -> npm -v
Angular-cli -> ng version


### Create a angular application
- ng new <your-app-name>
- cd your-app-name
- npm install -> this will basically install all the dependency listed in package.json file and will put those in node_modules
- npm start -> it is written in package.json(under scripts)
- in your terminal type npm start  // this will help you to start your application


### Application Flow
- Enrty Point for user -> index.html -> main.ts -> app.module.ts -> app.component.ts

### Angular Follows
MVC -> Model View Controller

Components -> Building Blocks of Angular Application

What a angular application consist?
* module -> a module file which acts as the storage for component - It it not mandatory to have module file in each component -> but a application will have atleast one module. -> <cmp-name>.module.ts

// these files are mandatory to be in angular component
* component(TS) -> a component file -> <cmp-name>.component.ts -> in MVC it works as (model and controller)

* template file -> template fille is nothing but the view of your application -> it consist of HTML -> <cmp-name>.component.html -> in MVC it works as a view
0
* style-template/file -> this will be a CSS file -> it willbe applied to your compoenets view -> <cmp-name>.component.css

* specification file -> <cmp-name>.component.specs.ts -> testing code for your component -> not mandatory



<!-- Create a new component -->
ng g c <component-name> OR ng generate component <component-name>
-> this will give you ready-made component -> in folder <component-name>



<!-- REST API -> REPRESENTATIONAL STATEFUL TRANSFER APPLICATION PROGRAMMING INTERFACE-->
<!-- When ever you want to transfer data over the web(http) you will use REST -->