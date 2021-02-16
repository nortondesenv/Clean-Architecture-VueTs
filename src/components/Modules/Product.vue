<template>
    <div class="Card__Product">
        <div class="Card__Product__Container">
            <div class="Card__Product__Container__Image">
                <img :src="product.image" />
            </div>

            <div class="Card__Product__Container__Info">
                <div class="Card__Product__Container__Info__Text">
                    {{ product.name }}
                </div>
                <div
                    v-if="product.available"
                    class="Card__Product__Container__Info__Text--Promotional"
                >
                    {{ pricePromotionalFormated }}
                </div>
                <div
                    v-if="product.available"
                    class="Card__Product__Container__Info__Text--Socio"
                >
                    SOCIO WINE
                </div>
                <div
                    v-if="product.available"
                    class="Card__Product__Container__Info__Text--Member"
                >
                    {{ priceMemberFormated }}
                </div>

                <Button
                    :autoWidth="true"
                    :disabled="!product.available"
                    margin="Margin-Small"
                    type="Secundary"
                    :text="buttonText"
                    @click="addProduct()"
                ></Button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Base/Button.vue';
import AddItemToCartUseCase, {
    IAddItemToCartUseCase,
} from '@/usecases/AddItemToCartUseCase';
import { IProduct } from '@/entities/Product';
import errorService from '@/services/ErrorService';
import { CartEntity } from '@/entities/Cart';

export default Vue.extend({
    props: {
        product: {
            type: Object as () => IProduct,
            required: true,
        },
    },
    methods: {
        addProduct() {
            const params: IAddItemToCartUseCase = {
                cart: new CartEntity(),
                errorService: new errorService({
                    context: 'Adicionar o produto no carrinho.',
                }),
            };
            new AddItemToCartUseCase(params).execute(this.product);
        },
    },
    components: {
        Button,
    },
    computed: {
        buttonText(): String {
            return this.product.available ? 'Adicionar' : 'Esgotado';
        },
        pricePromotionalFormated(): Number {
            return this.product.pricePromotional.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
            });
        },
        priceMemberFormated(): Number {
            return this.product.priceMember.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
            });
        },
    },
});
</script>
