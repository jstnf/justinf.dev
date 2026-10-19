import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { importX } from "eslint-plugin-import-x";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettierRecommended,
  globalIgnores([".next/**", "out/**", "next-env.d.ts"]),
  {
    // eslint-plugin-import (bundled by eslint-config-next) crashes on ESLint 10,
    // so its rules are swapped for their eslint-plugin-import-x equivalents.
    plugins: { "import-x": importX },
    rules: {
      "import/no-anonymous-default-export": "off",
      "import-x/no-anonymous-default-export": "warn",
      "import-x/order": [
        "error",
        {
          groups: ["builtin", "external", "internal"],
          pathGroups: [
            { pattern: "react", group: "external", position: "before" },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
]);
