import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import preSetWxapp from 'unocss-preset-wxapp'

export default defineConfig({
  plugins: [
    uni(),
    Unocss({
      presets: [
        preSetWxapp(),
      ],
      shortcuts: [{
        'border-base': 'border border-gray-500_10',
        'center': 'flex justify-center items-center',
      }],
    }),
  ],
})
