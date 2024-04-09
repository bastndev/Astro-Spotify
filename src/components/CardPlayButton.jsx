// import { playlists } from "@/lib/data"
import { Pause, Play } from "./Player"
import { usePlayerStore } from "@/store/playerStore" // you can read from Vue Svelte React

export function CardPlayButton({ id, sized = 'small' }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state)

  const isPlayingPlayList = isPlaying && currentMusic?.playlist.id === id

  const handleClick = () => {
    if (isPlayingPlayList) {
      setIsPlaying(false)
      return
    }

    // Promises
    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then(res => res.json())
      .then(data => {
        const { songs, playlist } = data

        setIsPlaying(true)
        setCurrentMusic({ songs, playlist, song: songs[0] })

        console.log({ songs, playlist })
      })

    // Promises with async/await
    // const res = await fetch(`/api/get-info-playlist.json?id=${id}`)
    // const data = await res.json()
    // const {songs, playlist} = data

  }

  return (
    <button onClick={handleClick} className="card-play-button bg-green-500 p-4 rounded-full hover:scale-105 transition hover:bg-green-400">
      {isPlayingPlayList ? <Pause /> : <Play />}
    </button >
  )
}