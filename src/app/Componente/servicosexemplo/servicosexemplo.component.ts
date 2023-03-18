import { Component } from '@angular/core';
import { LoggerService } from '../../Service/Logger/logger.service';

@Component({
  selector: 'app-servicosexemplo',
  templateUrl: './servicosexemplo.component.html',
  styleUrls: ['./servicosexemplo.component.css']
})
export class ServicosexemploComponent {
  nome:string = "";
  constructor(private logger: LoggerService) {}

  AdicionarNome()
  {
    this.logger.logar(`O nome: ${this.nome}`)
  }
  
}
