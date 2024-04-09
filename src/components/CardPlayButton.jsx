import { Pause, Play } from "./Player"

export function CardPlayButton({ id }) {
  return (
    <div className="card-play-button bg-green-500 p-4 rounded-full">
      <Play />
    </div>
  )
}