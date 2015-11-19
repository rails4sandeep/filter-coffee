![Alt text](http://farm9.staticflickr.com/8227/8470665558_8ed74d2775_o.jpg "filter-coffee")



# filter-coffee
filter-coffee helps you to lint your nodejs projects using eslint as mocha tests.

For more information about mocha go to https://mochajs.org/.
For more information about eslint go to http://eslint.org/.

##Installation
```
$ npm install --save-dev filter-coffee
```

It is a good idea to include the following in your package json

```javascript
{
    "eslint": "^1.8.0",
    "mocha": "^2.3.3",
    "chalk": "^1.1.1"
    }
```

##Usage

###Basic Usage

In your test file

```javascript
var coffee = require ('filter-coffee');
//pass the array of files to validate
coffee.eslint(['**/*.js']);
coffee.eslint(['index.js','gulpfile.js']);
```

Do not forget to use mocha to run the tests
 
```javascript
 mocha test.js
``` 

Optionally specify the path to the .eslintrc file if it is being used from some other location that is not the root of the directory
```javascript
coffee.configFile('path/to/config/file');
```
filter-coffee uses the nodejs api of eslint. So, it is possible to pass a number of configuration options.

###Optional configuration options
set path to the `.eslintrc` file. If not specified it expects that the file is at the root of the directory.
```javascript
coffee.configFile ('path/to/config/file');
```

set path to the `.eslintignore` file. If not specified it expects that the file is at the root of the directory.
```javascript
coffee.ignorePath ('path/to/ignore/file');
```

pass the environments
```javascript
coffee.envs(["browser", "mocha"]);
```

specify the extension of the files that needs to be validated. If nothing is specified, the default of '.js' is considered.
```javascript
coffee.extensions('.js');
```
pass an array of global variables. default is empty array.
```javascript
coffee.globals([]);
```

pass the array of directories to load custom rules from (default: empty array)
```javascript
coffee.rulePaths([]);
```

pass an object of rules to use (default: null)
```javascript
coffee.rules({
                     semi: 2
                 }); 
```

specify the parser to be used (default: espree)
```javascript
coffee.parser('espree');
```

set the cache to true to operate only on changed files
```javascript
coffee.cache(true);
```

name of the file or directory where the cache will be stored (default: .estlintcache)
```javascript
coffee.cacheLocation('path/to/cache/file');
```

##Issues

Raise the issue on the github repo https://github.com/rails4sandeep/filter-coffee/issues

##Improve

Would you like to improve filter-coffee, send a fork request
