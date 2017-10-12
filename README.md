# Ract Demo

## Quick start

1. Clone this repo using `git clone https://bitbucket.org/arabellatech/demo-react`
1. Run `yarn` to install dependencies.
1. Run `yarn start` to start the app.
1. If you get error running the above, apply fix for html-webpack-plugin - change line 37 in Find ExternalModuleFactoryPlugin.js to:
   `if(dependency && externals === dependency.request) {`


### Storybook

1. Run `npm i -g getstorybook` to instal StoryBook.
1. Run `yarn run storybook` to start StoryBook.

### Configuration
Configuration files are located in config/ENV/app.json
It is possible to have local configuration that is ignored by git by creating config/ENV/app.local.json
Can be useful to change the API endpoint for local machine, for example to use it from Docker.

## Documentation

- [**The Hitchhikers Guide to `react-boilerplate`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.
- [Overview](docs/general): A short overview of the included tools
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Styling](docs/css): How to work with the CSS tooling
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.

## Release
Follow the release process steps https://bitbucket.org/arabellatech/demo-react/wiki/Library_Release_Process
