# [Draft.js]

Draft.js is a JavaScript rich text editor framework, built for React and
backed by an immutable model.

This version was forked from https://github.com/facebook/draft-js 

We changed a few things : 
- we allowed the build from the master branch of draft-js (The latest version on npm isn't the one that is on master). We needed it because we wanted to have the fixs made on Android
- we fixed a bug that was happening with the draft-js-image-plugin
- we allowed the use of draftjs in an iframe (we took the inspiration from this PR : https://github.com/facebook/draft-js/pull/1938/files#diff-94e9fb5026eb1ddc320c97a98a4b1ccdR145)
