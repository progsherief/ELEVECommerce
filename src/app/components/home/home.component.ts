import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Subscription } from 'rxjs';
import { IProduct } from '../../core/interfaces/IProduct';
import { ProductComponent } from "../product/product.component";
import { RouterLink } from '@angular/router';
import { TermtextPipe } from '../../core/pipes/termtext.pipe';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent,RouterLink,TermtextPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly _ProductService = inject(ProductService);
  productsList:IProduct[]=[];

  ngOnInit(): void {
    this._ProductService.GetAllProducts().subscribe({
      next: (res) => { 
        this.productsList=res;
        console.log(res)
       }
      //  ,
      // error: (err) => { console.log(err) }

    });

  }

}
