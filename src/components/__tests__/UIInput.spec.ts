import { describe, it, expect, test } from 'vitest'

// import { mount } from '@vue/test-utils'
// import UIInput from '@/components/kit/UIInput.vue'

// test('new test', async () => {

//   page.goTo()

// })

// describe('UIInput', () => {
//   it('renders properly', () => {
//     const wrapper = mount(UIInput, { props: { msg: 'Hello Vitest' } })
//     expect(wrapper.text()).toContain('Hello Vitest')
//   })
// })

test('basic test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/')
  const title = page.locator('.navbar__inner .navbar__title')
  await expect(title).toHaveText('Playwright')
})
