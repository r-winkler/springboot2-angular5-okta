import { AppPage } from './app.po';
import {browser} from "protractor";

describe('Cool cars app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to cool cars app!');
  });

  it('should have empty car list', () => {
    page.navigateTo();
    expect(page.getCarList().count()).toEqual(0);
  });

  it('should navigate to car-add component when add is clicked', () => {
    page.navigateTo();
    page.clickAddButton();
    expect(browser.getCurrentUrl()).toContain(browser.baseUrl + '/car-add');
  });

});
