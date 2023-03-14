import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import UIInput from '@/components/kit/UIInput.vue'

describe('UIInput', () => {
  it('renders properly', () => {
    const wrapper = mount(UIInput, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
