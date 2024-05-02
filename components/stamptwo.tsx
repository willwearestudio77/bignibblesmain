import Image from 'next/image';
import Link from 'next/link';
import potato from 'public/potato.png';
import { useGsapRotate } from './hooks/gsaprotate';
function StampTwo() {
  const rotateRef = useGsapRotate();

  return (
    <Link href={'/contact'} className="stamplink ">
      <Image
        ref={rotateRef}
        className="absolute -right-28 bottom-24 z-20 w-[80px] md:left-auto md:right-20 md:top-20 md:w-[130px]"
        src={potato}
        alt="chilli stamp"
        height={130}
        width={130}
      />
    </Link>
  );
}

export default StampTwo;
