import {EditPage} from "./edit.po";

describe('Edit page', () => {
  let page: EditPage;

  beforeEach(() => {
    page = new EditPage();
  });

  it('should have buttons and input in correct state', () => {
    page.navigateTo();
    expect(page.getAddButton().isEnabled()).toBe(false);
    expect(page.getCancelButton().isEnabled()).toBe(true);
    expect(page.getDeleteButton().isPresent()).toBe(false);
    expect(page.getInputField().isEnabled()).toBe(true);
    page.setInputFieldText('any car');
    expect(page.getAddButton().isEnabled()).toBe(true);
  });

});
