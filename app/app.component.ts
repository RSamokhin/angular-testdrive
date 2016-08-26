import {Component} from 'angular2/core'
import {ProductsListComponent} from "./products/products-list.component";

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <h1>{{pageTitle}}</h1>
            <pm-products></pm-products>
        </div>
    `,
    directives: [ProductsListComponent ]
})

export class AppComponent {
    pageTitle: string = 'Acme Product Manager'
}