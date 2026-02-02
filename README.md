# @jhwelch/mmm-eslint-config

[![Publish to NPM](https://github.com/JHWelch/mmm-eslint-config/actions/workflows/publish.yml/badge.svg)](https://github.com/JHWelch/mmm-eslint-config/actions/workflows/publish.yml)

This is an ESLint config for [MagicMirror²](https://github.com/MichMich/MagicMirror/) Modules.

## Installation

```bash
npm install --save-dev eslint @jhwelch/mmm-eslint-config
```

## Usage

The simplest usage without any modification 

```mjs
// eslint.config.mjs
import { defineConfig } from 'eslint/config';
import mmm from '@jhwelch/mmm-eslint-config'

export default defineConfig([
  ...mmm,
]);
```

You can override the rules by extending the config. See the [ESLint Documentation](https://eslint.org/docs/latest/extend/shareable-configs#overriding-settings-from-shareable-configs) for more information.

```mjs
// eslint.config.mjs
import { defineConfig } from 'eslint/config';
import mmm from '@jhwelch/mmm-eslint-config'

export default defineConfig([
  ...mmm,
  {
    rules: {
      'no-unused-vars': 'warn',
    },
  },
]);
```
