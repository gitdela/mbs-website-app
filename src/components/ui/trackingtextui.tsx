'use client';

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TrackingTextUI = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'trade cryptocurrencies',
        'convert cryptocurrencies',
        'trade with your peers',
      ], // Strings to display

      startDelay: 500,
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 3000,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <h1 className='text-white text-3xl tracking-tight lg:text-left font-medium justify-center text-center md:text-5xl mb-0 grid'>
      A better way to
      <span>
        <span ref={el}></span>
      </span>
    </h1>
  );
};

export default TrackingTextUI;
