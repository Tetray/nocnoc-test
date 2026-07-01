export default function OrbitGlobe() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-full w-full text-foreground"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="orbit-gradient"
          gradientUnits="userSpaceOnUse"
          x1="20"
          y1="340"
          x2="380"
          y2="60"
          spreadMethod="repeat"
        >
          <stop offset="0%" stopColor="#12c9e0" />
          <stop offset="14.3%" stopColor="#2f8ff2" />
          <stop offset="28.6%" stopColor="#8b5cf6" />
          <stop offset="42.9%" stopColor="#e0399b" />
          <stop offset="57.1%" stopColor="#ff6f5e" />
          <stop offset="71.4%" stopColor="#ff9d2e" />
          <stop offset="85.7%" stopColor="#ffcc33" />
          <stop offset="100%" stopColor="#12c9e0" />
        </linearGradient>

        <mask id="orbit-segment-mask" maskUnits="userSpaceOnUse">
          <g transform="rotate(-18 200 200)">
            <path
              d="M 10 200 A 190 95 0 1 0 390 200 A 190 95 0 1 0 10 200 Z"
              fill="none"
              stroke="#fff"
              strokeWidth="4"
              strokeLinecap="round"
              pathLength={100}
              strokeDasharray="32 68"
              className="orbit-path"
            />
          </g>
        </mask>
      </defs>

      <circle
        cx="200"
        cy="200"
        r="150"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-[0.16]"
      />

      <ellipse
        cx="200"
        cy="200"
        rx="190"
        ry="95"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-[0.2]"
        transform="rotate(-18 200 200)"
      />

      <g mask="url(#orbit-segment-mask)">
        <rect
          x="-500"
          y="-500"
          width="1400"
          height="1400"
          fill="url(#orbit-gradient)"
          className="orbit-flow-rect"
        />
      </g>

      <circle cx="360" cy="114" r="3.5" fill="currentColor" className="opacity-80" />
      <text
        x="383"
        y="102"
        textAnchor="end"
        className="fill-current text-[9px] font-medium tracking-[0.18em] opacity-60"
      >
        SEOUL
      </text>

      <circle cx="34" cy="280" r="3.5" fill="currentColor" className="opacity-80" />
      <text
        x="11"
        y="291"
        textAnchor="start"
        className="fill-current text-[9px] font-medium tracking-[0.18em] opacity-60"
      >
        LONDON
      </text>
    </svg>
  );
}
