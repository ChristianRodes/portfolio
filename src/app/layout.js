// app/layout.js
// IMPORTANT: This file is REQUIRED if you have a root `app/not-found.js` or `app/error.js`.
// It simply passes children through, ensuring a root layout context exists for these special files.
// DO NOT include <html> or <body> tags here.

export default function RootLayout({ children }) {
	return children;
}
