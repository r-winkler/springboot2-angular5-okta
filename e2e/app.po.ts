import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mat-toolbar span')).getText();
  }

  clickAddButton() {
    return element(by.css('mat-card button')).click();
  }

  getCarList() {
    return element.all(by.repeater('car in cars'));
  }

}
