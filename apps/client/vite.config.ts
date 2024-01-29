import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import Unocss from 'unocss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: env.VITE_APP_BASE,
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      // https://github.com/antfu/unocss
      // see unocss.config.ts for config
      Unocss(),
    ],

    server: {},
  }
})