import { Injectable } from '@angular/core';
import * as Web3 from 'web3';
// import 'assets/truffle-contract.js';

declare let require: any;
declare let window: any;
declare let TruffleContract: any;
const tokenAbi = require('assets/ExperienceChain.json');

@Injectable()
export class CustomWeb3Service {


  private _account: string = null;
  private _web3: any;
  private _deployedContract: any;

  private _tokenContract: any;
  private _tokenContractAddress = '0x16e8ADFFFed565477a9f38ef4980018dbeDa0172';
  public accounts = [
    '0x627306090abab3a6e1400e9345bc60c78a8bef57',
    '0xf17f52151ebef6c7334fad080c5704d77216b732',
    '0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef',
    '0x821aea9a577a9b44299b9c15c88cf3087f3b5544',
    '0x0d1d4e623d10f9fba5db95830f7d3839406c6af2',
    '0x2932b7a2355d6fecc4b5c0b6bd44cc31df247a2e',
    '0x2191ef87e392377ec08e7c08eb105ef5448eced5',
    '0x0f4f2ac550a1b4e2280d04c21cea7ebd822934b5',
    '0x6330a553fc93768f612722bb8c2ec78ac90b3bbc',
    '0x5aeda56215b167893e80b4fe645ba6d5bab767de'
  ];


  constructor() {
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this._web3 = new Web3(window.web3.currentProvider);
    } else {
      console.warn(
        'Please use a dapp browser like mist or MetaMask plugin for chrome'
      );
    }
    this._tokenContract = TruffleContract(tokenAbi);
    this._tokenContract.setProvider(window.web3.currentProvider);
    console.log(this._web3);
    this._tokenContract.deployed().then(r => {
      this._deployedContract = r;
    });
  }

  public addCompletedWork(accountId: string, link: string, skill: number) {
    // todo check completed work (call to git || jira API)
    this._deployedContract.add_mentor().then(r => {
      this._deployedContract.add_skill(accountId, skill, this.genRN(50));
    });
  }

  public getSkills(account: string) {
    return Promise.all([this._deployedContract.get_employee_data(account, 1),
    this._deployedContract.get_employee_data(account, 2)]);
  }

  private genRN(limit: number): number {
    return Math.floor(Math.random() * limit);
  }

}
