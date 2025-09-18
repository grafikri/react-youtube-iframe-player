# YouTube IFrame Player for React

This React hook lets you use the YouTube IFrame Player API easily. It gives you the player, and you can start using [the official YouTube Player API for IFrame reference](https://developers.google.com/youtube/iframe_api_reference) in your project.

> For the Vanilla JS version you can check out [youtube-iframe-api-module](https://github.com/grafikri/youtube-iframe-api-module).

## Installation

```bash
npm install react-youtube-iframe-player
```

## Usage

```jsx
import { useYoutubeIframeApi } from "react-youtube-iframe-player";
import { useMemo } from 'react';

function App() {
  const { player, isPlayerReady } = useYoutubeIframeApi('player', useMemo(() => ({
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      playsinline: 1
    },
    events: {
      onReady: (event) => {
        const player = event.target;
        const videoData = player.getVideoData();
        console.log('title', videoData.title)
      }
    }
  }), []));

  return (
    <div>
      <div id="player"></div>
    </div>
  );
}
```

The `useYoutubeIframeApi()` hook takes two parameters just like the YouTube Player API: `tag id` and `options`.


## Syntax
```js
const { player, isPlayerReady } = useYoutubeIframeApi(tagId, options)
```

## Troubleshooting

* Consider using the `useMemo()` otherwise the hook will not work.
* `player` will be `undefined` in the first place since the YouTube IFrame API is added dynamically and consider not to use during render. Call its methods through event methods like:

  ```js
  const onStopClick = () => {
    player.stopVideo()
  }
  ```

* Since `player` is `undefined` in the first place consider `optional chaining` check before using it. You can apply `isPlayerReady` too. When the `player` instance ready it will be `true`
* You can access the `player` instance with `event.target` in the event definitions.
