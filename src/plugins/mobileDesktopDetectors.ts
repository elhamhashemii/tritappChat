import { App, Plugin } from 'vue';

const MobileDesktopDetector: Plugin = {
  install: (app: App) => {
    app.config.globalProperties.$isMobile = /mobile/i.test(navigator.userAgent);
  },
};

export default MobileDesktopDetector;