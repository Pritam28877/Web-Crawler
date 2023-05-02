const { normalizeURL, getURLsFromHTML } = require('./crawl.js')
const { test, expect } = require('@jest/globals')

test('noramlizeURL ', () => {
    const input = 'https://blog.boot.dev/path';
    const actual = normalizeURL(input);
    const expeceted = 'blog.boot.dev/path';

    expect(actual).toEqual(expeceted);
})
test('noramlizeURL strip protocol ', () => {
    const input = 'https://blog.boot.dev/path/';
    const actual = normalizeURL(input);
    const expeceted = 'blog.boot.dev/path';

    expect(actual).toEqual(expeceted);
})
test('getURLsFromhtml', () => {
    const inputHtml = `
    <html>
         <body>
         <a href = "https://blog.boot.dev/">Boot.dev blog<a/>
         </body>
    </html>
    `;
    const inputUrl = "https://blog.boot.dev/"
    const actual = getURLsFromHTML(inputHtml , inputUrl);
    const expeceted = ["https://blog.boot.dev/"];

    expect(actual).toEqual(expeceted);
})