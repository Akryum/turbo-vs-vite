```sh
pnpm i
pnpm exec vite
```

---

If you encounter [this issue](https://github.com/vitejs/vite/pull/10671#issuecomment-1298001952):

- `pnpm exec vite` and wait for page load
- Kill process
- `rm -rf ./node_modules/.vite/server-cache`
- `pnpm exec vite` and wait for page load
- Kill process
- `pnpm exec vite` (warm start)
