import {expect} from "chai";
import IdentifyDuplicates from "../source/identify-duplicates.js";

describe("IdentifyDuplicates", () => {
    it("shall exist", () => {
        let identifyDuplicates = new IdentifyDuplicates();

        expect(identifyDuplicates).to.be.defined;
    });

    it("shall have a checkDuplicates method", () => {
        let identifyDuplicates = new IdentifyDuplicates();

        expect(identifyDuplicates.checkDuplicates()).to.be.defined;
    });

    it("should return the number of letters which have duplicates", () => {
        let identifyDuplicates = new IdentifyDuplicates();

        expect(identifyDuplicates.checkDuplicates('abcde')).to.equal("0 # no characters repeats more than once");
        expect(identifyDuplicates.checkDuplicates('aabbcde')).to.equal("2 # 'a' and 'b'");
    });
});
