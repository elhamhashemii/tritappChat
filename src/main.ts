import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MobileDesktopDetector from './plugins/mobileDesktopDetectors';

const app = createApp(App);
app.use(MobileDesktopDetector);
app.mount('#app');
