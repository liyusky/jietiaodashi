const fs = require('fs');
const path = require('path');
const flexSass = './dependencies/sass/_flex.scss'
const unitSass = './dependencies/sass/_unit.scss'
const btnSass = './dependencies/sass/_btn.scss'
const modulePath = './src/module'
const classPath = './src/class'

const FileType = ['vue', 'scss', 'js'];
const exDir = ['components', 'modal', 'module'];

const Template = {
  vue: fs.readFileSync('./dependencies/tempalte/tempalte.vue', 'utf8'),
  scss: fs.readFileSync('./dependencies/tempalte/tempalte.scss', 'utf8'),
  js: fs.readFileSync('./dependencies/tempalte/tempalte.js', 'utf8')
};

function build (dir, strict) {
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
    let files = result.files;
    var name = path.basename(dir);

    if (!exDir.includes(name)) {
      if (!files.includes(`${name}.config.js`) && strict) {
        console.log(`${dir} 下不存在 ${name}.config.js`)
      }
      else {
        FileType.forEach(type => {
          let file = name + '.' + type;
          let goal = path.join(dir, file)
          let content = Template[type]
          if (!files.includes(file)) {
            if (type == 'scss') {
              scssSrc = `@import '${path.relative(goal, flexSass).replace(/\\/g, '/').replace('../', '')}';\n`
              scssSrc += `@import '${path.relative(goal, unitSass).replace(/\\/g, '/').replace('../', '')}';\n`
              // scssSrc += `@import '${path.relative(goal, btnSass).replace(/\\/g, '/').replace('../', '')}';\n`
              content = scssSrc + content
              content += `.${name} {}`
              scssSrc = ''
            }
            else if (type == 'vue') {
              let componentName = setComponentsName(name)
              if (strict) {
                var importContent = `// include dependence\n`
                var componentContent = `// include components\n`
                try {
                  let configPath = './' + path.join(dir, `${name}.config.js`).replace('\\', '\/')
                  let config = require(configPath)
                  for (let key in config) {
                    switch (key) {
                      case 'vuex':
                        let vuexArr = []
                        if (config.vuex.mutations) {
                          vuexArr.push('mapMutations')
                        }
                        if (config.vuex.state) {
                          vuexArr.push('mapState')
                        }
                        if (vuexArr.length > 0) {
                          importContent += `import { ${vuexArr.join(', ')} } from 'vuex'\n`
                        }
                        break
                      case 'class':
                        for (let item in config.class) {
                          if (config.class[item]) {
                            importContent += `import ${item} from '${path.relative(goal, classPath).replace(/\\/g, '/').replace('../', '')}/${item}.class.js'\n`
                          }
                        }
                        break
                      case 'component':
                        for (let component in config.component) {
                          if (config.component[component]) {
                            importContent += `import ${setComponentsName(component)} from '${path.relative(goal, modulePath).replace(/\\/g, '/').replace('../', '')}/${component}/${component}.vue'\n`
                            componentContent += `\t\t${setComponentsName(component)},\n`
                          }
                        }
                        importContent = importContent.substr(0, importContent.length - 1)
                        componentContent = componentContent.substr(0, componentContent.length - 2)
                        break
                    }
                  }
                } catch (error) {
                  console.log(error)
                }
                content = content.replace('// include dependence', importContent)
                content = content.replace('// include components', componentContent)
              }
              content = content.replace('SITE_CLASS_NAME', name)
              content = content.replace('SITE_MODULE_NAME', componentName)
              content = content.replace('SITE_SASS_NAME', `./${name}.scss`)
            }
            fs.writeFile(goal, content, (err) => {
              if (err) throw err
              console.log(goal + '创建成功')
            });
          }
        });
      }
    }

    files.forEach(item => {
      let currentDir = path.join(dir, item);
      fs.stat(currentDir, (err, stats) => {
        if (stats.isDirectory()) {
          return build(currentDir, strict);
        }
      });
    });
  }).catch((err) => {
    console.log(err);
  });
}

build('./src/components', true);
build('./src/module', false);

function resolve(path) {
  let arr = path.split('/')
}

function setComponentsName (name) {
  let nameArr = name.split('-')
  nameArr.forEach((value, index) => {
    nameArr[index] = value.substring(0, 1).toUpperCase() + value.substring(1)
  })
  nameArr.push('Component')
  return nameArr.join('')
}
