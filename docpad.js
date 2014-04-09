// http://docpad.org/docs/config

require('longjohn');

module.exports = {
  templateData: {
    site: {
      title: "bitcoin for dummies",
      description: "a primer on decentralized digial currencies",
    },
    getSlides: function (path) {
      var outPath = 'slides' + path.substring(0, path.length - 1);
      return this.getCollection('documents').findAll({
        relativeOutDirPath: outPath,
        isPagedAuto: { $ne: true },
      }, { order: 1 });
    }
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
  environments: {
    development: {
      port: 5000,
    },
  },
};
