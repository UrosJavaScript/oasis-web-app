import useVideoPlayer from "../../hooks/useVideoPlayer";
import VideoSource from "../../assets/videos/hero-video.mp4";
import VideoRightSource from "../../assets/videos/hero-right-video.mp4";
import PlayIcon from "../../assets/icons/play-button.svg";
import PauseIcon from "../../assets/icons/pause-button.svg";
import HandArrow from "../../assets/icons/hand-arrow-video.svg";

const RightColumn = () => {
  const { leftVideoRef, rightVideoRef, isPlaying, handlePlayPause } =
    useVideoPlayer();

  return (
    <div className="hero-right-column">
      <video ref={leftVideoRef} src={VideoSource} className="video-left" />
      <img src={HandArrow} alt="hand-arrow" className="hand-arrow" />
      <video
        ref={rightVideoRef}
        src={VideoRightSource}
        className="video-right"
      />

      <button onClick={handlePlayPause}>
        {isPlaying ? (
          <img src={PauseIcon} alt="pause-button" />
        ) : (
          <img src={PlayIcon} alt="play-button" />
        )}
      </button>
    </div>
  );
};

export default RightColumn;
