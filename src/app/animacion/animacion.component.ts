import { style,state, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.scss'],
  animations: [
    trigger('animacionCuadro',[
      state('estado1',style({
        backgroundColor:'red'
      })),
      state('estado2',style({
        backgroundColor:'blue'
      }))

    ])
    
  ]
})
export class AnimacionComponent  implements OnInit {
  estadoCuadro ='estado1';

  constructor() { }

  ngOnInit() {}

  animar(){
    this.estadoCuadro = this.estadoCuadro === 'estado1' ? 'estado2' : 'estado1';
  }

}
