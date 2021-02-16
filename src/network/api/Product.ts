import { AxiosResponse } from 'axios';
import { APIRequest } from '@/network/APIRequest';
import { HTTPMethod } from '@/network/APIClient';
import { IProduct } from '@/entities/Product';

export namespace ProductAPI {
    // List products
    export class GetProducts implements APIRequest<List<IProduct>> {
        response: List<IProduct>;
        path = '/908ec5b5-1e5a-4602-9008-47719f7c6759';
        method = HTTPMethod.GET;
        parse = (data: AxiosResponse) => data.data;
        constructor(public params: null) {}
    }
}
