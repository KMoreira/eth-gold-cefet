import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string;
  description: string;
  route: string;
  icon?: string;
}

@Component({
  selector: 'cft-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  title = 'Gold Coin';

  menu: MenuItem[] = [
    {
      text: 'Transfer',
      description: 'Transfer gold to a address',
      route: '/transfer',
      icon: 'compare_arrows'
    },
    {
      text: 'Deposit',
      description: 'Deposit gold to a address',
      route: '/deposit',
      icon: 'attach_money'
    },
    {
      text: 'Balances',
      description: 'See the accounts balance',
      route: '/balances',
      icon: 'account_balance_wallet'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
