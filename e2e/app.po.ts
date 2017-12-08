import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path: string) {
    return browser.get(path);
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

  getAddButtonInEditComponent() {
    return element(by.id('save'));
  }

  getCancelButtonInEditComponent() {
    return element(by.id('cancel'));
  }

  getDeleteButtonInEditComponent() {
    return element(by.id('delete'));
  }

  getInputFieldButtonInEditComponent() {
    return element(by.id('input'));
  }

  setInputFieldText(text) {
    this.getInputFieldButtonInEditComponent().sendKeys(text);
  }


}
