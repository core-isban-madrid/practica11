import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../servicios/facturas.service';
import { MensajesService } from '../../servicios/mensajes.service';

@Component({
  selector: 'app-listado-facturas',
  templateUrl: './listado-facturas.component.html',
  styleUrls: ['./listado-facturas.component.css']
})
export class ListadoFacturasComponent implements OnInit {

  facturas: Array<any>;

  constructor(private facturasService: FacturasService,
              private mensajesService: MensajesService) { }

  ngOnInit() {
    this.cargarFacturas();
  }
  
  cargarFacturas() {
    this.facturasService.getFacturas()
            .subscribe((resp: any)=>{
              this.facturas = resp.facturas;
            },(error)=>{
              console.log(error)
            })
  }

  eliminarFra(_id) {
    this.facturasService.deleteFactura(_id)
            .subscribe((resp:any)=>{
              this.cargarFacturas();
              this.mensajesService.setMensaje(resp.mensaje);
            },
            (error)=>{
              console.log(error);
            })
  }

}
