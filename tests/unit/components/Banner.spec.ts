import { shallowMount } from '@vue/test-utils';
import Banner from '@/components/modules/Banner.vue';

describe('Banner.vue', () => {
    it('Renderiza banner desktop', () => {
        const wrapper = shallowMount(Banner, {
            computed: {
                mobileMode() {
                    return false;
                },
            },
        });

        expect(wrapper.html()).toContain('alt="Banner"');
    });

    it('Renderiza banner mobile', () => {
        const wrapper = shallowMount(Banner, {
            computed: {
                mobileMode() {
                    return true;
                },
            },
        });

        expect(wrapper.html()).toContain('alt="Banner Mobile"');
    });
});
