/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'vue-scroll-snap' {
    import { DefineComponent } from 'vue';
    const VueScrollSnap: DefineComponent<{}, {}, any>;

    export default VueScrollSnap;
}

declare module 'vue-agile' {
    import { DefineComponent } from 'vue';
    export const VueAgile: DefineComponent<{}, {}, any>;
    const Install: {
        install: (Vue: Vue) => void;
    };
    export default Install;
}
