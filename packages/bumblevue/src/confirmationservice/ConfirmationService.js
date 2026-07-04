import ConfirmationEventBus from '@cjdevstudios/bumblevue/confirmationeventbus';
import { BumbleVueConfirmSymbol } from '@cjdevstudios/bumblevue/useconfirm';

export default {
    install: (app) => {
        const ConfirmationService = {
            require: (options) => {
                ConfirmationEventBus.emit('confirm', options);
            },
            close: () => {
                ConfirmationEventBus.emit('close');
            }
        };

        app.config.globalProperties.$confirm = ConfirmationService;
        app.provide(BumbleVueConfirmSymbol, ConfirmationService);
    }
};
