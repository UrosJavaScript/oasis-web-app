import { useRef, useState } from "react";

const useVideoPlayer = () => {
  const leftVideoRef = useRef<HTMLVideoElement | null>(null);
  const rightVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (leftVideoRef.current && rightVideoRef.current) {
      if (isPlaying) {
        leftVideoRef.current.pause();
        rightVideoRef.current.pause();
      } else {
        leftVideoRef.current.play();
        rightVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return {
    leftVideoRef,
    rightVideoRef,
    isPlaying,
    handlePlayPause,
  };
};

export default useVideoPlayer;
