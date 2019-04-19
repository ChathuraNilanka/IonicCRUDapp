import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TestPage} from '../test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  

  }

  login(){
    this.navCtrl.push('LoginPage');
  }

  register(){
    this.navCtrl.push('RegisterPage');
    //this.navCtrl.push(TestPage);
  }

}
