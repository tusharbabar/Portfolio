import { useState, useRef } from "react";

function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize coordinates (-0.5 to 0.5 range)
    const normalizedX = (mouseX / width) - 0.5;
    const normalizedY = (mouseY / height) - 0.5;

    // Calculate rotation angles (max tilt is 15 degrees)
    const maxTilt = 15;
    const rotateX = (-normalizedY * maxTilt).toFixed(2);
    const rotateY = (normalizedX * maxTilt).toFixed(2);

    // Glare coordinates
    const glareX = ((mouseX / width) * 100).toFixed(2);
    const glareY = ((mouseY / height) * 100).toFixed(2);

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      "--glare-x": `${glareX}%`,
      "--glare-y": `${glareY}%`,
      transition: "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)"
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      "--glare-x": "50%",
      "--glare-y": "50%",
      transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
    });
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tilt-card-inner" style={tiltStyle}>
        <div className="tilt-glare"></div>
        <div className="tilt-parallax">
          {children}
        </div>
      </div>
    </div>
  );
}

export default TiltCard;
