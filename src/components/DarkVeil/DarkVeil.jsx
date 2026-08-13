import React, { useEffect, useRef } from 'react';
import './DarkVeil.css';

export default function DarkVeil({
  hueShift = 0,
  noiseIntensity = 0,
  scanlineIntensity = 0,
  speed = 1.0,
  scanlineFrequency = 0,
  warpAmount = 0,
  resolutionScale = 1
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.playbackRate = speed;
      videoRef.current.play().catch((err) => {
        console.log('Video play catch:', err);
      });
    }
  }, [speed]);

  const filterStyle = hueShift !== 0 ? { filter: `hue-rotate(${hueShift}deg)` } : {};

  return (
    <div className="dark-veil-wrapper" style={filterStyle}>
      <video
        ref={videoRef}
        src="/dark-veil-1786216113598.webm"
        poster="/dark-veil-1786216085337.png"
        autoPlay
        muted
        loop
        playsInline
        className="dark-veil-video"
      />

      {noiseIntensity > 0 && (
        <div
          className="dark-veil-noise"
          style={{ opacity: noiseIntensity * 0.05 }}
        />
      )}

      {scanlineIntensity > 0 && (
        <div
          className="dark-veil-scanlines"
          style={{ opacity: scanlineIntensity * 0.1 }}
        />
      )}
    </div>
  );
}
