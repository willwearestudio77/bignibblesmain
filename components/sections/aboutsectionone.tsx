import PartnerUp from './partner-up';
function AboutSectionOne() {
  return (
    <>
      <div className="relative bg-primary">
        <PartnerUp />
        <div className="wave absolute -bottom-1 left-0 z-10 w-full overflow-hidden ">
          <svg
            className="relative block h-[50px] w-full md:h-[116px]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 128"
            fill="none"
          >
            <path
              d="M0 87.3232L612.669 14.2513C890.532 -18.8888 1172.25 5.99305 1440 87.3232V127.5H0V87.3232Z"
              className="fill-accent40"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default AboutSectionOne;
