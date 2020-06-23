let homepage = require('../pages/homepage');
const { minusOperation } = require('../pages/homepage');
describe('demo calculator tests', function() {
    it('addition test', function() {


        homepage.get('http://juliemr.github.io/protractor-demo/')
        expect(browser.getCurrentUrl()).toBe('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('6');

        homepage.enterSecondNumber('4');

        homepage.minusOperation();

        homepage.clickgo();
        homepage.verifyResult('2');

        homepage.enterFirstNumber('6');

        homepage.enterSecondNumber('4');

        homepage.multiply();
        homepage.clickgo();

        homepage.verifyResult('24');
    });

});