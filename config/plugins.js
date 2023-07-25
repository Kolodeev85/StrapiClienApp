module.exports = ({ env }) => ({
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 3,
    },
  },
  upload: {
    config: {
      sizeLimit: 250 * 1024 * 1024,
      localServer: {
        maxage: 300000,
      },
    },
  },
});
