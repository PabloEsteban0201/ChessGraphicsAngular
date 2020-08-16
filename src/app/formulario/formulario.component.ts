import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {}

  changeLabelName(lbl1, lbl2, val1, val2) {
    document.getElementById(lbl1).innerHTML = val1;
    document.getElementById(lbl2).innerHTML = val2;
  }

}
