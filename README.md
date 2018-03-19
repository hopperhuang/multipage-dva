# webpack-multipage


## Getting Started

Install dependencies.

```bash
$ npm i
```
```bash
$ npm i serve -g
```

Start dev server.

```bash
$ npm start
```

Build.

```bash
$ npm run build
```

Serve

```bash
$ npm run serve
```


import css/less

```
// index.js
import  styles from './index.css'
```

antd-mobile

```
// index.js
import { Button } from 'antd-mobile';
```


Feature:
1. auto link flex.js, rem = 37.5
2. import dva fro development
3. import antd-mobile for development
4. package css style into static css file when build
5. split common use modules to vendor
6. chunks name generate by contenthash, opimize cache

structure:
 ```
project
│   README.md
│      
│
└───src
    │--- assets
    │      │___ flex.js
    │
    └───pages
        │   
        │___module_one   
                │
                │___ index.ejs(required)
                │___ index.js(required)
                │___ index.css(required)
               .

```

