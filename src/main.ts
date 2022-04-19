import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { createApp, h } from 'vue';
import App from '@/App.vue';

import './assets/scss/main.scss';

const targetModulesData = document.querySelectorAll<HTMLElement>(
  '.vue-module > script[type="application/json"]',
);

targetModulesData.forEach(({ dataset, textContent }) => {
  createApp({
    render() {
      return h(App, {
        portalId: dataset.portalId,
        moduleData: JSON.parse(textContent ? textContent : ''),
        moduleInstance: dataset.moduleInstance,
      });
    },
    data() {
      return {
        portalId: dataset.portalId,
        moduleData: JSON.parse(textContent ? textContent : ''),
        moduleInstance: dataset.moduleInstance,
      };
    },
  }).mount(`#App--${dataset.moduleInstance}`);
});
