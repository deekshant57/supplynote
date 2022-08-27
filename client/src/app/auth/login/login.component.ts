import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  handleSubmit() {
    // e.prevent;

    this.http
      .post<any>('http://localhost:3001/users/login', this.loginForm.value)
      .subscribe(
        (result) => {
          console.log(result);
          if (result.msg == 'success') {
            localStorage.setItem('token', '62a49e454061797709fbf6f1');
            alert('Logged in Successfully');
            this.loginForm.reset();
            this.router.navigate(['private']);
          } else {
            alert('User not found');
          }
        },
        (err) => {
          console.log(err);
          alert('User not found');
        }
      );
  }

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
