import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
    { path: '', component: BlankLayoutComponent ,children:[
        { path: '', redirectTo:'home' ,pathMatch:"full"},
        { path: 'home', component: HomeComponent },
        { path: 'products', component:ProductsComponent },
        { path: 'product', component:ProductComponent },
        { path: 'brands', component: BrandsComponent },
        { path: 'categories', component: CategoriesComponent }

    ]},
    {
        path: '', component: AuthLayoutComponent
        , children: [
            { path: '', redirectTo:'login' ,pathMatch:"full"},
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    },

    { path: '*', component: NotfoundComponent }
];
