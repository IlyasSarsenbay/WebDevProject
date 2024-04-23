import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {

  loginObj: any = {
    "username": "",
    "password": ""
  };

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    //debugger;
    this.http.post('http://127.0.0.1:8000/api/login/', this.loginObj).subscribe(
      (res:any)=>{
        if(res.result){
          alert('Successfully loged in!')
          localStorage.setItem('loginToken', res.token);
          this.router.navigateByUrl('');
        }
        else{
          alert(res.error)
        }
      }
    )
  }

}
