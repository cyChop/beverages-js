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

## Use

Easy enough:

- Prepare and publish your Google Sheet (:construction: I will provide a template in a close future). Copy the ID in the URL
- Include the plugin stylesheet (or write your own).
- Include the plugin JavaScript (in the language you prefer; English and French are available).
- Call it up:
```html
<script type="text/javascript">
    $('#beverages').beverages({
        gSheetId: '15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI',
        filters: {
            bases: ['teas'],
            moments: ['unknown'],
            autoTime: true
        }
    });
</script>
```

[gdrive-sheet]: https://docs.google.com/spreadsheets/d/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/pubhtml
[demo-page]: https://github.io/cyChop/beverages-js