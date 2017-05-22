/// <reference path="typings/kendo.all.d.ts" />

class Cart extends kendo.data.ObservableObject {
    contents: Array<CartItem> = new Array<CartItem>();
    cleared: boolean = false;

    constructor() {
        super();

        super.init(this);
    }
}