import { RouterExamplePage } from './app.po';

describe('router-example App', function() {
  let page: RouterExamplePage;

  beforeEach(() => {
    page = new RouterExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
