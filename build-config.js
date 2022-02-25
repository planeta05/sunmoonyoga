const
  t3package = 'teem_template',
  paths = {
    src: './src',
    dest: './public'
  };

let tasks = {
  handlebars: {
    src: `${paths.src}/Hbs/pages/*.hbs`,
    data: {},
    options: {
      batch: [
        `${paths.src}/Hbs/modules`,
        `${paths.src}/Hbs/partials`
      ]
    },
    rename: {
      extname: '.html'
    }
  },
  scss: {
    src: `${paths.src}/Scss/*.scss`,
    base: `${paths.src}/Scss`,
    dest: `${paths.dest}/Css`
  },
  image: {
    src: `${paths.src}/Images/**/*`,
    dest: `${paths.dest}/Images`
  },
  video: {
    src: `${paths.src}/Videos/**/*`,
    dest: `${paths.dest}/Videos` // .mp4, .avi, .mov in .gitignore
  },
  font: {
    src: `${paths.src}/Font/*.*`,
    dest: `${paths.dest}/Font`
  },
  wasm: {
    src: `./node_modules/hyphenopoly/patterns/de.wasm`,
    concat: 'de-DE.wasm',
    dest: `${paths.dest}/JavaScript/patterns`
  },
  babel: {
    srcs: [
      `${paths.src}/Hbs/modules/**/*.es6`,
      `${paths.src}/JavaScript/Controller/*.es6`,
      `${paths.src}/JavaScript/*.es6`
    ],
    concat: 'app.js',
    dest: `${paths.dest}/JavaScript`
  },
  bundle: {
    // Add path/file to include to bundle
    srcs: [
      './node_modules/swiper/swiper-bundle.js'
    ],
    concat: 'bundle.js',
    dest: `${paths.dest}/JavaScript`
  },
};

module.exports = {
  t3package,
  paths,
  tasks
};
