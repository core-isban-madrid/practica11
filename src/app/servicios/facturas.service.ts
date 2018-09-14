import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  url = environment.urlFra;

  constructor(private http: HttpClient) { }

  postFactura(factura) {
    return this.http.post(this.url, factura)
                  .pipe(
                    map((resp: any)=>{
                      return resp.ok;
                    })
                  )
  }

}
