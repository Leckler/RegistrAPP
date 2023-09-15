import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:any;
  state:any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router){
    this.activatedRoute.queryParams.subscribe(params => {
      this.state= this.router.getCurrentNavigation()?.extras.state;
      this.user = this.state.user
      console.log(this.user);
    })
  }


  public alertButtons = ['OK'];


  

}
