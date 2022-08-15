// 在这个层级很深的地方引入utils/math.js文件
// import { sum } from "../../../math"; 这样写可读性太差了,
// 需要配置别名 在vue.config.js里配置

// 当配置好别名之后 输入路径不会有提示，VSCode不知道是哪里的utils

// 可以在当前项目目录里配置jsconfig.json文件，来告诉VSCode我这里有一个文件这个文件我用来指向谁，让vscode更友好的提示
/*
  {
  "compilerOptions": {
    "target": "es5", //打包出来是什么样的代码
    "module": "esnext",//使用 es模块化规范
    "baseUrl": "./", //当前文件夹的对应路径，相当于在paths配置的路径前面加上./相对路径 ：./src/*
    "moduleResolution": "node", //模块查找顺序，按照node规则查找对应的文件
    "paths": { //路径
      "@/*": [
        "src/*"
      ],
      "utils/*":[  //在这里配置utils文件下的路径
        "src/utils/*"
      ]
    },
    "lib": [ //可能会用到那些库，vscode就会给到更好的提示
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  }
}
*/ 


import { sum } from "utils/math";

console.log(sum(20,30));