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
import  style from './index.css'

function() {
    return (<div className={styles.container} >content</div>)
}
```





Feature:
1. auto link flex.js, rem = 37.5
2. import jquery for development
3. package css style into static css file when build
4. use css module

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

