/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly REF_EMAIL: string;
  readonly REF_GITHUB: string;
  readonly REF_LINKEDIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}