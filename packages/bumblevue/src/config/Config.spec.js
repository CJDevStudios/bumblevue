import { clearConfig, defaultOptions, setupConfig } from '@cjdevstudios/bumblevue/core/config';
import { Theme } from '@cjdevstudios/bumblevue/styled';
import Aura from '@cjdevstudios/bumblevue/themes/aura';
import { config } from '@vue/test-utils';
import { reactive } from 'vue';

config.global.mocks['$bumblevue'] = {
    config: defaultOptions
};

// <script setup> components read $bumblevue during setup, before mocks are applied, so mirror the plugin install as well.
config.global.config.globalProperties = {
    ...config.global.config.globalProperties,
    $bumblevue: config.global.mocks['$bumblevue']
};

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn()
    }))
});

describe('BumbleVue.vue', () => {
    it('should exist', async () => {});

    it('should normalize direct theme presets', async () => {
        const app = {
            config: {
                globalProperties: {
                    $bumblevue: {
                        config: {}
                    }
                }
            }
        };
        const BumbleVue = {
            config: reactive({
                ...defaultOptions,
                theme: Aura
            })
        };
        const spy = vi.spyOn(Theme, 'setTheme');

        setupConfig(app, BumbleVue);

        expect(spy).toHaveBeenCalledWith({ preset: Aura });

        spy.mockRestore();
        clearConfig();
    });
});
