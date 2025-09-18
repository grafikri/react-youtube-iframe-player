import { useEffect, useState } from "react";
import { loadScript } from "youtube-iframe-api-module";


export const useYoutubeIframeApi = (
  tagId: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: { [key: string]: any }) => {

  const [player, setPlayerReady] = useState()

  useEffect(() => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let mPlayer: any

    loadScript(() => {
      mPlayer = new YT.Player(tagId, options)
      setPlayerReady(mPlayer)
    })

    return () => {
      mPlayer?.destroy()
      setPlayerReady(undefined)
    }

  }, [tagId, options])


  return {
    player,
    isPlayerReady: player === undefined ? false : true
  }
}