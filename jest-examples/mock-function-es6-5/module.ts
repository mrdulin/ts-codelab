const obj = {
  getMessage() {
    return `Her name is ${this.genName()}, age is ${this.getAge()}`;
  }

  genName() {
    return 'novaline';
  }

  getAge() {
    return 26;
  }
}

export default obj;
