import { Component1Page } from './app.po';

describe('component1 App', () => {
  let page: Component1Page;

  beforeEach(() => {
    page = new Component1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
