import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: any;
 
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      // Perform form submission logic here
    } else {
      // Handle form validation errors
      console.log('Form is invalid');
    }
  }
}
