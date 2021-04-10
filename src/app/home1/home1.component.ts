import { Component, OnInit } from '@angular/core';
import { PersonService } from '../service/person.service'

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit {

  person :any = [];

  constructor( private personservice : PersonService ) { 
    this.personservice.getPersons().subscribe((res : any) => {
      console.log(res);
      this.person = res;      
    })
  }

  ngOnInit(): void {
  }

}
