'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export function PhoneShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || window.innerWidth >= 768) return;

    const center = el.querySelector<HTMLElement>('[data-center]');
    if (!center) return;

    const scrollLeft =
      center.offsetLeft - el.clientWidth / 2 + center.offsetWidth / 2;
    el.scrollLeft = scrollLeft;
  }, []);

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto md:overflow-visible hide-scrollbar snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 -my-20 py-20 md:my-0 md:py-0"
    >
      <div className="flex flex-row gap-5 md:gap-6 md:justify-center items-center animate-fade-up w-max md:w-auto">
        <div
          className="phone-frame w-[200px] shrink-0 snap-center md:w-[230px] md:hover:scale-[1.02] transition-transform duration-500"
          style={{ transform: 'rotate(-6deg)' }}
        >
          <div className="phone-screen relative bg-surface">
            <Image
              src="/app-store-screenshots/04.jpg"
              alt="Track allocation"
              fill
              sizes="(max-width: 768px) 200px, 230px"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div
          data-center
          className="phone-frame-glow w-[220px] shrink-0 snap-center md:w-[260px] z-10 md:-translate-y-8 md:hover:-translate-y-12 transition-transform duration-500"
        >
          <div className="phone-screen relative bg-surface">
            <Image
              src="/app-store-screenshots/05.jpg"
              alt="Visualize your money"
              fill
              sizes="(max-width: 768px) 220px, 260px"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div
          className="phone-frame w-[200px] shrink-0 snap-center md:w-[230px] md:hover:scale-[1.02] transition-transform duration-500"
          style={{ transform: 'rotate(6deg)' }}
        >
          <div className="phone-screen relative bg-surface">
            <Image
              src="/app-store-screenshots/06.jpg"
              alt="Check savings health"
              fill
              sizes="(max-width: 768px) 200px, 230px"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
