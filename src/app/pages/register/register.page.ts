import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class RegisterPage {
  username: string = '';
  email: string = '';
  password: string = '';
  password2: string = '';
  submitted = false;
  registerError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.submitted = true;
    this.registerError = '';

    if (!this.username || !this.email || !this.password || !this.password2) {
      this.registerError = 'Vui lòng điền đầy đủ thông tin.';
      alert(this.registerError);
      return;
    }

    if (!this.isValidEmail(this.email)) {
      this.registerError = 'Email không hợp lệ.';
      alert(this.registerError);
      return;
    }

    if (this.password.length < 8) {
      this.registerError = 'Mật khẩu phải từ 8 ký tự trở lên.';
      alert(this.registerError);
      return;
    }

    if (this.password !== this.password2) {
      this.registerError = 'Mật khẩu nhập lại không khớp.';
      alert(this.registerError);
      return;
    }

    const payload = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.authService.register(payload).subscribe({
      next: (res) => {
        alert('Đăng ký tài khoản thành công!');
        this.router.navigate(['/login']);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 400) {
          this.registerError = err.error?.message || 'Tài khoản đã tồn tại hoặc dữ liệu không hợp lệ.';
        } else {
          this.registerError = 'Lỗi máy chủ hoặc kết nối. Vui lòng thử lại.';
        }
        alert(this.registerError);
      }
    });
  }

  isValidEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
}
