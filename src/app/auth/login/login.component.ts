import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) {}

  onLogin(form: any): void {
    if (form.valid) {
      const loginPayload = {
        email: form.value.email,
        password: form.value.password,
        service: 'advance'
      };

      this.http.post('https://fundoonotes.incubation.bridgelabz.com/api/user/login', loginPayload)
        .subscribe({
          next: (res: any) => {
            console.log('✅ Login success:', res);

            // ✅ Store token securely
            localStorage.setItem('token', `${res.id}`);

            // ✅ Optionally store other user info
            localStorage.setItem('email', loginPayload.email);
            localStorage.setItem('firstName', res.firstName || 'User');

            // ✅ Navigate to dashboard
            this.router.navigate(['/dashboard']);
          },
          error: (err) => {
            console.error('❌ Login failed:', err);
            alert(err.status === 401 ? 'Invalid email or password' : 'Something went wrong');
          }
        });
    } else {
      alert('Form is invalid');
    }
  }
}