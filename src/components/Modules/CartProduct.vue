<template>
    <div class="Cart__Product">
        <div class="Cart__Product__Content">
            <div style="Cart__Product__Content__Image">
                <img :src="item.image" />
            </div>
            <div class="Cart__Product__Content__Info">
                <div
                    class="Cart__Product__Content__Info__Name Cart__Product__Content__Info__Name--text-dark"
                >
                    {{ item.name }}
                </div>

                <div
                    @click="deleteItem(index)"
                    class="Cart__Product__Content__Info__Close Cart__Product__Content__Info__Close--text-light-dark"
                >
                    X
                </div>

                <div class="Cart__Product__Content__Info__Count">
                    <div class="Cart__Product__Content__Info__Count__Box">
                        <div
                            @click="lessOne()"
                            class="Cart__Product__Content__Info__Count__Box__Item Cart__Product__Content__Info__Count__Box__Item--icon"
                        >
                            -
                        </div>
                        <div
                            class="Cart__Product__Content__Info__Count__Box__Item Cart__Product__Content__Info__Count__Box__Item--text-medium"
                        >
                            {{ item.amount }}
                        </div>
                        <div
                            @click="addItem()"
                            class="Cart__Product__Content__Info__Count__Box__Item Cart__Product__Content__Info__Count__Box__Item--icon"
                        >
                            +
                        </div>
                    </div>
                </div>

                <div
                    class="Cart__Product__Content__Info__Price Cart__Product__Content__Info__Price--text-medium"
                >
                    {{ priceItem }}
                </div>
            </div>
        </div>
        <hr class="Cart__Product__Separator" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import RemoveItemUseCase, {
    IRemoveItemUseCase,
} from '@/containers/cart/RemoveItemUseCase';
import { IProduct } from '@/entities/Product';
import { CartEntity } from '@/entities/Cart';
import ErrorService from '@/services/ErrorService';

export default Vue.extend({
    props: {
        item: {
            type: Object as () => IProduct,
        },
        index: {
            type: Number,
        },
    },
    methods: {
        addItem(): void {
            this.item.amount = this.item.amount + 1;
        },
        lessOne(): void {
            if (this.item.amount == 1) return;
            this.item.amount = this.item.amount - 1;
        },
        async deleteItem(index) {
            const params: IRemoveItemUseCase = {
                cart: new CartEntity(),
                errorService: new ErrorService({
                    context: 'Remove produto do carrinho',
                }),
            };

            await new RemoveItemUseCase(params).execute(index);
        },
    },
    computed: {
        priceItem(): String {
            const priceItem = this.item.checkoutPrice * this.item.amount;

            return priceItem.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
            });
        },
    },
});
</script>
