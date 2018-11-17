
# JSConf Colombia 2018

Things are a bit rough around the edges and docs will improve.

## Load Testing with k6

* Install [k6](https://k6.io)
* Run `npm install` in `graphs` and `visual`
* Install [N|Solid](https://nodesource.com)
* Run `nsolid-console`

## Run a Load Test

* `cd visual && node app.js` (runs on port 7777)
    * currently assumes test app is on port 3333
* Start the test by hitting `http://localhost:7777/resume`

### After Tests are done

* `node parser.js logs/metrics > graphs/public/data/baseline.json` 
* `cd graphs && node app.js` (runs on port 2222)
* `http://localhost:2222/basic` to see graphs of result

* `node blocked.js` will produce a report of event loop blocked stack traces