import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent {
  
  sobrenome = "saraiva";

  mostrarNomeCompleto(nome: string, sobrenome: string) {
    alert(`O nome completo é: ${nome + ' ' + sobrenome}`)
  }
}
