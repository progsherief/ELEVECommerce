import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly _HttpClient = inject(HttpClient);

  GetAllProducts(): Observable<any> {
    return this._HttpClient.get(`${environment.baseurl}/products`)
  }

  getSpecificProduct(id: string | null): Observable<any> {
    return this._HttpClient.get(`${environment.baseurl}/products/${id}`);
  }

}
