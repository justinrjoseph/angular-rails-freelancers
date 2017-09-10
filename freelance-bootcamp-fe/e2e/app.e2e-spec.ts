import { FreelanceBootcampFePage } from './app.po';

describe('freelance-bootcamp-fe App', () => {
  let page: FreelanceBootcampFePage;

  beforeEach(() => {
    page = new FreelanceBootcampFePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
