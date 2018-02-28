import { RouterMarkPage } from './app.po';

describe('router-mark App', () => {
  let page: RouterMarkPage;

  beforeEach(() => {
    page = new RouterMarkPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
