import {expect} from "chai";
//import IdentifyDuplicates from "../source/app.js";

describe("IdentifyDuplicates", () => {
    it("shall exist", () => {
        let identifyDuplicates = new IdentifyDuplicates();

        expect(identifyDuplicates).to.be.defined;
    });
});
