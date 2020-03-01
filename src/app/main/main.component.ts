import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  profileForm=new FormGroup({
    user : new FormControl('',[Validators.required, Validators.minLength(1)])
  });
  
  constructor(private router: Router) {

   }

  ngOnInit() {
  }
  submitUser(){
      let removedWhitesSpacesString=this.profileForm.value.user.split(' ').join('');
      this.router.navigate(['/user/', removedWhitesSpacesString]);
  }
}
