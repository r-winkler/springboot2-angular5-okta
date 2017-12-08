import { browser, by, element } from 'protractor';

export class EditPage {

  navigateTo() {
    return browser.get('/car-add');
  }

  getAddButton() {
    return element(by.id('save'));
  }

  getCancelButton() {
    return element(by.id('cancel'));
  }

  getDeleteButton() {
    return element(by.id('delete'));
  }

  getInputField() {
    return element(by.id('input'));
  }

  setInputFieldText(text) {
    this.getInputField().sendKeys(text);
  }

}
