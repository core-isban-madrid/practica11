import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  private mensaje = new Subject<any>();

  constructor() { }

  setMensaje(texto: string){
    this.mensaje.next({mensaje: texto});
  }

  getMensaje(): Observable<any> {
    return this.mensaje.asObservable()
  }


}
