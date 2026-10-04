import "../.astro/types.d.ts";
import "astro/client";

declare global {
  interface ImportMetaEnv {
    readonly PUBLIC_GOOGLE_ANALYTICS_ID?: string;
  }
}
