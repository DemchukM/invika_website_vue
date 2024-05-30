
import fakeProduct from "@/api/fakeProduct.js";

const host = 'http://localhost:16005';
// const host = 'https://invika.shop'
// const host = baseUrl;
const url = '/webapp/api/';
const method = {
    product: 'get_products',
    category: 'get_category',
    createOrder: 'create_order',
    attribute: 'get_attribute',
    city: 'get_city',
    area: 'get_area',
    address: 'get_address',
}

export const ProductApi = {
    async sendGET(methodParam, param = "") {
        const response = await fetch(`${host}${url}${methodParam}${param}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },


        });
        if (!response.ok) {
            return {};
        }
        return await response.json();
    },
    async sendPOST(methodParam, data) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(`${host}${url}${methodParam}`, options);
        if (!response.ok) {
            return {};
        }
        return await response.json();
    },
    async getProduct(param) {
        // const data = await this.sendGET(method.product, this.getParamOfGetProduct(param));
        const data = fakeProduct;
        if (!!data && !!data.products) {
            return {
                products: data.products,
                totalPage: data.totalPage,
            };
        } else {
            return {
                products: [],
                totalPage: 1,
            };
        }
    },
    getParamOfGetProduct(param) {
        return `?page=${param.page}&limit=${param.limit}&search=${param.search}&categoryId=${param.categoryId}&variantId=${param.variantId}`;
    },
    async getCategory() {
        const data = await this.sendGET(method.category);
        if (!!data) {
            return data.category;
        } else {
            return [];
        }
    },
    async createOrder(param) {
        const data = await this.sendPOST(method.createOrder, param);
        if (!!data) {
            return data;
        } else {
            return false;
        }
    },
    async getAttribute(name) {
        const data = await this.sendGET(method.attribute, `?attribute=${name}`);
        if (!!data && data.status === 'ok') {
            return data.attribute;
        } else {
            return [];
        }
    },
    async getArea() {
        const data = await this.sendGET(method.area);
        if (!!data) {
            return data;
        } else {
            return [];
        }
    },
    async getCity(area) {
        const data = await this.sendGET(method.city, `?area_id=${area}`);
        if (!!data) {
            return data;
        } else {
            return [];
        }
    },
    async getAddress(city) {
        const data = await this.sendGET(method.address, `?city_id=${city}`);
        if (!!data) {
            return data;
        } else {
            return [];
        }

    },
};