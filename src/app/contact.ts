export class Contact {
  id: number;
  title = '';
  email = '';
  complete = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
