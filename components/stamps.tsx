'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import chilliStamp from 'public/chilli-stamp.png';
gsap.registerPlugin(ScrollTrigger);

import { useEffect, useRef } from 'react';
function Stamps() {
  const rotateRef = useRef(null);
  useEffect(() => {
    gsap.to(rotateRef.current, {
      rotation: 400,
      transformOrigin: '50% 50%',
      scrollTrigger: {
        trigger: rotateRef.current,
        start: 'bottom bottom+=500',
        end: 'top top-=500',
        scrub: 2
      }
    });
  }, []);
  return (
    <Link href={'/contact'} className="stamplink ">
      <Image
        ref={rotateRef}
        className="absolute bottom-24 left-5 w-[80px] md:left-auto md:right-20 md:top-20 md:w-[130px]"
        src={chilliStamp}
        alt="chilli stamp"
        height={130}
        width={130}
      />
    </Link>
  );
}

export default Stamps;
