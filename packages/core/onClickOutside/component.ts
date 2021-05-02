import { h, ref, defineComponent } from 'vue-demi'
import { onClickOutside } from '.'

export const OnClickOutside = defineComponent({
  name: 'OnClickOutside',
  setup(props, { slots, emit }) {
    const target = ref()
    onClickOutside(target, (e) => {
      emit('trigger', e)
    })

    return () => {
      if (slots.default)
        return h('div', { ref: target }, slots.default())
    }
  },
})
