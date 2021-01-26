import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    avatar: new FormControl(''),
    mobileNumber: new FormControl('')
  });

  // profileForm = ({
  //   firstName: ['', Validators.required],
  //   lastName: ['', Validators.required],
  //   name: ['', Validators.required],
  //   email: ['', Validators.required],
  //   gender: ['', Validators.required],
  //   avatar: ['', Validators.required],
  //   mobileNumber: ['', Validators.required],
  // });
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
