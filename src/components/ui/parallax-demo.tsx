import React from 'react';
import { ParallaxComponent } from './parallax-scrolling';

export default function ParallaxDemo() {
  return (
    <>
      <ParallaxComponent />
      <div className="osmo-credits p-4 text-center text-xs text-slate-400">
        <p className="osmo-credits__p">
          Resource by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.osmo.supply/"
            className="osmo-credits__p-a text-red-600 underline font-semibold"
          >
            Osmo
          </a>
        </p>
      </div>
    </>
  );
}
