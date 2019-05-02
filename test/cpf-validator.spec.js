let chai = require("chai");
let expect = chai.expect;

let cpfValidator = require("../index");

describe("cpf lib", () => {

    describe("checkLength", () => {
        it("it has 11 numbers", () => {
            expect(cpfValidator.checkLength("12345574663")).to.equal(true);
        });
        it("it has 11 numbers", () => {
            expect(cpfValidator.checkLength("145872")).to.equal(false);
        });
        it("it has 11 numbers", () => {
            expect(cpfValidator.checkLength("145123465798652314")).to.equal(false);
        });
    });

    // describe("differentNumbers", () => {
    //     it("it has different numbers", () => {
    //         expect(cpfValidator.differentNumbers("true")).to.equal("true");
    //     });
    // });

    describe("checkCodesValidate", () => {
        it("the first number is equal to module", () => {
            expect(cpfValidator.checkCodesValidate("38089124801")).to.equal(true);
        });
        it("the first number is equal to module", () => {
            expect(cpfValidator.checkCodesValidate("73516511834")).to.equal(true);
        });
        it("the first number is equal to module", () => {
            expect(cpfValidator.checkCodesValidate("75489632145")).to.equal(false);
        });
        it("the second number is equal to module", () => {
            expect(cpfValidator.checkCodesValidate("38089124801")).to.equal(true);
        });
        it("the second number is equal to module", () => {
            expect(cpfValidator.checkCodesValidate("73516511834")).to.equal(true);
        });
        it("the second number is equal to module", () => {
            expect(cpfValidator.checkCodesValidate("75489632145")).to.equal(false);
        });
    });
    
});
