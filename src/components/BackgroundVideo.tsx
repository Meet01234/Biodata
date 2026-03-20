import { useState, useRef, useCallback } from "react";

const videos = ["/videos/background.mp4", "/videos/background2.mp4"];

const BackgroundVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [nextVideo, setNextVideo] = useState<number | null>(null);
  const [fadingOut, setFadingOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = useCallback(() => {
    const next = (currentVideo + 1) % videos.length;
    setNextVideo(next);
    setFadingOut(true);

    // After fade completes, swap
    setTimeout(() => {
      setCurrentVideo(next);
      setNextVideo(null);
      setFadingOut(false);
    }, 1000);
  }, [currentVideo]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Current video */}
      <video
        ref={videoRef}
        key={`current-${currentVideo}`}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: fadingOut ? 0 : 1 }}
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>

      {/* Next video (preloaded, fades in) */}
      {nextVideo !== null && (
        <video
          ref={nextVideoRef}
          key={`next-${nextVideo}`}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: fadingOut ? 1 : 0 }}
        >
          <source src={videos[nextVideo]} type="video/mp4" />
        </video>
      )}

      {/* Light mode overlay: white tint + blur */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      />

      {/* Dark mode overlay: dark tint + blur */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      />
    </div>
  );
};

export default BackgroundVideo;
