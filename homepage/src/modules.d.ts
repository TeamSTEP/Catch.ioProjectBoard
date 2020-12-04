import { DefineComponent } from 'vue';

declare module 'vue-scroll-snap' {
    const VueScrollSnap: DefineComponent<{}, {}, any>;

    export default VueScrollSnap;
}
