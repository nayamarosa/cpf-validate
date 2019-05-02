let chai = require("chai");
let expect = chai.expect;

let cpfValidator = require("../index");

describe("cpf lib", () => {

    describe("cpfValidator", () => {
        it("cpf length is valid to check", () => {
            expect(cpfValidator.cpfValidator("57097570806")).to.equal(true);
        });
        it("cpf length is valid to check", () => {
            expect(cpfValidator.cpfValidator("145872")).to.equal(false);
        });
        it("cpf different numbers is valid to check", () => {
            expect(cpfValidator.cpfValidator("11111111111")).to.equal(false);
        });
        it("cpf codes validate is valid", () => {
            expect(cpfValidator.cpfValidator("57097570806")).to.equal(true);
        });
        it("cpf codes validate is valid", () => {
            expect(cpfValidator.cpfValidator("75489632145")).to.equal(false);
        });
    });

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

    describe("checkIfSameNumber", () => {
        it("it has different numbers", () => {
            expect(cpfValidator.checkIfSameNumber("11111111111")).to.equal(false);
        });
        it("it has different numbers", () => {
            expect(cpfValidator.checkIfSameNumber("25436851247")).to.equal(true);
        });
    });

    describe("checkCodesValidate", () => {
        it("the first number is equal to module", () => {
            expect(cpfValidator.checkCodesValidate("57097570806")).to.equal(true);
        });
        it("the first number is equal to module", () => {
            expect(cpfValidator.checkCodesValidate("73516511834")).to.equal(true);
        });
        it("the first number is equal to module", () => {
            expect(cpfValidator.checkCodesValidate("75489632145")).to.equal(false);
        });
    });
    
});
