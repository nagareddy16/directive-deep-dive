import { Permission } from './auth.model';
import { Injectable, signal } from "@angular/core";


@Injectable({
    providedIn : 'root',
})

export class AuthService{
    activePermission = signal<Permission>('guest');

    authenticate(email : string, password :string){
        console.log(email, password);
        if(email === 'admin@example.com' && password ==='admin'){
            this.activePermission.set('admin');
        }else if(email === 'user@example.com' && password === 'user'){
            this.activePermission.set('user');
        }else {
            this.activePermission.set('guest');
        }
    }

    login(){
        console.log('login');
        this.activePermission.set('guest');
    }
}