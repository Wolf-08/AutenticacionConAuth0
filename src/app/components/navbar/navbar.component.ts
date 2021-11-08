import { Component, OnInit,Inject } from '@angular/core';
//import { AuthService } from '../../services/auth.service';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logueado: boolean = false;

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {
    this.auth.isAuthenticated$.subscribe( 
      p => {
        this.logueado = p
        console.log(p)}
        
    )
  }

  ngOnInit(): void {
  }

}
