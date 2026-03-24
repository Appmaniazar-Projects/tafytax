export function FloatingCircles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/15 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-blue/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/8 rounded-full blur-3xl"></div>
    </div>
  )
}

export function GeometricPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 right-20 w-40 h-40 border-4 border-gold/20 rotate-45"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 border-4 border-sky-blue/20 rotate-12"></div>
      <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gold/10 rotate-45"></div>
      <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-sky-blue/10 rounded-full"></div>
      <div className="absolute top-1/4 right-1/3 w-16 h-16 border-2 border-gold/30 rotate-90"></div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-sky-blue/30"></div>
    </div>
  )
}

export function DotsPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 right-10 grid grid-cols-3 gap-3">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-3 h-3 bg-gold/40 rounded-full"></div>
        ))}
      </div>
      <div className="absolute bottom-10 left-10 grid grid-cols-4 gap-4">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-sky-blue/40 rounded-full"></div>
        ))}
      </div>
      <div className="absolute top-1/2 left-20 grid grid-cols-2 gap-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-2.5 h-2.5 bg-gold/30 rounded-full"></div>
        ))}
      </div>
      <div className="absolute bottom-1/2 right-20 grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-sky-blue/30 rounded-full"></div>
        ))}
      </div>
    </div>
  )
}

export function WavePattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute bottom-0 left-0 w-full h-40" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path 
          fill="url(#gradient1)" 
          fillOpacity="0.2" 
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.80 0.16 85)" />
            <stop offset="100%" stopColor="oklch(0.60 0.18 230)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function TrianglePattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 right-32 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-gold/20"></div>
      <div className="absolute bottom-32 left-20 w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[40px] border-t-sky-blue/20"></div>
      <div className="absolute top-1/2 left-1/3 w-0 h-0 border-l-[35px] border-l-transparent border-r-[35px] border-r-transparent border-b-[60px] border-b-gold/15"></div>
      <div className="absolute bottom-1/4 right-1/4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[35px] border-t-sky-blue/15"></div>
      <div className="absolute top-1/3 right-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-gold/10"></div>
    </div>
  )
}
