const Glob = require('glob');

// let entrys
module.exports = function getFiles() {
  const reg = /^\.\/src\/pages\/(.+)\/index.js$/;
  const files = Glob.sync('./src/pages/**/index.js');
  // eslint-disable-next-line
  const _filenames = files.map(file => reg.exec(file));
  const filenames = _filenames.map(file => [file[1], file[0]]);
  return filenames;
};
