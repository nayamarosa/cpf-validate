let chai = require("chai");
let expect = chai.expect;

let cpfValidator = require("../index");

describe("cpf lib", () => {

    // describe("transformToNumbers", () => {
    //     it("it has only numbers", () => {
    //         expect(cpfValidator.transformToNumbers("1234543212")).to.equal("1234543212");
    //     });
    // });

    describe("checkLength", () => {
        it("it has 11 numbers", () => {
            expect(cpfValidator.checkLength("12345574663")).to.equal(true);
        });
    });

    // describe("differentNumbers", () => {
    //     it("it has different numbers", () => {
    //         expect(cpfValidator.differentNumbers("true")).to.equal("true");
    //     });
    // });
    
});
