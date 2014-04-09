// http://docpad.org/docs/config

require('longjohn');

module.exports = {
  templateData: {
    site: {
      title: "bitcoin for dummies",
      description: "a primer on decentralized digial currencies",
    },
  },
  detectEncoding: true,
  plugins: {
    handlebars: {
      helpers: {
        partial: function (content, options) {
          return this.partial(content, options);
        },
        block: function (blockName) {
          return this.getBlock(blockName).toHTML();
        },
      },
    },
    browserifybundles: {
      bundles: [{
        arguments: ['-g', 'uglifyify'],
        entry: 'scripts/index.js',
        out: 'scripts/bundle.js',
      }],
      environments: {
        development: {
          bundles: [{
            arguments: ['-d'],
            entry: 'scripts/index.js',
            out: 'scripts/bundle.js',
          }],
        },
      },
    },
    raw: {
      'font-awesome': {
        command: ['rsync', '-r', 'node_modules/font-awesome/fonts/', 'out/fonts'],
      },
    },
    ghpages: {
      deployRemote: 'origin',
      deployBranch: 'gh-pages',
    },
  },
  collections: {
    slides: function () {
      return this.getCollection('documents').findAllLive({
        relativeOutDirPath: 'slides',
        isPagedAuto: { $ne: true },
      }).setComparator({ order: 1 });
    },
  },
  environments: {
    development: {
      port: 5000,
    },
  },
};
