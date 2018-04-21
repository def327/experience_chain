'use strict';

var ExperienceChain = artifacts.require('ExperienceChain');

// const expectThrow = async promise => {
//   try {
//     await promise;
//   } catch (error) {
//     // TODO: Check jump destination to destinguish between a throw
//     //       and an actual invalid jump.
//     const invalidOpcode = error.message.search('invalid opcode') >= 0;
//     // TODO: When we contract A calls contract B, and B throws, instead
//     //       of an 'invalid jump', we get an 'out of gas' error. How do
//     //       we distinguish this from an actual out of gas event? (The
//     //       testrpc log actually show an 'invalid jump' event.)
//     const outOfGas = error.message.search('out of gas') >= 0;
//     const revert = error.message.search('revert') >= 0;
//     assert(
//       invalidOpcode || outOfGas || revert,
//       'Expected throw, got \'' + error + '\' instead',
//     );
//     return;
//   }
//   assert.fail('Expected throw not received');
// };

contract('ExperienceChain', (accounts) => {
    
    let contract;

    before('setup contract', async function(){
        contract = await ExperienceChain.deployed()
    })

    describe("Test 1", function(){

        it("add_skill test", function() {

            emplyee_adreess = "33";
            skill_id = 55;
            hours = 24;


            contract.add_skill("33", 44, 8, {from: accounts[0]});
            console.log("add employee adress = " + emplyee_adreess + " skill id = " + skill_id + " hours = " + 8);
            console.log("finish add_skill");
        })

        it("get_employee_data test", async() =>{
            let result = await contract.get_employee_data.call("33", 44);
            console.log("result is " + result);
            console.log("finish get_employee_data test");
        })

    }) 
});