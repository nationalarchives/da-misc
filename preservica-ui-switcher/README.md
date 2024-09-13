# Preservica UI Switcher

A simple JavaScript [bookmarklet](https://www.freecodecamp.org/news/what-are-bookmarklets/) to switch between the V1 and V2 user interfaces.

# How to use

- Copy the URI encoded bookmarklet code from `preservica-ui-switcher.bookmarklet.js`.
- Add a new bookmark to your browser of choice, paste the copied code into the URL field.
- When looking at an SO or IO in Preservica, click the bookmarklet to be redirected to the other UI.

# Caveats

- 2 versions of the code exist here as Chromium wasn't handling the transformation of URI encoded characters correctly when forming redirects. A tool like [caiorss/bookmarklet-maker](caiorss/bookmarklet-maker) can be used to generated the `.bookmarklet.js` version.
- When redirecting from an IO in V1 to V2 the breadcrum in V2 is incorrect. This is because the V2 URL expects the SO identifier but this isn't available from a V1 URL.
