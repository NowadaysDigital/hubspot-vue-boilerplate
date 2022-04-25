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
3. Change the destination folder to match your theme folder in hubspot
   ```
   const destination = 'hubspot-vue-boilerplate';
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

## Create a new module
When creating a new module you need to do a couple of things.
1. Duplicate the text.module folder and change the folder- and filenames to match the correct module
2. Also change the label in mete.json
3. Remove all fields in fields.json escept the module_name. Set the default value of the module_name to the module name. This is used when rendering the module.
4. Go into App.vue and add the module to the modules array by setting the key to the module name (same as module_name field) and module to the imported module.
5. Make any changes you want to the modules .vue file.

## Contributing
If you have any suggestions or improvements please feel free to reach out or create a pull request

## Learn more
* Hubspot local development: https://developers.hubspot.com/docs/cms/guides/getting-started-with-local-development
* Hubspot and javascript frameworks: https://developers.hubspot.com/docs/cms/guides/js-frameworks


