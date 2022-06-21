class AssertionList {
  constructor(assertions) {
    this.assertions = assertions;
  }

  checkAll() {
    return this.assertions.every((assertion) => assertion.check());
  }
}

module.exports = AssertionList;
