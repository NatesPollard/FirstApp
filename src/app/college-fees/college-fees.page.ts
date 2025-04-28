import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-college-fees',
  templateUrl: './college-fees.page.html',
  styleUrls: ['./college-fees.page.scss'],
  standalone: false,
})
export class CollegeFeesPage implements OnInit {

 constructor(private navCTRL: NavController) { }
 
   ngOnInit() {
   }
 navigateToHome() {
     this.navCTRL.navigateRoot('/home');}
 
 navigateToGroceries() {
     this.navCTRL.navigateForward('/groceries');}
 
 navigateToElectricityBills() {
     this.navCTRL.navigateForward('/electricity-bills');}
 
 navigateToOthers() {
     this.navCTRL.navigateForward('/others');}
 
 }