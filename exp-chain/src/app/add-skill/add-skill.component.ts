import { Component, OnInit } from '@angular/core';
import { CustomWeb3Service } from '../custom-web3.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent implements OnInit {
  public data = {
    link: ''
  };
  public accounts = [];
  public selectedAccount;

  constructor(private _csService: CustomWeb3Service, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.accounts = this._csService.accounts;
  }

  public addCompletedWork(link: string) {
    this.snackBar.open('Successfull added ', link, {
      duration: 3000,
    });
    this.data.link = '';
    const skillId = link.includes('git') ? 1 : 2;
    this._csService.addCompletedWork(this.selectedAccount, link, skillId);
  }

}
