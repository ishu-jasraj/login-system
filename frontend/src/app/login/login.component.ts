import { Component, ElementRef, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent{
    @ViewChild('f') loginForm:NgForm;
    isValid=true;

    onSubmit(){
        console.log(this.loginForm)
        this.isValid = this.loginForm.valid;
        console.log(this.isValid)
    }
    // onSubmit(f:NgForm) {
    //    console.log(f);
    //   }

    
}