import React from 'react';

/**
 * Official Real WhatsApp Logo Vector (Authentic Green Chat Bubble with White Handset)
 */
export function WhatsAppIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Official WhatsApp Green Chat Bubble */}
      <path
        fill="#25D366"
        d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z"
      />
      {/* Official Crisp White Telephone Receiver */}
      <path
        fill="#FFFFFF"
        d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.2.3-.777.978-.952 1.178-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.086-.175-.3-.019-.462.132-.612.136-.135.301-.351.452-.526.15-.175.2-.3.301-.501.101-.2.051-.376-.025-.526-.075-.15-.677-1.63-.927-2.23-.244-.585-.492-.505-.677-.514-.175-.008-.376-.01-.576-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.507 0 1.479 1.078 2.907 1.228 3.108.15.2 2.121 3.238 5.139 4.542.718.31 1.279.495 1.716.634.721.229 1.377.197 1.896.12.578-.086 1.78-.727 2.03-1.429.251-.702.251-1.303.176-1.429-.075-.126-.276-.201-.577-.351z"
      />
    </svg>
  );
}

/**
 * Official Real Instagram Logo Vector (Authentic Gradient Background + White Camera Glyphs)
 */
export function InstagramIcon({ className = "w-5 h-5", ...props }) {
  const id = React.useId ? React.useId().replace(/:/g, '') : 'ig';
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <radialGradient id={`ig-rad-${id}`} cx="20%" cy="110%" r="140%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="10%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      {/* Official Rounded Gradient Tile */}
      <rect width="24" height="24" rx="6.5" fill={`url(#ig-rad-${id})`} />
      {/* White Camera Body Outline */}
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="4.8" fill="none" stroke="#FFFFFF" strokeWidth="1.75" />
      {/* White Center Lens */}
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="#FFFFFF" strokeWidth="1.75" />
      {/* White Flash Dot */}
      <circle cx="17.1" cy="6.9" r="1.15" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * Official Real Facebook Logo Vector (Authentic Royal Blue #1877F2 + White 'f')
 */
export function FacebookIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        d="M13.6 22v-7.75h2.6l.39-3.02h-2.99V9.3c0-.87.24-1.47 1.5-1.47h1.6V5.13c-.28-.04-1.23-.12-2.34-.12-2.31 0-3.9 1.41-3.9 4v2.22H8v3.02h2.46V22c.5.08 1.01.12 1.54.12.53 0 1.05-.04 1.6-.12z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/**
 * Official Real Google Maps Pin Logo Vector
 */
export function GoogleMapsIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      viewBox="0 0 92 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M46 0C20.596 0 0 20.596 0 46c0 10.354 3.42 19.92 9.215 27.608L46 134l36.785-60.392C88.58 65.92 92 56.354 92 46 92 20.596 71.404 0 46 0z"
        fill="#4285F4"
      />
      <path
        d="M46 0C20.596 0 0 20.596 0 46c0 10.354 3.42 19.92 9.215 27.608l17.842-20.916C26.398 50.84 26 48.47 26 46c0-11.046 8.954-20 20-20V0z"
        fill="#34A853"
      />
      <path
        d="M46 0v26c6.234 0 11.83 2.85 15.534 7.324L79.373 12.41C70.627 4.717 58.904 0 46 0z"
        fill="#FBBC04"
      />
      <path
        d="M46 0C32.183 0 19.865 5.568 11.037 14.542l16.02 18.782C29.83 30.85 37.382 26 46 26V0z"
        fill="#EA4335"
      />
      <circle cx="46" cy="46" r="16" fill="#FFFFFF" />
    </svg>
  );
}
