# Hubspot Vue 3 Boilerplate

This is a boilerplate for Hubspot themes using Vue 3 and vue/cli.
It is based on the [cms vue boilerplate](https://github.com/HubSpot/cms-vue-boilerplate)

## Hubspot setup
  ```
  npm install -g @hubspot/cli
  ```
1. Create hubspot config file to be able to upload your theme to hubspot
  ```
  hs init
  ```
2. Change default portal variable in vue.config.js
  ```
  const defaultPortal = 'dev' <-- change this to the name of your portal in hubspot.config.yml
  ```

## Project setup
1. Install dependencies
  ```
  npm install
  ```
2. Build and upload to hubspot
   1. Used to build and upload once
      ```
      npm run build
      ```
   2. Used to build and upload when changes occur
      ```
      npm run watch
      ```

## Contributing
If you have any suggestions or improvements please feel free to reach out or create a pull request

## Learn more
* Hubspot local development: https://developers.hubspot.com/docs/cms/guides/getting-started-with-local-development
* Hubspot and javascript frameworks: https://developers.hubspot.com/docs/cms/guides/js-frameworks


