## 📢注意事项

- 使用pnpm的workspace的时候，需要删掉当前项目下的`['pnpm-lock.yaml', 'package-lock.json', 'yarn.lock', 'bun.lockb']`,否则导致运行时找不到对应的依赖
  [代码地址](https://github.com/vercel/next.js/blob/1ce3913ef13a22c03d795df7cc8eec2cf0a7ee37/packages/next/src/lib/find-root.ts#L6)
