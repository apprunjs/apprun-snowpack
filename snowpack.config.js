/** @type {import("snowpack").SnowpackUserConfig } */
// eslint-disable-next-line no-undef
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-typescript'],
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
