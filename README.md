# Next.js 13 Link Component: Stricter prop validation bug

This repository demonstrates a subtle bug encountered when using the `next/link` component in Next.js 13 and above.  The updated component has stricter prop validation that throws an error when using a string as the `href` prop, even if the path is relative and correct.

## Bug Description

The `bug.js` file contains a simple component using the `Link` component with a relative path string ('/about'). Instead of navigating correctly, it throws an error.

## Solution

The `bugSolution.js` file shows the corrected usage.  The correct way is to pass the `href` prop as an object with the `href` property.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the error in the browser console when clicking the link in `bug.js`.  The `bugSolution.js` will work as expected.

## Solution Description

The error arises because Next.js now requires the `href` prop to be an object with a pathname, search, and hash property. Although Next.js 12 and below allow a string path, Next.js 13 and above require this object format for more type safety and robustness.
