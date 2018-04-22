import { Component, OnInit } from '@angular/core';
import { CustomWeb3Service } from '../custom-web3.service';

@Component({
  selector: 'app-confirmed-skills',
  templateUrl: './confirmed-skills.component.html',
  styleUrls: ['./confirmed-skills.component.scss']
})
export class ConfirmedSkillsComponent implements OnInit {
  public accounts: any;
  public wallets = [];
  constructor(private _csService: CustomWeb3Service) {
  }

  ngOnInit() {
    this.wallets = this._csService.accounts;
    setTimeout(() => {
      const accountsPromisies = Promise.all(this._csService.accounts.map(ac => this._csService.getSkills(ac)));
      accountsPromisies.then(r => {
        this.accounts = r;
        console.log(r);
      });
    }, 1000);
  }

}
