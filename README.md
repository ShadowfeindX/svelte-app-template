*Looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps built using Rollup that includes Typescript, SCSS, and Firebase support.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit ShadowfeindX/svelte-rollup-scss-typescript-firebase svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) and [firebase-tools](https://www.npmjs.com/package/firebase-tools) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...initialize [Firebase](https://firebase.google.com) with your project details...

```bash
firebase init
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```


## Running in dev mode

To run the app locally you will need to have the firebase emulators installed. Once you have done that you can start the emulator suite by running `firebase emulators:start`.

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```


## Deploying to the web

Once you are satisfied with your application, you can deploy it to firebase by running `firebase deploy`.