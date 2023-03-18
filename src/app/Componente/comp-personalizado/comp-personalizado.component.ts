import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-personalizado',
  templateUrl: './comp-personalizado.component.html',
  styleUrls: ['./comp-personalizado.component.css']
})
export class CompPersonalizadoComponent {
  @Input() nome = ""
  @Input() sobrenome = ""
}
