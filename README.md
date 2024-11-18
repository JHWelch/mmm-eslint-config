# @jhwelch/mmm-eslint-config

This is an ESLint config for [MagicMirror²](https://github.com/MichMich/MagicMirror/) Modules.

## Installation

```bash
npm install --save-dev eslint @jhwelch/mmm-eslint-config
```

## Usage

The simplest usage without any modification 

```mjs
// eslint.config.mjs
import mmm from '@jhwelch/mmm-eslint-config'

export default [
  ...mmm,
]
```

You can override the rules by extending the config. See the [ESLint Documentation](https://eslint.org/docs/latest/extend/shareable-configs#overriding-settings-from-shareable-configs) for more information.

```mjs
// eslint.config.mjs
import mmm from '@jhwelch/mmm-eslint-config'

export default [
  ...mmm,
  {
    rules: {
      'no-unused-vars': 'warn',
    },
  },
]
```
