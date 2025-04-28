import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.page.html',
  styleUrls: ['./groceries.page.scss'],
  standalone: false,
})
export class GroceriesPage implements OnInit {

  constructor(private navCTRL: NavController) { }

  ngOnInit() {
  }
navigateToHome() {
    this.navCTRL.navigateRoot('/home');}

navigateToCollegeFees() {
    this.navCTRL.navigateForward('/college-fees');}

navigateToElectricityBills() {
    this.navCTRL.navigateForward('/electricity-bills');}

navigateToOthers() {
    this.navCTRL.navigateForward('/others');}

}
