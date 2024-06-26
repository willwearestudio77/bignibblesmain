'use client';
import Image from 'next/image';
import Link from 'next/link';
import chilliStamp from 'public/chilli-stamp.png';
import { useGsapRotate } from './hooks/gsaprotate';

function Stamps() {
  const rotateRef = useGsapRotate();

  return (
    <Link href={'/contact'} className="stamplink ">
      <Image
        ref={rotateRef}
        className="absolute bottom-24 left-5 z-20 w-[80px] md:left-auto md:right-20 md:top-20 md:w-[130px]"
        src={chilliStamp}
        alt="chilli stamp"
        height={130}
        width={130}
      />
    </Link>
  );
}

export default Stamps;
