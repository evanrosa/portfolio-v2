'use client'

export default function DataEngineerBarChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 400 400"
      className="w-full h-full object-contain"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="barGradientLight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="barGradientDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="100%" height="100%" fill="white" className="dark:fill-[#0f172a]" />

      {/* Grid lines */}
      <g stroke="currentColor" strokeWidth="0.2" className="opacity-10 dark:opacity-5">
        {[...Array(6)].map((_, i) => (
          <line key={i} x1="40" x2="360" y1={60 + i * 50} y2={60 + i * 50} />
        ))}
      </g>

      {/* Bars */}
      <g>
        <rect x="60" y="180" width="30" height="140" rx="4" fill="url(#barGradientLight)" className="dark:fill-[url(#barGradientDark)]" />
        <rect x="110" y="120" width="30" height="200" rx="4" fill="url(#barGradientLight)" className="dark:fill-[url(#barGradientDark)]" />
        <rect x="160" y="160" width="30" height="160" rx="4" fill="url(#barGradientLight)" className="dark:fill-[url(#barGradientDark)]" />
        <rect x="210" y="90" width="30" height="230" rx="4" fill="url(#barGradientLight)" className="dark:fill-[url(#barGradientDark)]" />
        <rect x="260" y="130" width="30" height="190" rx="4" fill="url(#barGradientLight)" className="dark:fill-[url(#barGradientDark)]" />
      </g>

      {/* Axis lines */}
      <line x1="40" y1="320" x2="360" y2="320" stroke="currentColor" strokeWidth="0.5" className="opacity-30" />
      <line x1="40" y1="60" x2="40" y2="320" stroke="currentColor" strokeWidth="0.5" className="opacity-30" />

      {/* Optional labels */}
      {/* You can add dynamic data labels here if desired */}
    </svg>
  )
}
