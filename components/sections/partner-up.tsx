import Image from 'next/image';
import Link from 'next/link';
import jakeySweetPotatoes from 'public/jake-sweet-potatoes-big-nibbles-partner.png';

function PartnerUp({ data }: any) {
  console.log(data);
  return (
    <div className="partner-up-section relative bg-primary">
      <div className="content-wrapper relative flex w-full flex-col md:flex-row">
        <div className="image-container relative z-0 order-1 w-1/2 pb-40 md:-order-1 md:pb-20 ">
          <Image
            className=" absolute bottom-0 z-10"
            width={400}
            height={400}
            alt="jake with sweet potatoes"
            src={jakeySweetPotatoes}
          />
          <svg
            className="absolute bottom-0 left-0 z-0 blur-2xl md:h-[400px] md:w-[400px] "
            viewBox="0 0 466 503"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="252.146" cy="251.744" r="251.256" fill="#EFAF14" />
          </svg>
        </div>
        <div className="z-10 m-auto w-full  ">
          <div className="text-container m-auto flex	 max-w-[900px] flex-col gap-y-2 p-10 pb-32 pl-10 pt-20 font-sans font-semibold uppercase text-accent md:pb-40 ">
            <h2 className="text-stroke-hero text-3xl text-white md:text-7xl	">the uk&apos;s most</h2>
            <div className="flex flex-row text-4xl md:text-9xl">
              <div>un</div>
              <div>hinged</div>
            </div>
            <h2 className="text-3xl text-white md:text-7xl">food</h2>
            <h2 className="text-3xl text-white md:text-7xl">creator</h2>
            <p className="font-light normal-case text-white	">
              With over 10 years of experience in the video industry, I&apos;ve dedicated myself to
              crafting high-quality, well-produced content that&apos;s as delightful to watch as it
              is delicious to taste.
            </p>
            <button className="mt-4 inline-block w-full rounded-full border-2 border-accent p-4 uppercase hover:bg-accent hover:text-primary md:w-1/5">
              <Link href="/contact">get in touch</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerUp;
