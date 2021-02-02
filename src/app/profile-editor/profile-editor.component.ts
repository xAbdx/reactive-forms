import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = new FormGroup({
    // firstName: new FormControl(''),
    // lastName: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    avatar: new FormControl(''),
    mobileNumber: new FormControl('')
  });

  event: any;
  URL: string | ArrayBuffer | null | undefined;
  _changeDetection: any;

  constructor(private fb: FormBuilder) { }

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
    if (!this.profileForm.value) {
      alert("you have to fill all the feilds")
    }
  }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      name: new FormControl(this.profileForm.name, [
        Validators.required,
        Validators.minLength(3),

      ])
    })

  }

  

  useImage(event: { target: { files: Blob[]; }; }) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // Read file as data url
      reader.onloadend = (e) => { // function call once readAsDataUrl is completed
        this.URL = e.target['result']; // Set image in element
        this._changeDetection.markForCheck(); // Is called because ChangeDetection is set to onPush
      };
    }
  }
}