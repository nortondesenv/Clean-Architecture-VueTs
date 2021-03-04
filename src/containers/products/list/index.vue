<template>
    <div class="Container-Product">
        <Product
            v-for="item in products.product"
            :key="item.id"
            :product="item"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

// Interface Adapter
import LoadContainerUseCase, {
    ILoadContainerUseCase,
} from './LoadContainerUseCase';
import DestroyContainerUseCase, {
    IDestroyContainerUseCase,
} from './DestroyContainerUseCase';

import errorService from '@/services/ErrorService';
import ProductRepository from '@/repositories/ProductRepository';
import { ALL_PRODUCTS } from '@/network/graphql/graphql';
// Components
import Product from '@/components/Modules/Product.vue';

export default Vue.extend({
    data() {
        return {
            products: [],
        };
    },
    components: {
        Product,
    },
    computed: {
        // presenter(): IPresenterState {
        //     const params: IPresenter = {
        //         productRepository: new ProductRepository(),
        //     };
        //     return Presenter(params);
        // },
    },
    async mounted() {
        /* Graphql alternative */
        this.$apollo.query({ query: ALL_PRODUCTS }).then((response: any) => {
            this.products = response.data;
        });

        const params: ILoadContainerUseCase = {
            productRepository: new ProductRepository(),
            errorService: new errorService({
                context: 'Erro ao montar listagem de Produtos',
            }),
        };
        await new LoadContainerUseCase(params).execute();
    },
    async destroyed() {
        const params: IDestroyContainerUseCase = {
            productRepository: new ProductRepository(),
        };

        await new DestroyContainerUseCase(params).execute();
    },
});
</script>
