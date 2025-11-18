/*
  Simple pixel-art style SVG sprites rendered with hard edges.
  Usage: <PixelTree size={48} className="..." />
         <PixelSoldier size={48} className="..." />
*/

export function PixelTree({ size = 48, className = '' }) {
  const s = size
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={`[image-rendering:pixelated] drop-shadow-[0_0_6px_rgba(16,185,129,0.25)] ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="leaf" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0f5132" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>
      </defs>
      {/* Canopy */}
      <rect x="4" y="1" width="8" height="2" fill="url(#leaf)" />
      <rect x="3" y="3" width="10" height="2" fill="url(#leaf)" />
      <rect x="2" y="5" width="12" height="2" fill="url(#leaf)" />
      <rect x="3" y="7" width="10" height="2" fill="url(#leaf)" />
      <rect x="5" y="9" width="6" height="2" fill="url(#leaf)" />
      {/* Trunk */}
      <rect x="7" y="11" width="2" height="4" fill="#5b3a1a" />
      {/* Shadow base */}
      <rect x="4" y="15" width="8" height="1" fill="#052e2b" opacity="0.7" />
    </svg>
  )
}

export function PixelSoldier({ size = 48, variant = 'emerald', className = '' }) {
  const s = size
  const armor = variant === 'emerald' ? '#10b981' : variant === 'teal' ? '#0ea5a4' : '#94a3b8'
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={`[image-rendering:pixelated] drop-shadow-[0_0_8px_rgba(16,185,129,0.35)] ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Helmet */}
      <rect x="5" y="1" width="6" height="2" fill={armor} />
      <rect x="4" y="3" width="8" height="2" fill={armor} />
      {/* Visor */}
      <rect x="6" y="3" width="4" height="1" fill="#052e2b" />
      {/* Chest */}
      <rect x="5" y="5" width="6" height="4" fill={armor} />
      {/* Belt */}
      <rect x="5" y="9" width="6" height="1" fill="#052e2b" />
      {/* Arms */}
      <rect x="3" y="6" width="2" height="2" fill={armor} />
      <rect x="11" y="6" width="2" height="2" fill={armor} />
      {/* Sword */}
      <rect x="12" y="4" width="1" height="4" fill="#a3a3a3" />
      <rect x="12" y="3" width="1" height="1" fill="#f0f0f0" />
      {/* Legs */}
      <rect x="6" y="10" width="2" height="4" fill="#065f46" />
      <rect x="8" y="10" width="2" height="4" fill="#065f46" />
      {/* Boots */}
      <rect x="6" y="14" width="2" height="1" fill="#0b2e26" />
      <rect x="8" y="14" width="2" height="1" fill="#0b2e26" />
      {/* Shadow */}
      <rect x="4" y="15" width="8" height="1" fill="#052e2b" opacity="0.7" />
    </svg>
  )
}
