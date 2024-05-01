import Image from 'next/image';
import Link from 'next/link';
import jakeWithASpoon from '../../public/jake-horwood-spoon.png';
function AboutSectionTwo(page: any) {
  if (!page) {
    return null;
  }
  return (
    <div className="relative w-full bg-accent40 py-20">
      <div className="content-wrapper relative relative m-auto flex max-w-[1400px] gap-10 ">
        <div className="textsection w-2/3 p-20">
          <h2 className="mb-4 text-4xl font-bold uppercase">{page.aboutHeader.value}</h2>
          <p className="mb-4">{page.aboutText.value}</p>
          <Link href={page.followLink.value}>
            <button className="rounded-full border-2 border-primary p-4 font-bold uppercase">
              follow me
            </button>
          </Link>
        </div>
        <div className="image-section relative block w-1/4">
          <Image
            alt="Jake Horwood with a spoon"
            className="absolute bottom-0 right-0 z-10"
            src={jakeWithASpoon}
            width={500}
            height={500}
          />
          <svg
            className="absolute bottom-0 z-0 blur-3xl"
            viewBox="0 0 549 550"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="274.25" cy="274.956" r="274.25" fill="#EFAF14" />
          </svg>
        </div>
      </div>
      <div className="wave absolute -bottom-1 left-0 z-10 w-full overflow-hidden">
        <svg
          className="relative block h-[50px] w-full md:h-[116px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 80"
          fill="none"
        >
          <path
            d="M1440 55.5842C1214.42 7.42618 983.258 -9.29672 753.093 5.89086L0 55.5842V80H1440V55.5842Z"
            className="fill-primary"
          />
        </svg>
      </div>
    </div>
  );
}

export default AboutSectionTwo;
