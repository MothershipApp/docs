# Setting up Logs

> Capturing the logs on Mothership is a great way to find issues that your users are experiencing. Mothership supports both server-side logs and client-side logs. You will need to install the appropriate library in your project to begin capturing logs which we explain below:

## Generating your log token:

Before you get started you will want to generate a log token in the **Project Settings** of your project on [Mothership](https://mothership.app).

![Screenshot of the Log Settings in Project Settings](/imgs/log-token.png "Screenshot of the Log Settings in Project Settings")

Once this key is generated you can use it on your server-side and client-side.

## Server Side

## Installing Mothership PHP Error Logger

You can find the general PHP package on [Github](https://github.com/MothershipApp/php-logs).

### Install through composer

```sh
composer require mothership-app/php-logs
```

### General PHP

There are a million use cases for where an how to inject this into your code. Essentially, if you are using a framework you want to piggyback onto the error handler to pass it to the Mothership logger. [Let us know](https://mothership.app/support) if you need help with implementation on a major framework.

```php
use Mothership\Logger;

Logger::init([
    'access_token' => 'XXXXXXXXX - YOUR KEY - XXXXXXXX',
    'environment'  => 'production'
]);
Logger::error($exception);
```

### Laravel

Edit your `app/Exceptions/Handler.php` file with the following and you are good to go. (Remember to change your key!)

```php
use Illuminate\Support\Facades\App;
use Mothership\Logger;
...

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Exception $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        if ($this->shouldReport($exception))
        {
            Logger::init([
                'access_token' => 'XXXXXXXXX - YOUR KEY - XXXXXXXX',
                'environment'  => App::environment()
            ]);
            Logger::error($exception);
        }

        parent::report($exception);
    }

```

## Client Side

### Installing the Mothership JavaScript Package

#### As a JS Module

To import mothership js logs as a module include it an initialize with your logging token at [https://mothership.app/](https://mothership.app/) > Project > Project Settings > Log Settings

```sh
yarn add mothership-js
```

```sh
npm install mothership-js --save
```

```js
import MothershipJs from 'mothership-js'
...
var mjs = new MothershipJs({apiKey: 'XXXXXXXX'});
```

Do note that you will need Mothership JS to init pretty early in your page load to catch all the errors so ensure it's bundled in something that loads towards the top of the head before any other libraries that you may want to debug

#### As a Library

Download [mothership-js.lib.js](https://raw.githubusercontent.com/MothershipApp/mothership-js/master/library-dist/mothership-js.lib.js) and place it in your javascript directory (the example below we assume it's called "js").

Drop the following into your `<head>` as close to the top as you can and populate the apiKey with your logging token at [https://mothership.app/](https://mothership.app/) > Project > Project Settings > Log Settings

```html
<script>
    window.MothershipConfig = { apiKey: "XXXXXX" };
</script>
<script src="js/mothership-js.lib.js"></script>
```

This will create `window.MothershipJs` which you can access from anywhere to change configuration or execute errors in your try/catch or anywhere you need to log something.

### Options

Here are the default options

```js
apiKey: "", // required
enabled: true, // enables or disables logging entirely
environment: null, // String defining the environment
version: null, // String defining the version
minimumErrorLevel: "debug", // The minimum error level to log (must be at least "error" to capture uncaught exceptions)
customPayload: {}, // An object of any custom information
allowedDomains: [], // Array of strings of domains that should be logged
disallowedDomains: [], // Array of strings of domains that shouldn't be logged
disableIPCapture: false, // Tells Mothership not to store the IP Address of the client logging
captureUncaught: true // If disabled will not capture uncaught exceptions
```

They can be set on the library install like-a-so:

```html
<script>
    window.MothershipConfig={
      apiKey: "XXXXXX",
      disallowedDomains: ['google.com', 'whatever.com'],
      ...etc...
    }
</script>
<script src="/main.js"></script>
```

Or, on when using it as a js module:

```js
new MothershipJs({
  apiKey: 'XXXXXXXX',
  disableIPCapture: true,
  ...
});
```

You can also set individual settings like so:

#### Setting options from the library instance

```js
window.MothershipJs.environment = "production";
window.MothershipJs.version = "1.0.3";
```

#### Setting options from js module instance

```js
mjs.environment = "production";
mjs.version = "1.0.3";
```

### Usage

Out of the box Mothership JS will automatically submit all uncaught errors that happen. If you would like to log errors that _are_ caught you can use the following methods:

#### Example from Library Install

```js
window.MothershipJs.critical("Woah, we messed up");
window.MothershipJs.error("Like... really messed up");
window.MothershipJs.warn("I mean... not that bad");
window.MothershipJs.info("We just wanted to know");
window.MothershipJs.debug("This was all a test");
```

#### Example when using the JS Module

```js
mjs.critical("Woah, we messed up");
mjs.error("Like... really messed up");
mjs.warn("I mean... not that bad");
mjs.info("We just wanted to know");
mjs.debug("This was all a test");
```
