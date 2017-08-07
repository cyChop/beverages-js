# ![](resources/logo/beverages-js.png) beverages.js

[travis-badge]: https://img.shields.io/travis/cyChop/beverages-js.svg
[travis]: https://travis-ci.org/cyChop/beverages-js
[sonarc-badge]: https://img.shields.io/sonar/https/sonarqube.com/org.keyboardplaying.js:beverages/coverage.svg
[sonarc]: https://sonarqube.com/overview/coverage?id=org.keyboardplaying.js:beverages
[sonarq-badge]: https://img.shields.io/sonar/https/sonarqube.com/org.keyboardplaying.js:beverages/tech_debt.svg
[sonarq]: https://sonarqube.com/overview/debt?id=org.keyboardplaying.js:beverages
[codacy-badge]: https://img.shields.io/codacy/grade/91b218ebfb7941d7b057fbb3ed73e1b2.svg
[codacy]: https://www.codacy.com/app/cyrille-chopelet/beverages-js
[issues-badge]: https://img.shields.io/github/issues-raw/cyChop/beverages-js.svg
[issues]: https://github.com/cyChop/beverages-js/issues
[waffle]: https://waffle.io/cyChop/beverages-js
[licens-badge]: https://img.shields.io/github/license/cyChop/beverages-js.svg
[licens]: https://opensource.org/licenses/MIT

[demo-badge]: https://img.shields.io/badge/demo-%26%20doc-yellow.svg

[gdrive-sheet]: https://docs.google.com/spreadsheets/d/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI
[gdrive-template]: https://docs.google.com/spreadsheets/d/1a2bsFMPeye_lnqif9XEWHgwm1ZaBk5PnICnXhHmbVsw
[demo-page]: https://cychop.github.io/beverages-js

[yarn]: https://yarnpkg.com
[gulp]: http://gulpjs.com
[webpack]: https://webpack.github.io

[![Build status][travis-badge]][travis]
[![Test coverage][sonarc-badge]][sonarc]
[![Technical debt][sonarq-badge]][sonarq]
[![Codacy grade][codacy-badge]][codacy]
[![Issues][issues-badge]][issues]
[![License: MIT][licens-badge]][licens]
[![Demo & doc][demo-badge]][demo-page]

When people know you like teas or good coffees, it quickly become a go-to gift idea and you can end up with quite a collection.
So, when you propose a hot beverage to your guests, the "Sure! What you got?" answer can become problematic.

This utility aims at solving this problem. **Store all your beverages in a [Google Drive sheet][gdrive-sheet]** and
show [the list][demo-page] to your guests. They can use **filters** (or even **full-text search**) to show only the beverages
they are interested in, and if there's is still too much choice, let chance decide.

When they're done, you only have to check the pick summary to know how many cups you must prepare in each temperature and
how long to brew each.

The list is designed to be responsive and work on mobile devices, so that you can pick your tablet, bring the menu up and
pass it among your guests.

##### But... "beverages"?

True, the name is a bit broad, as this was more specifically designed for _hot_ beverages, especially teas. It should however not require that much work to adapt it to work fine with beers or even wines, replacing the basis with the wine color or beer type, the brand with the brewery, time with the type of dish this goes with&hellip;

You are welcome to fork and make it your own.

## Use it

### Jet start

Easy enough:

1. Prepare your Google Sheet:
  - Go to the [template][gdrive-template] and log into your Google account (don't have one? Sorry, I can't help you there). It has some comments if you hover over a header to know how to fill the data. **Don't change the header names** as those are required to parse the data into a nice-looking menu.
  - Click _File_ &rightarrow; _Make a copy_. Save to your own Google Drive.
  - Fill it out with your data.
2. Make your data available to the plugin:
  - Publish your Google Sheet (_File_ &rightarrow _Publish to the web..._; Publish).
  - Copy the ID of your sheet in the URL (e.g. `15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI` in `https://docs.google.com/spreadsheets/d/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/edit#gid=0`).
3. Prepare your page to run the script:
  - Include the plugin stylesheet (or write your own):
  ```html
  <link href="dist/beverages.css" rel="stylesheet"/>
  ```
  - Include the plugin JavaScript (in the language you prefer; English and French available):
  ```html
  <script src="dist/beverages.fr.js" type="text/javascript"></script>
  ```
  - Call it up and pass the ID from you Google Sheet:
  ```javascript
  beverages('15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI');
  ```

### Options

You can pass options to the plugin if need be:

```javascript
beverages({
    gSheetId: '15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI',
    filters: {
        basis: ['teas'],
        autoTime: true,
        times: ['unknown']
    }
});
```

| Option             | Mandatory | Format  | Description |
| :----------------- | :-------: | :------ | :---------- |
| `gSheetId`         | **Yes**   | String  | The ID of the Google Sheet containing your data. This ID can be found in the URL to the published sheet (e.g. `15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI` in `https://docs.google.com/spreadsheets/d/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/pubhtml`) |
| `celsius`          | No        | boolean | Set this to `true` if you want to use Celsius. Fahrenheit will be used otherwise. |
| `filters`          | No        | Object  | The filters which are active by default. All filters are active if this option is not supplied. |
| `filters.teas`     | No        | Array   | The tea basis filters to be activated by default. The possible values are:<ul><li>`tea-black`</li><li>`tea-green`</li><li>`tea-oolong`</li><li>`tea-white`</li><li>`tea-rooibos`</li><li>`teas` (special value to activate all of the above)</li><li>`infusion`</li><li>`coffee`</li><li>`cocoa`</li></ul>If several filters are activated, teas with at least one valid condition will show (it's an OR, not an AND). If this property is not supplied, all filters will be active by default. |
| `filters.times`  | No        | Array   | The times filters to be activated by default. The possible values are:<ul><li>`morning`: show teas advised for morning;</li><li>`daytime`: show teas advised for daytime;</li><li>`evening`: show teas advised for evening;</li><li>`unknown`: show teas with no advice.</li></ul>If several filters are activated, teas with at least one valid condition will show (it's an OR, not an AND). If neither this property nor `autoTime` are supplied, all filters will be active by default. If `autoTime` is active, you may want to enable `unknown` to include teas with no time recommendation. |
| `filters.autoTime` | No        | boolean | If `true`, the times filters will automatically activate depending on the time of day. This option will not deactivate any filter set using the `times` property of `filters`. |

### Compatibility

This plugin was written to be compatible with:

- the latest two versions of each major browsers;
- Internet Explorer from version 9;
- the latest [ESR](https://www.mozilla.org/en-US/firefox/organizations/) version of Firefox.

Since this was primarily developed for my own use and I have up-to-date browsers, I did not however test the backwards compatibility. Please let me know if you notice any bug.

## Contribute/fork

This project was built using [yarn], [Gulp] and [Webpack]. A Gulp task (`serve`) has been included to run it as a local server.

After cloning this project, supposing you already installed [yarn] and [Gulp], you only need opening a terminal to the root of your project and run the following command lines:

```shell
yarn install  # install all dependencies for the project
gulp serve    # run the local webserver-dev
```

The local webserver will be accessible at <http://localhost:8080/>. The corresponding source pages are `dev/index.html` and `dev/offline.html`.

### Customizing the stylesheet

The easiest way is to create your own style is to clone the project. You may be able to get the appearance you wish for simply by updating the `_variables.scss` file. If not, update the style as you wish.

## Known issues

Issue #22: This plugin is built upon [Bootstrap v4-alpha](https://v4-alpha.getbootstrap.com). The styles imported from it leak outside of the target container and may wreak havoc your own styling. To sum up: this plugin is best used on its own or with your own custom stylesheet.

This is to be fixed however as we work to design our own style, totally independent from Bootstrap. 
