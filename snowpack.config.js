/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    static: "/",
    src: "/dist",
  },
  plugins: [
    "@snowpack/plugin-svelte",
    // "snowpack-plugin-rollup-bundle",
    // {
    //   // equivalent to inputOptions.input from Rollup
    //   entrypoints: "build/index.js",
    //   extendConfig: (config) => {
    //     // https://rollupjs.org/guide/en/#outputoptions-object
    //     // config.outputOptions = { ... }

    //     // https://rollupjs.org/guide/en/#inputoptions-object
    //     // config.inputOptions = { ... }

    //     return config;
    //   },
    // },
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: "routes", src: ".*", dest: "index.html" },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
