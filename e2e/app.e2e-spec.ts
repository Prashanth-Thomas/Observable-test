import { DirectivesTestPage } from './app.po';

describe('directives-test App', () => {
  let page: DirectivesTestPage;

  beforeEach(() => {
    page = new DirectivesTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
