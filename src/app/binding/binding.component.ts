import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  titre :string ="Apprendre le dataBinding dans angular 10 "
  nom :string ="asma raies ";
  status : boolean =true ;
  constructor() { }
 changerTitre(){
  this.titre="mon nouveau titre ";
 }
  ngOnInit(): void {
  }
  

}
