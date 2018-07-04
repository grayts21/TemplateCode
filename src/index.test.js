const expect = require('chai').expect;
const { JSDOM } = require('jsdom');
// const { JSDOM } = jsdom;
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', function () {
  it('should say hello', function () {
    debugger;
    const index = fs.readFileSync('./src/index.html', "utf-8");
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).to.contain('Hello');
    dom.window.close();
  });
})
