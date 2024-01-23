// vite-env.d.ts
interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  // more env variables...
}

interface ImportMeta {
  env: ImportMetaEnv;
}
