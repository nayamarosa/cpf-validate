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
});
