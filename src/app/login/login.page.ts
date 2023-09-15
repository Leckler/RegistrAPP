import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  constructor(private router:Router,private activatedRouter: ActivatedRoute, private dataService: DataService) { }
  user ={
    usuario:" ",
    pass:" ",

  }
  
  



  ingreso() {
    let navigationExtras: NavigationExtras = {state: {user: this.user}};
    this.router.navigate(['/home'],navigationExtras);

  }

  
  
  ToggleSensor = false; 

  
  Activador(event: Event) {
    this.ToggleSensor = (event.target as HTMLInputElement).checked;
  }


  ngOnInit(): void {}


}
