import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  handleSubmit() {
    console.log(this.form);

    this.http
      .post<any>(
        'http://localhost:3001/users/registration',
        this.signUpForm.value
      )
      .subscribe(
        (result) => {
          console.log(result);
          if (result.message == 'success') {
            localStorage.setItem('token', '62a49e454061797709fbf6f1');
            alert('Registered Successfully');
            this.signUpForm.reset();
            this.router.navigate(['login']);
          } else {
            alert(result.message);
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  public signUpForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
