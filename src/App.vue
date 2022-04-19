<script lang="ts">
import { defineComponent, h } from 'vue';

import VueApp from '@/modules/vue-app.module/VueApp.vue';
import Text from '@/modules/text.module/Text.vue';

const modules = [
  { key: 'App', module: VueApp },
  { key: 'Text', module: Text },
];

export default defineComponent({
  name: 'App',
  props: ['moduleData'],
  render: function () {
    const module = modules.find((m) => m.key === this.moduleData.module_name);
    return h(module?.module ? module.module : '', {
      moduleData: this.moduleData,
    });
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
