// import { playlists } from "@/lib/data"
import { Pause, Play } from "./Player"
import { usePlayerStore } from "@/store/playerStore" // you can read from Vue Svelte React

export function CardPlayButton({ id }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state)

  const handleClick = () => {
    setCurrentMusic({
      playlist: {
        id
      }
    })
    setIsPlaying(!isPlaying)
  }

  const isPlayingPlayList = isPlaying && currentMusic?.playlist.id === id

  return (
    <button onClick={handleClick} className="card-play-button bg-green-500 p-4 rounded-full">
      {isPlayingPlayList ? <Pause /> : <Play />}
    </button >
  )
}