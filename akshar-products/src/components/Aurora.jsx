import "./Aurora.css";

/**
 * Aurora — animated soft-gradient background
 * Inspired by the ReactBits Aurora background component.
 * Colours are tuned to the Akshar Excellence blue / cyan palette.
 *
 * Props:
 *  className  – extra class for the wrapper (optional)
 *  opacity    – master opacity override (default 1)
 */
const Aurora = ({ className = "", opacity = 1 }) => {
  return (
    <div
      className={`aurora-wrapper ${className}`.trim()}
      style={{ opacity }}
      aria-hidden="true"
    >
      <div className="aurora-canvas">
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />
        <div className="aurora-orb aurora-orb-4" />
        <div className="aurora-orb aurora-orb-5" />
      </div>
      {/* Fine grain gives the aurora a film-like premium texture */}
      <div className="aurora-grain" />
    </div>
  );
};

export default Aurora;
