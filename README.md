Baus Boilerplate
------
Boilerplate for Universal JS applications with Webkit, React, Redux, and Express.

### Requirements
* [Node.js v6.9.5](https://nodejs.org/en/download/)

### Environment Variables
Non required dev variables
```
DEV_TOOL_POS={top|right|bottom|left}
DEV_TOOL_VISIBLE={true|false}
```

### Quick Dev Start
* `nvm use` if using [NVM](https://github.com/creationix/nvm) to select the correct version of Node
* `npm install -g babel babel-cli`
* `npm install`
* `npm start`


### Production Start
* `npm install`
* `npm run dist`
* `npm run prod`

### NPM Scripts
ex. `npm run [command]`

* `dev` - Runs Babel Node with Dev Webpack config for Express and Hot Module Reloading
* `postinstall` - Runs distribution task on install - specifically in place for Heroku build
* `dist` - Distribution task to build Production Webpack bundles
* `clean` - Remove any old builds and make a new distribution folder
* `eslint-all` - ESLint all .jsx & .js files excluding .gitignore files
* `eslint-file` - ESLint a specific file TBA at end of command
* `webpack-prod` - Production Webpack build command
* `start` - Start Node server
* `prod` - Start Node server for Production env
* `test` - TBD

### Modernizr
* Modernizr is a custom build generated by Webpack from `webpack/modernizr.config.js`
* Feature detect options can be found at https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json

### VM Environments for Local Development
Pick your poison - included are setups for Vagrant or Docker to assist in local development

#### Vagrant
* Install [Vagrant](https://www.vagrantup.com/docs/installation/) and run `vagrant up`

#### Docker
* Build container and change name or version tag as needed `docker build -t baus-boilerplate:1.0 .`
* Run container and change ports as needed `docker run --rm -it -v $(pwd):/var/www/dist -p 8080:8080 baus-boilerplate:1.0`

### Terraform
Set the required variables in `terraform.tfvars`. Then set the following variables in your environment:
```
  export TF_VAR_heroku_api_key=
  export TF_VAR_cloudflare_api_key=
```



### Structure

```bash
.
├── App/                              # Main Application
|   ├── Components/                   
|   |   ├── Component Group/          # Child Components / Dumb Components
|   |   |   ├── Index.jsx             # Componet Entry Point
|   |   |   ├── Component.jsx         # Child Component Incorporated in Index.jsx
|   |   ├── Component.jsx             # Single Component
|   |
|   ├── Containers/                   
|   |   ├── Container.jsx             # Main Parent / Smart Component
|   |
|   ├── Stylesheets/                  # Base Styles to be imported where needed
|   |   ├── Animations/               # Animation mixins and easing functions
|   |   ├── Defaults/                 # Default Global styles
|   |   ├── Fonts/                    # Font Families
|   |   ├── Mixins/                   # Mixin functions
|   |   ├── Modules/                  # Module Styles for Different Components
|   |   |   ├── Component.scss        # Specific styles imported for a component
|   |   ├── Utilities/                # Utility sytles - ie. clearfix
|   |   ├── Variables.scss            # Global variables
|   |
|   ├── Templates                     # Handlebars Templates for base page rendering
|   ├── app.js                        # Main App Entry Point for React Application for page content
|   ├── routes.js                     # Application Routes used by App.js with React-Router
|
├── Public                            # Public folder for output and static content
|   ├── Dist                          # Output folder for generated application
|   ├── Fonts                         # Font Files
|   ├── Images                        # Image Location
|
├── Server                            # Express Server Files
|   ├── Dev.Server.js                 # Todo: Seperate Dev server requirements from main server
|   ├── Server.js                     # Main Server to render and return page
|
├── Webpack                           # Webpack Config Files
|   ├── Dev.Config.js                 # Dev Config for Dev Server and Hot Loading
|   ├── Production.Config.js          # Production Output config to generate final files
|
├── Index.js                          # Express App Entry Point
```

### Webpack

Webpack is used as commonjs module bundler, css builder (using sass-loader) and assets loader (images and svg files).

#### Development Config
* Enables source maps
* [Hot Module Replacement](http://webpack.github.io/docs/hot-module-replacement.html) - Adds JS and CSS updates to page without reload or state change
* [webpack-error-notification](https://github.com/vsolovyov/webpack-error-notification) plugin. To get notified on errors while compiling the code, on Mac you must `brew install terminal-notifier`.

#### CSS Loading
In order to load CSS inline and prevent any FOUC both configs set a `process.env.BROWSER` global variable, useful to require CSS from the components, e.g:

```js
  if (process.env.BROWSER) {
    require('../style/MyComponent.scss');
  }
```

### TODO
- TDD / BDD
- Split code into chunks for different pages with webpack and include through [react router](https://github.com/rackt/react-router/blob/master/docs/guides/advanced/DynamicRouting.md)
