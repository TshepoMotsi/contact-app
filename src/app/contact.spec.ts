import {Contact} from './contact';

describe('Contact', () => {
  it('should create an instance', () => {
    expect(new Contact()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const contact = new Contact({
      title: 'hello',
      email: 'xxxxxx@gmail.com',
      complete: true
    });
    expect(contact.title).toEqual('hello');
    expect(contact.email).toEqual('xxxxxx@gmail.com');
    expect(contact.complete).toEqual(true);
  });
});
