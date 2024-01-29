/*
 * @Author: 张天昊
 * @Date: 2023-12-06 16:48:32
 * @LastEditTime: 2024-01-29 15:31:39
 * @LastEditors: 张天昊
 * @Description:
 * @FilePath: /turbo-vite-starter/scripts/move-dist.cjs
 */
const fs = require('fs-extra')
const path = require('path')
const { glob } = require('glob')
const chalk = require('chalk')

async function moveDist() {
  try {
    const gb = await glob('apps/*/dist')
    if (gb.length > 0) {
      await Promise.all(
        gb.map((p) => {
          const appName = /^apps\/(.+)\/dist$/.exec(p)?.[1]
          if (appName) {
            return fs.move(
              path.join(process.cwd(), p),
              path.join(process.cwd(), `dist/${appName}`),
              {
                overwrite: true,
              },
            )
          }
          const errMsg = 'apps目录下未找到dist产物'
          console.log(chalk.bgRed(errMsg))
          return Promise.reject(new Error(errMsg))
        }),
      )
      console.log(chalk.bgGreen('dist复制成功'))
    }
  } catch (e) {
    console.log(chalk.bgRed(e))
  }
}

moveDist()
