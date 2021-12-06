import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-client',
  templateUrl: './registration-client.component.html',
  styleUrls: ['./registration-client.component.css']
})
export class RegistrationClientComponent implements OnInit {

  constructor() { }

  formRegistration = new FormGroup({
    Nombre: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    ConfirmPassword: new FormControl('', [Validators.required])
  });

  
  menu(){
    const element = document.getElementById("btnmenu");
    const close = document.getElementById("btn-x");
    const change = document.getElementById("menuOpened")
    
    if(close){
      element!.innerHTML = `
      <svg class="main-menu block h-9 w-9" style="color: #E06D60;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      `;
      change!.classList.add('menu-opened'); 
    }else{
      element!.innerHTML = `
      <svg id="btn-x" class="main-menu block h-9 w-9" style="color: #E06D60;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
      `;
      change!.classList.remove('menu-opened'); 
    };
  };
  
  ngOnInit(): void {
  }
}
