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
});
