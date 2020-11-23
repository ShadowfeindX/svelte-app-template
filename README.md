*Looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps built using Rollup that includes Typescript, SCSS, and Firebase support.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
degit ShadowfeindX/svelte-rollup-scss-typescript-firebase svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) and [firebase-tools](https://www.npmjs.com/package/firebase-tools) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
yarn install
```

...initialize [Firebase](https://firebase.google.com) with your project details...

```bash
firebase init
```

...add your firebase config to `src/firebase_config.ts`...

...then start the compiler.

```bash
yarn dev
```


## Running in dev mode

To run the app locally you will need to have the firebase emulators installed. Once you have done that you can start the emulator suite by running `yarn start`.

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src` and save it. The browser should reload and show your changes.

The service worker and any other webworkers reside in `service`. Your cloud functions reside in `functions`. The compiler will automatically run whenever you change these files as well.

Your app will be listening on all hosts by default, meaning it can be accessed by other devices on your network. To disable this behavior, change the hosting settings in `firebase.json`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.


## Building and running in production mode

To create an optimised version of the app:

```bash
yarn build
```


## Deploying to the web

Once you are satisfied with your application, you can deploy it to firebase by running `yarn deploy`.