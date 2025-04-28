import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private navCTRL: NavController) { }
 
   ngOnInit() {
   }
 navigateToGroceries() {
     this.navCTRL.navigateForward('/groceries');}
 
 navigateToCollegeFees() {
     this.navCTRL.navigateForward('/college-fees');}
 
 navigateToElectricityBills() {
     this.navCTRL.navigateForward('/electricity-bills');}
 
 navigateToOthers() {
     this.navCTRL.navigateForward('/others');}
 
 }
 