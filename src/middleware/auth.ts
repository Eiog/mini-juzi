import type { MiddlewareRuntime } from '../../plugin/vite-plugin-uni-middleware-runtime'

export default ((to, from) => {
  const isLogin = uni.getStorageSync('isLogin')
  if (!isLogin)
    return '/pages/login'
}) as MiddlewareRuntime
