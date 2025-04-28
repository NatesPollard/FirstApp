import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-electricity-bills',
  templateUrl: './electricity-bills.page.html',
  styleUrls: ['./electricity-bills.page.scss'],
  standalone: false,
})
export class ElectricityBillsPage implements OnInit {

 constructor(private navCTRL: NavController) { }
  
    ngOnInit() {
    }
  navigateToHome() {
      this.navCTRL.navigateRoot('/home');}
  
  navigateToGroceries() {
      this.navCTRL.navigateForward('/groceries');}
  
 navigateToCollegeFees() {
      this.navCTRL.navigateForward('/college-fees');}
  
  navigateToOthers() {
      this.navCTRL.navigateForward('/others');}
  
  }