import './index.css'
import ReactPlayer from 'react-player/youtube'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url="https://youtu.be/OIWRbw5B09M" />
    </div>
  </div>
)

export default VideoPlayer
