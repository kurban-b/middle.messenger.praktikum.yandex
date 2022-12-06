export enum EPatterns {
  email = 'email',
  login = 'login',
  password = 'password',
  name = 'name',
  phone = 'phone'
}

export default class Validator {
  private email = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/
  private login = /(?!^\d+$)^[a-zA-Z0-9_-]{2,20}(?=.*[A-Za-z]).*$/mg
  private password = /(?=^.{8,40}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).*$/
  private name = /^[A-Za-zА-ЯЁа-яё-]+$/i
  private phone = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/gm

  test(str: string, patternName: keyof typeof EPatterns): boolean {
    return this[patternName]?.test(str)
  }

  testPassword(str: string): boolean {
    return this.password.test(str)
  }

  testPhone(str: string): boolean {
    return this.phone.test(str)
  }

  testName(str: string): boolean {
    return this.name.test(str)
  }

  testEmail(str: string): boolean {
    return this.email.test(str)
  }

  testLogin(str: string): boolean {
    return this.login.test(str)
  }
}
