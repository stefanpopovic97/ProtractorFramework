let homepage = function() {

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let minus = element(by.cssContainingText('option', '-'));
    let goButton = element(by.id('gobutton'));
    let multy = element(by.cssContainingText('option', '*'));

    this.get = function(url) {
        browser.get(url);
    }

    this.enterFirstNumber = function(first) {
        firstNumber_input.sendKeys(first);
    }
    this.enterSecondNumber = function(second) {
        secondNumber_input.sendKeys(second);
    }
    this.clickgo = function() {
        goButton.click();
    }
    this.verifyResult = function(result) {
        var output = element(by.className('ng-binding', result));
        expect(output.getText()).toEqual(result);
    }
    this.minusOperation = function() {
        minus.click();
    }
    this.multiply = function() {
        multy.click();
    }

};
module.exports = new homepage();