import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../servicios/mensajes.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  mensaje: string;
  mostrado = false;

  constructor(private mensajesService: MensajesService) { }

  ngOnInit() {
    this.mensajesService.getMensaje()
            .subscribe((mensaje: any)=>{
              this.mostrado = true;
              this.mensaje = mensaje.mensaje;
              setTimeout(()=>{
                this.mostrado = false;
              }, 4000)
            },
            (error)=>{
              this.mensaje = 'Error';
            })
  }

}
