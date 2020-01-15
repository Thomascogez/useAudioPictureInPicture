# useaudiopip


> A react component that allow you to enable picture in picture mode on your audio player

[![NPM](https://img.shields.io/npm/v/useaudiopip.svg)](https://www.npmjs.com/package/useaudiopip) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save useaudiopictureinpicture
```

## Usage

```jsx
import React, { Component } from 'react'

import { useAudioPictureInPicture } from 'useaudiopictureinpicture'

const Example = () => {
  //basic setup of the useAudioPictureInPicture hook
  const {isPipToggled, togglePip, updatePip} = useAudioPictureInPicture("image link", play, pause, previous, next)
}
```

## License

MIT © [Thomascogez](https://github.com/Thomascogez)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
