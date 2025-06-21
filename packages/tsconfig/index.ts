/**
 * @file @/tsconfig/index.js
 * DEV MODE ONLY!
 */

const tsconfig = "TSCONFIG DEV";

const base = {
  compilerOptions: {
    target: "ESNext",
    lib: ["ESNext"] as const,
    moduleDetection: "force",
    useDefineForClassFields: "true",
    module: "ESNext",
    moduleResolution: "Bundler",
    strict: true,
    noFallthroughCasesInSwitch: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    isolatedModules: true,
    skipLibCheck: true,
    noUncheckedSideEffectImports: true,
  },
};

export { tsconfig, base };
