const {noramlizeURL} = require('./crawl.js')
const {test , expect} = require('@jest/globals')

test('noramlizeURL ' , ()=>{
    const input = 'https://blog.boot.dev/path';
    const actual = noramlizeURL(input);
    const expeceted = 'blog.boot.dev/path';

    expect(actual).toEqual(expeceted);
})
test('noramlizeURL strip protocol ' , ()=>{
    const input = 'https://blog.boot.dev/path/';
    const actual = noramlizeURL(input);
    const expeceted = 'blog.boot.dev/path';

    expect(actual).toEqual(expeceted);
})