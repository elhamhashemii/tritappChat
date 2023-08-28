import { App, Plugin } from 'vue';

const deviceDetector: Plugin = {
  install: (app: App) => {
    const isMobile = /mobile/i.test(navigator.userAgent);
    app.config.globalProperties.$isMobile = isMobile
    app.provide('isMobile',isMobile)
  },
};

export default deviceDetector;