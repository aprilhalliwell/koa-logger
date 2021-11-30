# @dwd/koa-docker-logger
Logging for Koa REST API.
Sends messages to stdout.

## Installation
```
git pull https://github.com/aprilhalliwell/koa-logger.git
```

## Basic Usage
``` js
const Koa = require('koa');
const logger = require('koa-logger');
const app = new Koa();
app.use(logger);
app.listen(8080);
```

## Example Output
**Success**
```
OK 11/29/2021 04:02:00 PM 200 DELETE /api/v1/path (ip addr)
```
**Error**
```
ERROR 11/29/2021 04:04:04 PM 500 POST /api/v1/path (ip addr) Error: example error
    stack trace
```