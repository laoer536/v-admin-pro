import { defineComponent } from 'vue'
export default defineComponent({
  name: 'app',
  setup(props, ctx) {
    return () => <div>Hello World</div>
  },
})
