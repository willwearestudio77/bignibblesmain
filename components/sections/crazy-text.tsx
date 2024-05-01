import Image from 'next/image';
import drool from 'public/emoji-decoration-1.png';
import water from 'public/emoji-decoration-2.png';
import italian from 'public/emoji-decoration-3.png';

function CrazyText() {
  return (
    <div className="herotext relative z-30 my-auto flex max-w-4xl items-center   leading-8  ">
      <div className="crazy-text relative items-center text-wrap text-center align-middle	 font-sans text-4xl font-bold uppercase	leading-[1.5em] text-accent md:text-5xl	">
        <span className="text-stroke-hero">A </span>
        <span className="text-white">smorgasbord</span>
        <span className="text-stroke-hero"> of</span>
        <span> hilarity</span>
        <span className="text-white">, </span>
        <span>mouthwatering</span>
        <span className="text-white"> dishes </span>
        <div className="relative inline-block px-4   align-middle">
          <Image
            className="relative top-1/2 z-10 "
            height={36}
            width={36}
            alt="drool icon"
            src={drool}
          ></Image>
        </div>
        <span className="text-white">,</span>
        <span className="text-stroke-hero"> and a</span>
        <div className="relative inline-block px-4 		 align-middle ">
          <Image
            className="relative z-10   "
            height={69}
            width={48}
            alt="water icon"
            src={water}
          ></Image>
        </div>
        <span className="text-white"> dash of</span>
        <span> chaos </span>
        <span className="text-white">-</span>
        <span className="text-white"> served </span>
        <span>fresh </span>
        <div className="relative inline-block  px-4	 align-middle  ">
          <Image
            className="relative top-1/2  z-10 "
            height={44}
            width={40}
            alt="hand emoji"
            src={italian}
          ></Image>
        </div>
        <span className="text-stroke-hero">to your screen</span>
        <span className="text-white">.</span>
      </div>
    </div>
  );
}

export default CrazyText;
