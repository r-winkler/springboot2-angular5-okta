import { AppPage } from './app.po';
import {browser} from "protractor";

describe('client App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo('/');
    expect(page.getParagraphText()).toEqual('Welcome to cool cars app!');
  });

  it('should be empty car list', () => {
    page.navigateTo('/');
    expect(page.getCarList().count()).toEqual(0);
  });

  it('should navigate to car-add component when add is clicked', () => {
    page.navigateTo('/');
    page.clickAddButton();
    expect(browser.getCurrentUrl()).toContain(browser.baseUrl + '/car-add');
  });

  it('should enable or disable buttons', () => {
    page.navigateTo('/car-add');
    expect(page.getAddButtonInEditComponent().isEnabled()).toBe(false);
    expect(page.getCancelButtonInEditComponent().isEnabled()).toBe(true);
    expect(page.getDeleteButtonInEditComponent().isPresent()).toBe(false);
    expect(page.getInputFieldButtonInEditComponent().isEnabled()).toBe(true);
    page.setInputFieldText('any car');
    expect(page.getAddButtonInEditComponent().isEnabled()).toBe(true);
  });

});
