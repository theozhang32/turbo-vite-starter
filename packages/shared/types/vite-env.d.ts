/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * 构建环境
   */
  readonly VITE_APP_ENV: string
  /**
   * publicPath
   */
  readonly VITE_APP_BASE?: string
  /**
   * 页面标题
   */
  readonly VITE_APP_TITLE:? string
  /**
   * 接口根路径
   */
  readonly VITE_APP_API?: string
  /**
   * 当前应用名
   * @example admin client
   */
  readonly VITE_APP_NAME?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
