# nuxt-wp

> A Nuxt.js project fetching data from the Wordpress API.

## Synopsis

This is a simple project to test the usage of the WP API within a Nuxt application.
It will use `process.env.API_BASE` (defaulting to `http://localhost`) to craft an endpoint to the WP API,
and display a list of `posts`, each pointing to a dynamic single `post` with dedicated pages.

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

