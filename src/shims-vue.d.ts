import Vue from 'vue';
import { DollarApollo } from 'vue-apollo/types/vue-apollo';

declare module 'vue/types/vue' {
    interface Vue {
        $apollo: DollarApollo<this>;
    }
}

declare module '*.vue' {
    export default Vue;
}
