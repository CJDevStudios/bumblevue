import { defaultOptions } from '@cjdevstudios/bumblevue-core/config';
import { config } from '@vue/test-utils';

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
});
