import { Component } from '@angular/core';
import { celular } from '../../Model/celular'

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent {
  celulares: celular[] = [
    { id: 1 , nome: "Celular XL", descricao:"Grande",esgotado:true},
    { id: 2 , nome: "Celular L", descricao:"Largo",esgotado:false},
    { id: 3 , nome: "Celular P", descricao:"Pequeno",esgotado:false}

  ]
}
