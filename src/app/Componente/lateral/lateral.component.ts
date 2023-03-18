import { Component } from '@angular/core';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent {
  nome:string = "João";
  dataNascimento = "1995/03/03";
  urlImage = "/assets/provalaa.png";

  ShowDataNascimento() {
    alert(`A data de nascimento é  ${this.dataNascimento}`)
  }
}
