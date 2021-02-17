<template>
    <div>
        <div class="Cart__Checkout">
            <label class="Cart__Checkout__Sub">SubTotal</label>
            <label class="Cart__Checkout__Price">
                {{ totalPriceFormated }}
            </label>
        </div>
        <Button text="Finalizar Pedido" size="Large" @click="checkOut" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Base/Button.vue';
import CheckoutUseCase, {
    ICheckOutUseCase,
} from '@/containers/cart/CheckOutUseCase';
import { CartEntity } from '@/entities/Cart';
import ErrorService from '@/services/ErrorService';

export default Vue.extend({
    props: {
        totalPrice: {
            type: Number,
            default: 0,
        },
    },
    components: {
        Button,
    },
    methods: {
        async checkOut() {
            const params: ICheckOutUseCase = {
                cart: new CartEntity(),
                errorService: new ErrorService({
                    context: 'Efetuar CheckOut',
                }),
            };

            await new CheckoutUseCase(params).execute();
        },
    },
    computed: {
        totalPriceFormated(): Number {
            return this.totalPrice.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
            });
        },
    },
});
</script>
