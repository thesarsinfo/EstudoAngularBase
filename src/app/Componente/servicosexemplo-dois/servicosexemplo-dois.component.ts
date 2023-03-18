import { Component } from '@angular/core';
import { LoggerService } from '../../Service/Logger/logger.service';


@Component({
  selector: 'app-servicosexemplo-dois',
  templateUrl: './servicosexemplo-dois.component.html',
  styleUrls: ['./servicosexemplo-dois.component.css']
})
export class ServicosexemploDoisComponent {
produto:string = "";
constructor (private logger: LoggerService) {}


  AdicionarProduto() {    
    console.log(`O nome produto ${this.produto}`);
  }

}
