const fs = require('fs');
const path = require('path');
const config = './dependencies/config/config.js'

const exDir = ['components', 'modal'];

const configTemplate = fs.readFileSync('./dependencies/config/config.js', 'utf8');

function build (dir) {
  new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          dir: dir,
          files: files
        });
      }
    });
  }).then((result) => {
    let dir = result.dir;
    let name = path.basename(dir);
    let files = result.files;

    if (!exDir.includes(name)) {
      let file = `${name}.config.js`;
      let goal = path.join(dir, file)
      if (!files.includes(file)) {
        fs.writeFile(goal, configTemplate, (err) => {
          if (err) throw err;
          console.log(goal + '创建成功');
        });
      }
    }
    files.forEach(item => {
      let currentDir = path.join(dir, item);
      fs.stat(currentDir, (err, stats) => {
        if (stats.isDirectory()) {
          return build(currentDir);
        }
      });
    });
  }).catch((err) => {
    console.log(err);
  });
}

build('./src/components');

function resolve(path) {
  let arr = path.split('/')
}
