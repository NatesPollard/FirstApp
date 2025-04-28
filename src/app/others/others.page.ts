import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-others',
  templateUrl: './others.page.html',
  styleUrls: ['./others.page.scss'],
  standalone: false,
})
export class OthersPage implements OnInit {

  constructor(private navCTRL: NavController) { }
  
    ngOnInit() {
    }
  navigateToHome() {
      this.navCTRL.navigateRoot('/home');}
  
  navigateToCollegeFees() {
      this.navCTRL.navigateForward('/college-fees');}
  
  navigateToElectricityBills() {
      this.navCTRL.navigateForward('/electricity-bills');}
  
  navigateToGroceries() {
      this.navCTRL.navigateForward('/groceries');}
  
  }
  
