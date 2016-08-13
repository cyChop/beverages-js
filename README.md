# beverages.js

[travis-badge]: https://img.shields.io/travis/cyChop/beverages-js.svg
[travis]: https://travis-ci.org/cyChop/beverages-js
[sonarc-badge]: https://img.shields.io/sonar/https/sonar.keyboardplaying.org/org.keyboardplaying.js:beverages/coverage.svg
[sonarc]: https://sonar.keyboardplaying.org/overview/coverage?id=org.keyboardplaying.js:beverages
[sonarq-badge]: https://img.shields.io/sonar/https/sonar.keyboardplaying.org/org.keyboardplaying.js:beverages/tech_debt.svg
[sonarq]: https://sonar.keyboardplaying.org/overview/debt?id=org.keyboardplaying.js:beverages
[issues-badge]: https://img.shields.io/github/issues-raw/cyChop/beverages-js.svg
[waffle]: https://waffle.io/cyChop/beverages-js
[licens-badge]: https://img.shields.io/github/license/cyChop/beverages-js.svg
[licens]: https://opensource.org/licenses/MIT

[gdrive-sheet]: https://docs.google.com/spreadsheets/d/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/pubhtml
[demo-page]: https://github.io/cyChop/beverages-js

[npm]: https://www.npmjs.com
[gulp]: http://gulpjs.com
[webpack]: https://webpack.github.io

[![Build status][travis-badge]][travis]
[![Test coverage][sonarc-badge]][sonarc]
[![Technical debt][sonarq-badge]][sonarq]
[![Issues][issues-badge]][waffle]
[![License: MIT][licens-badge]][licens]

When people know you like teas or good coffees, it quickly become a go-to gift idea and you can end up with quite a collection.
So, when you propose a hot beverage to your guests, the "Sure! What you got?" answer can become problematic.

This jQuery plugin aims at solving this problem. **Store all your beverages in a [Google Drive sheet][gdrive-sheet]** and
show [the list][demo-page] to your guests. They can use **filters** (or even **full-text search**) to show only the beverages
they are interested in, and if there's is still too much choice, let chance decide.

When they're done, you only have to check the pick summary to know how many cups you must prepare in each temperature and
how long to brew each.

The list is designed to be responsive and work on mobile devices, so that you can pick your tablet, bring the menu up and
pass it among your guests.

##### But... "beverages"?

True, the name is a bit broad, as this was more specifically designed for _hot_ beverages, especially teas. It should however not require that much work to adapt it to work fine with beers or even wines, replacing the basis with the wine color or beer type, the brand with the brewery, moment with the type of dish this goes with, ...

You are welcome to fork and make it your own.

## Use it

### Jet start

Easy enough:

- Prepare and publish your Google Sheet (see the ad hoc section to learn how to get the template and use it). Copy the ID in the URL (e.g. `15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI` in `https://docs.google.com/spreadsheets/d/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/pubhtml`).
- Include the plugin stylesheet (or write your own).
- Include the plugin JavaScript (in the language you prefer; English and French are available).
- Call it up and pass the ID from you Google Sheet:
```javascript
$('#beverages').beverages('15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI');
```

### Options

You can pass options to the plugin if need be:
```javascript
$('#beverages').beverages({
    gSheetId: '15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI',
    filters: {
        basis: ['teas'],
        autoTime: true,
        moments: ['unknown']
    }
});
```

| Option             | Mandatory | Format  | Description |
| :----------------- | :-------: | :------ | :---------- |
| `gSheetId`         | **Yes**   | String  | The ID of the Google Sheet containing your data. This ID can be found in the URL to the published sheet (e.g. `15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI` in `https://docs.google.com/spreadsheets/d/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/pubhtml`) |
| `celsius`          | No        | boolean | Set this to `true` if you want to use Celsius. Fahrenheit will be used otherwise. |
| `filters`          | No        | Object  | The filters which are active by default. All filters are active if this option is not supplied. |
| `filters.teas`     | No        | Array   | The tea basis filters to be activated by default. The possible values are:<ul><li>`tea-black`</li><li>`tea-green`</li><li>`tea-oolong`</li><li>`tea-white`</li><li>`tea-rooibos`</li><li>`teas` (special value to activate all of the above)</li><li>`infusion`</li><li>`coffee`</li><li>`cocoa`</li></ul>If several filters are activated, teas with at least one valid condition will show (it's an OR, not an AND). If this property is not supplied, all filters will be active by default. |
| `filters.moments`  | No        | Array   | The moments filters to be activated by default. The possible values are:<ul><li>`morning`: show teas advised for morning;</li><li>`daytime`: show teas advised for daytime;</li><li>`evening`: show teas advised for evening;</li><li>`unknown`: show teas with no advice.</li></ul>If several filters are activated, teas with at least one valid condition will show (it's an OR, not an AND). If neither this property nor `autoTime` are supplied, all filters will be active by default. |
| `filters.autoTime` | No        | boolean | If `true`, the moments filters will automatically activate depending on the time of day. This option will not deactivate any filter set using the `moments` property of `filters`. |

### :construction: Things to add to this documentation

- troubleshooting (why doesn't it work, what doess this error message mean, etc.)
- GoogleSheet (how to get the template and use it, what each column means, what values you can use, what you shouldn't do, ...)

## Contribute/fork

This project was built using [npm], [Gulp] and [Webpack]. A Gulp task (`webserver:dev`) has been included to run it as a local server.

After cloning this project, supposing you already installed [npm], you only need opening a terminal to the root of your project and run the following command lines:

```shell
npm install             # install all dependencies for the project
npm install -g gulp-cli # install the command-line client for Gulp
gulp webserver-dev      # run the local webserver-dev
```

The local webserver will be accessible at http://localhost:8080/dev/ (or http://localhost:8080/dev/offline.htm if you wish to develop without an internet connection). The corresponding source pages are `dev/index.htm` and `dev/offline.htm`.
