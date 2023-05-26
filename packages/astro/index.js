import tokens from '@tokencss/postcss';
import preset from 'postcss-preset-env';

export default function tokencss() {
    return {
        name: '@tokencss/vite',
        hooks: {
            'astro:config:setup': async ({ updateConfig, injectScript }) => {
                updateConfig({
                    vite: {
                        css: {
                            postcss: {
                                plugins: [
                                    preset,
                                    tokens()
                                ]
                            }
                        }
                    }
                })

                injectScript('page-ssr', `import '@tokencss/astro/base.css';`);
            },
        }
    }
}
