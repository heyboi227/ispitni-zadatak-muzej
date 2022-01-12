import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

export interface CheckboxGroup {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // Polja ukazuju na moguće greške prilikom registracije korisnika

  errorExists = false;

  errorText = "";

  checkValues: Array<CheckboxGroup> = [
    {
      name: "Knjige",
      checked: false
    },
    {
      name: "Kulturno nasleđe",
      checked: false
    },
    {
      name: "Novac",
      checked: false
    },
    {
      name: "Dokumenta",
      checked: false
    },
    {
      name: "Slike",
      checked: false
    }
  ];

  constructor(private userService: UserService, private router: Router) { }



  ngOnInit(): void {

  }



  //Registracija korisnika slanjem podataka iz registracione forme (na ruti 'signup')

  onSubmit(form: NgForm): void {

    if (!this.userService.getUser(form.value.email)) {

      let checkedValues: Array<string> = [];
      this.checkValues.filter(el => el.checked).forEach(item => {
        checkedValues.push(item.name);
      });

      this.errorExists = false;

      this.userService.registerUser(form.value.email,
        form.value.password,
        form.value.name,
        form.value.surname,
        form.value.address,
        form.value.phone,
        checkedValues);
      sessionStorage.setItem("currentUser", form.value.email);
      this.router.navigate(['']);
    } else {
      this.errorExists = true;
      this.errorText = "Korisnik sa zadatim mejlom već postoji."
    }
  }



}
