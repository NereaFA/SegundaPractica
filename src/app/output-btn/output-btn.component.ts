import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-btn',
  templateUrl: './output-btn.component.html',
  styleUrls: ['./output-btn.component.scss']
})
export class OutputBtnComponent {

  @Output () pedirEmitter = new EventEmitter();

pedirComida () {
console.log("Pedir comida")
this.pedirEmitter.emit();
}
}
