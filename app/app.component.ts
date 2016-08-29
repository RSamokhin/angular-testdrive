import {Component} from 'angular2/core'

import {ProductsListComponent} from "./products/products-list.component";
import {ProductService} from "./products/product.service";
import 'rxjs/Rx'
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {WelcomeComponent} from "./home/welcome.component";
import {ProductDetailComponent} from "./products/product-detail.component";

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <a class="navbar-brand">{{pageTitle}}</a>
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['Welcome']">Home</a></li>
                        <li><a [routerLink]="['Products']">Product List</a></li>
                    </ul>
                    <div class="container">
                        <router-outlet></router-outlet>
                    </div>
                </div>
            </nav>
        </div>
    `,
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})

@RouteConfig([
    {path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
    {path: '/products', name: 'Products', component: ProductsListComponent},
    {path: '/products/:id', name: 'ProductDetail', component: ProductDetailComponent}
])

export class AppComponent {
    pageTitle: string = 'Acme Product Manager'
}