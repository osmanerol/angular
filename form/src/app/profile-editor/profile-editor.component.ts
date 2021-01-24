import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  /* 
  profileForm= new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  })
  */
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  formSubmit() {
    console.warn(this.profileForm.value);
    this.profileForm.patchValue({
      firstName: [''],
      lastName: [''],
      address: {
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      },
    })
  }
  /*
  formSubmit() {
    console.warn(this.profileForm.value);
    this.profileForm.patchValue({
      firstName: '',
      lastName: '',
      address:{
        street: '',
        city: '',
        state: '',
        zip: ''
      }
    })
  }
  */

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
