import {ProductApi} from "../api/ProductApi.js";

import {defineStore} from "pinia";

let cart = localStorage.getItem('cart');
if (cart) {
    cart = JSON.parse(cart);
} else {
    cart = [];
}

export const useProductStore = defineStore('ProductStore', {
    state: () => {
        return {
            products: [],
            isProduct: false,
            page: 1,
            totalPage: 1,
            limit: 20,
            search: "",
            categoryId: [],
            variantId: [],
            cart: cart,
            isLoadingProduct: false,
        }
    },
    getters: {
        getCountCart() {
            return this.cart.length;
        },
    },
    actions: {
        async downloadProduct(clean = false) {
            if (!this.isLoadingProduct && (this.products.length === 0 || clean)) {
                this.isLoadingProduct = true;
            }
            const param = {
                page: this.page,
                limit: this.limit,
                search: this.search,
                categoryId: this.categoryId,
                variantId: this.variantId,
            };
            const data = await ProductApi.getProduct(param);
            if (!clean) {
                this.products = [...this.products, ...data.products];
            } else {
                this.products = data.products;
            }
            this.setTotalPage(data.totalPage);
            this.isLoadingProduct = false;
        },
        setTotalPage(totalPage) {
            this.totalPage = totalPage;
        },
        setPage(page) {
            this.page = page;
        },
        setLimit(limit) {
            this.limit = limit;
        },
        setSearch(search) {
            this.search = search;
        },
        clearProduct() {
            this.products = [];
        },
        incrementPage() {
            this.page++;
        },
        addProductToCart(items) {
            const itemCart = this.cart.find((item) => {
                return item.product.id === items.product.id && item.variant.id === items.variant.id;
            });
            if (itemCart) {
                itemCart.count += items.count;
            } else {
                this.cart.push(items);
            }
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        editCountProductToCart(items, count) {
            const itemCart = this.cart.find((item) => {
                return item.product.id === items.product.id && item.variant.id === items.variant.id;
            });
            if (itemCart) {
                itemCart.count = count;
            }
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        removeProductToCart(items) {
            this.cart = this.cart.filter((item) => {
                return item.product.id !== items.product.id && item.variant.id !== items.variant.id;
            });
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        clearCart() {
            this.cart = [];
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        totalCountCart() {
            let total = 0;
            this.cart.forEach((item) => {
                total += item.count;
            });
            return total;
        },
        totalPriceCart() {
            let total = 0;
            this.cart.forEach((item) => {
                total += item.variant.price * item.count;
            });
            return total;
        },
        getIsCart() {
            return this.cart.length > 0;
        },
        getNameCart() {
            return `Підтвердити (${this.cart.length}) на суму ${this.totalPriceCart()} грн.`;
        },
        createOrder(param) {
            const data = {
                cart: this.cart,
                ...param,
            };
            return ProductApi.createOrder(data);
        },
    },

});