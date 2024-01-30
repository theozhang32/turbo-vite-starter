/**
 * 定义全局类型
 */
export {}
declare global {
  interface Window {}
  type Dictionary<T = any> = { [key: string]: T }
  interface AsyncFunction<T = any> {
    (...args: any[]): Promise<T>
  }
}
