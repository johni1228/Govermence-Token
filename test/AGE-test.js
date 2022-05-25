const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AGE contract", function () {
  
  let AGE;
  let age;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    AGE = await ethers.getContractFactory("AGEToken");
    [owner, addr1, addr2] = await ethers.getSigners();
    age = await AGE.deploy(owner.address);
    await age.deployed();
  });

  describe("Deployment", function()  {

    it("Should check name", async function () {
      expect(await age.name()).to.equal("AGE Token");
    });

    it("Should check symbol", async function () {
      expect(await age.symbol()).to.equal("AGE");
    });

    it("Should check pre-mintedAmount", async function () {
      expect(await age.balanceOf(owner.address)).to.equal(20000000);
    });
  });
});
