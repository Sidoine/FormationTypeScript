import { StringValidator } from './validation';

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

const mailRegexp = /^[\w\.]+@[\w\.]+$/;

class EmailValidator implements StringValidator {
    isAcceptable(s: string) {
        return mailRegexp.test(s);
    }
}

export { EmailValidator };
export { EmailValidator as MailValidator };
