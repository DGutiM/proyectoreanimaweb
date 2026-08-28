'use client';

import { useEffect } from 'react';

export default function PwaRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js', { updateViaCache: 'none' }).catch(() => {
        // La web sigue funcionando aunque el navegador no permita el modo offline.
      });
    }
  }, []);

  return null;
}
