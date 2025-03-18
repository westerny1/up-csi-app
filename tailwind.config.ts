import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            inter: ['Inter', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            colors: {
                'csi-blue': '#00C6D7',
                'csi-black': '#212121',
                'csi-yellow': '#F7CF2F',
                'csi-white': '#F9FAFB',
                'csi-neutral': {
                    '50': '#F6F6F6',
                    '100': '#E7E7E7',
                    '200': '#D1D1D1',
                    '300': '#B0B0B0',
                    '400': '#888888',
                    '500': '#6D6D6D',
                    '600': '#5D5D5D',
                    '700': '#4F4F4F',
                    '800': '#454545',
                    '900': '#3D3D3D',
                    '950': '#1D1D1D',
                },
                'innov-orange': '#F9961E',
                'service-yellow': '#F9D51F',
                'exte-blue': '#3F5FAC',
                'mni-pink': '#F26C9F',
                'bnc-green': '#47B749',
                'engg-blue': '#E53333',
            },
        },
    },
} satisfies Config;
