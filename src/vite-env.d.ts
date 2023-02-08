/// <reference types="vite-plugin-svgr/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly VITE_PRODUCTS_PER_PAGE: string;
  readonly VITE_PURCHASE_PER_PAGE: string;
}

// <reference types="vite/client" />

// declare module '*.svg' {
//   export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
//   const src: string;
//   export default src;
// }
