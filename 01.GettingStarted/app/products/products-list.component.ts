import {Component, OnInit} from 'angular2/core'

import {IProduct} from './product';
import {ProductFilterPipe} from "./products-filter.pipe";

import {StarComponent} from "../shared/star.component";
import {ProductService} from "./product.service";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    templateUrl: 'app/products/products-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})

export class ProductsListComponent  implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    products: IProduct[] = [];
    errorMessage: string;

    toggleImage (): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error
            );

    }

    onRatingClicked (message: string): void {
        this.pageTitle = `Product List: ${message}`
    }


    constructor (private _productService: ProductService) {

    }
}