import { Validators } from '@angular/forms';

const ipPattern =
  '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

export const IpaddressForm = {
  ip: ['', [Validators.required, Validators.pattern(ipPattern)]],
  label: ['', Validators.required],
};
