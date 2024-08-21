// import { AddToCart } from 'components/cart/add-to-cart';
import { PhotoCarousel } from 'components/photo-carousel';
import AboutSectionOne from 'components/sections/aboutsectionone';
import CrazyText from 'components/sections/crazy-text';
import { getPage } from 'lib/shopify';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import jakeBabyBigNibbles from 'public/jake-baby-big-nibbles.png';
import jakeChilli from 'public/jake-chilli-big-nibbles.png';
import jakeWithASpoon from 'public/jake-horwood-spoon.png';
import tongueEmoji from 'public/tounge-emoji.png';
import backImage from '/public/hardcover-back.jpg';
import frontImage from '/public/hardcover-front.jpg';
import hardcover from '/public/hardcover-png.png';
import nerd from '/public/nerd.png';
export const runtime = 'edge';

export const revalidate = 43200; // 12 hours in seconds

export async function generateMetadata({
  params
}: {
  params: { page: string };
}): Promise<Metadata> {
  const page = await getPage(params.page);

  if (!page) return notFound();

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.bodySummary,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: 'article'
    }
  };
}

export default async function Page({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);

  if (!page) return notFound();
  return (
    <>
      {page.title === 'About' ? <AboutSectionOne /> : null}
      {page.aboutHeader && (
        <div className="relative w-full bg-accent40 ">
          <div className="content-wrapper relative m-auto  flex min-h-[66vh] max-w-[1400px] flex-col gap-10 md:flex-row ">
            <div className="textsection p-8 pb-72 md:w-2/3 md:p-20">
              <h2 className="mb-4 text-4xl font-bold uppercase text-primary">
                {page.aboutHeader.value}
              </h2>
              <p className="mb-4 text-primary">{page.aboutText.value}</p>
              <Link href={page.followLink.value}>
                <button className="rounded-full border-2 border-primary p-4 font-bold uppercase text-primary">
                  follow me
                </button>
              </Link>
            </div>
            <div className="image-section relative bottom-0 left-1/2 block w-1/2 md:left-0 md:w-1/4">
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
      )}
      {page.title === 'About' ? (
        <>
          <div className="section-container relative flex flex-col items-center bg-primary px-8 pb-40 pt-20">
            <CrazyText />
            <div className="button-container mt-4 flex justify-center">
              <Link href="/contact">
                <button className="rounded-full border-2 border-accent p-4 font-bold uppercase text-white">
                  work with me
                </button>
              </Link>
            </div>
            <div className="wave absolute -bottom-1 left-0 z-10 w-full overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative block h-[50px] w-full md:h-[116px]"
                preserveAspectRatio="none"
                viewBox="0 0 1440 102"
              >
                <path
                  d="M1440 72.3994L725.948 8.28947C524.482 -9.79885 321.437 2.78048 123.744 45.5981L0 72.3994V101.5H1440V72.3994Z"
                  className="fill-accent80"
                />
              </svg>
            </div>
          </div>
          <div className="section-container relative bg-accent80 p-10 pb-40 pt-20">
            <div className="narrow-content-wrapper m-auto max-w-[600px] ">
              <h2 className="mb-4 text-2xl font-bold text-primary">
                {page.fourthSectionTitle.value}
              </h2>
              <p className="mb-4 text-primary">{page.fourthSectionBody.value}</p>
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
                  className="fill-accent40"
                />
              </svg>
            </div>
          </div>
        </>
      ) : null}
      {page.title === 'About' ? (
        <div className="relative bg-accent40 pb-40">
          <h3 className="mb-6 text-center text-4xl font-bold uppercase text-primary">content</h3>
          <PhotoCarousel />

          <div className="wave absolute -bottom-1 left-0 w-full  overflow-hidden">
            <svg
              className="relative block h-[50px] w-full md:h-[116px]"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1440 121"
              fill="none"
            >
              <path
                d="M0 103.632C144.463 22.5296 310.458 -11.9485 475.269 4.91572L1440 103.632V121H0V103.632Z"
                className="fill-primary"
              />
            </svg>
          </div>
        </div>
      ) : null}
      {page.title === 'The Book' ? (
        <div className="relative bg-primary md:py-20">
          <div className="content-wrapper relative m-auto flex max-w-[1400px] flex-col justify-between gap-10 px-8 py-20 md:flex-row md:p-20 ">
            <div className="image-section relative w-3/4 md:w-1/4">
              <Image
                alt="product image"
                src={hardcover}
                className=" rounded-lg object-contain"
                width={1000}
                height={1000}
              />
            </div>
            <div className="textsection flex max-w-2xl flex-col gap-4 md:w-2/3  ">
              <h5 className="font-sans uppercase text-white">shop</h5>
              <h1 className="font-sans text-4xl font-semibold uppercase text-white">
                {page.cookbookTitleOne.value}{' '}
                <span className="text-accent">{page.cookbookTitleTwo.value} </span>
                {page.cookbookTitleThree.value}
              </h1>
              <p className="text-white">{page.heroText.value}</p>
              {/* <AddToCart
                backgroundColor="primary"
                variants={variants ?? []}
                availableForSale={productAvailability}
              /> */}
              <Link href={'https://found.us/products/66630eb456b19853735012a7?code=bignibblesfood'}>
                <button className="inline-block rounded-full	border-2 border-accent p-4 font-bold uppercase text-accent transition-colors hover:bg-primary hover:text-white">
                  get your copy today
                </button>
              </Link>
            </div>
          </div>
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
      ) : null}
      {page.title === 'The Book' ? (
        <div className="relative bg-accent40 pb-20 pt-20">
          <div className="content-wrapper relative m-auto flex max-w-[1400px] flex-col gap-20 px-8 md:flex-row md:p-20 ">
            <div className="textsection md:w-1/2">
              <h5 className="mb-2 font-sans text-xl font-semibold uppercase text-primary">
                {/* {page.secondSectionSubtileOne.value} */}
              </h5>
              <h3 className="mb-2 font-sans text-4xl font-semibold uppercase text-primary">
                {page.secondSectionTitleOne.value}{' '}
                <Image
                  alt="emoji of a wise face"
                  className="inline-block w-12"
                  src={tongueEmoji}
                  width={800}
                  height={800}
                />
              </h3>
              <p className="text-primary">
                {/* {page.secondSectionBodyOne.value} */}
                In this outrageously delicious tome, Big Nibbles has taken it upon himself to assign
                an “official” sandwich to every UK town and city. From the{' '}
                <strong>Haggis Hero of Glasgow</strong> to the <strong>Wigan Kebab</strong>, these
                creations are as much a feast for your sense of humor as they are for your stomach.
              </p>
            </div>
            <div className="imagesection md:w-1/2">
              <div className="image-container mb-10 w-1/2 md:w-1/2">
                <Image
                  alt="product image"
                  src={frontImage}
                  className="-rotate-12 rounded-lg object-contain"
                  width={800}
                  height={800}
                />
              </div>
              <div className="textblock">
                <h5 className="mb-2 font-sans text-xl font-semibold uppercase text-primary">
                  {page.secondSectionSubtileTwo.value}
                </h5>
                <h3 className="mb-2 font-sans text-4xl font-semibold uppercase text-primary">
                  {/* {page.secondSectionTitleTwo.value} */}
                  IT&apos;S HILARIOUS TOO{' '}
                  <Image
                    alt="emoji of a wise face"
                    className="inline-block w-8 -translate-y-1"
                    src={nerd}
                    width={800}
                    height={800}
                  />
                </h3>
                <p className="text-primary">
                  But there&apos;s a twist - each sandwich comes with its own tongue-in-cheek roast
                  of its town. Discover how the{' '}
                  <strong>Aberdeen Deep Fried Mars Bar Sandwich</strong> encapsulates the
                  city&apos;s knack for deep-frying anything that stands still long enough, or why
                  the <strong>Liverpool Salt and Chilli Chip Sarnie</strong> adds a spicy kick to
                  the classic chip butty, much like the city&apos;s own spirited and rowdy
                  personality. Each sandwich story is a playful poke at its hometown, as rich and
                  diverse as the sandwiches themselves!
                  {/* {page.secondSectionBodyTwo.value} */}
                </p>
              </div>
            </div>
          </div>
          <div className="wave absolute -bottom-1 left-0 z-10 w-full overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="relative block h-[50px] w-full md:h-[116px]"
              preserveAspectRatio="none"
              viewBox="0 0 1440 102"
            >
              <path
                d="M1440 72.3994L725.948 8.28947C524.482 -9.79885 321.437 2.78048 123.744 45.5981L0 72.3994V101.5H1440V72.3994Z"
                className="fill-accent80"
              />
            </svg>
          </div>
        </div>
      ) : null}
      {page.title === 'The Book' ? (
        <div className="relative  bg-accent80 pb-40">
          <div className="content-wrapper m-auto flex max-w-[1000px] flex-col justify-center p-10">
            <h1 className="mb-10 text-center text-xl font-semibold text-primary">
              List of featured cities
            </h1>
            <p className="text-center">Coming soon</p>
            {/* <ul className=" grid grid-cols-2 gap-x-4 text-lg font-semibold text-primary md:grid-cols-4">
              {(() => {
                try {
                  const cities = JSON.parse(page.listOfCities.value);
                  return (
                    Array.isArray(cities) &&
                    cities.map((city, index) => (
                      <li
                        className="border-t py-4 text-center text-sm text-primary md:text-xl"
                        key={index}
                      >
                        {city}
                      </li>
                    ))
                  );
                } catch (error) {
                  console.error('Error parsing cities:', error);
                  return null;
                }
              })()}
            </ul> */}
            <Link
              className="mt-4 flex justify-center"
              href={'https://found.us/products/66630eb456b19853735012a7?code=bignibblesfood'}
            >
              <button className="rounded-full 	border-2 border-primary p-4 font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white">
                Get Your Book Now
              </button>
            </Link>
          </div>
          <div className="wave absolute -bottom-1 left-0 w-full  overflow-hidden">
            <svg
              className="relative block h-[50px] w-full md:h-[116px]"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1440 121"
              fill="none"
            >
              <path
                d="M0 103.632C144.463 22.5296 310.458 -11.9485 475.269 4.91572L1440 103.632V121H0V103.632Z"
                className="fill-primary"
              />
            </svg>
          </div>
        </div>
      ) : null}
      {page.title === 'The Book' ? (
        <div className="relative bg-primary">
          <div className="content-wrapper relative m-auto flex max-w-[1400px] flex-col gap-10 py-10 md:flex-row md:p-20 ">
            <div className="image-section relative flex w-1/2 px-8 md:w-1/4">
              <Image
                alt="product image"
                src={backImage}
                className="-rotate-12 rounded-lg object-contain"
                width={800}
                height={800}
              />
            </div>
            <div className="textsection flex flex-col gap-4 px-8 md:w-2/3 md:p-20">
              <h5 className="font-sans uppercase text-white">shop</h5>
              <h1 className="font-sans text-3xl font-semibold uppercase text-white md:text-4xl">
                {page.cookbookTitleOne.value}{' '}
                <span className="text-accent">{page.cookbookTitleTwo.value} </span>
                {page.cookbookTitleThree.value}
              </h1>
              <p className="text-white">{page.heroText.value}</p>
              <Link href={'https://found.us/products/66630eb456b19853735012a7?code=bignibblesfood'}>
                <button className="inline-block rounded-full	border-2 border-accent p-4 font-bold uppercase text-accent transition-colors hover:bg-primary hover:text-white">
                  get your copy today
                </button>
              </Link>
              {/* <AddToCart
                backgroundColor="primary"
                variants={variants ?? []}
                availableForSale={productAvailability}
              /> */}
            </div>
          </div>
        </div>
      ) : null}
      {page.title === 'Contact' ? (
        <div className="relative bg-primary ">
          <div className="content-wrapper relative  m-auto flex flex-col pt-10  md:flex-row  ">
            <div className="image-container relative bottom-0 z-0 order-1 w-1/2 md:-order-1 ">
              <Image
                className=" absolute bottom-0 z-10"
                width={400}
                height={400}
                alt="jake with sweet potatoes"
                src={jakeChilli}
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
            <div className="textsection left-0 flex items-center gap-4 px-8 pb-72 pt-20 md:w-2/3  md:max-w-xl md:pb-60 md:pl-0 md:pr-8 ">
              <div className="textwrapper">
                <h1 className="mb-4 font-sans text-4xl font-semibold uppercase text-white md:text-6xl ">
                  <span className="text-stroke-hero">let’s cook up</span> <span>something</span>{' '}
                  <span className="text-accent">extraordinary</span>
                  <span> together</span>
                </h1>

                <p className="text-white">{page.heroText.value}</p>
                <button className="mt-4 inline-block rounded-full border-2 border-accent p-4 uppercase text-white hover:bg-accent hover:text-primary md:w-1/3">
                  <Link href={page.contactLink.value}>get in touch</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="wave absolute -bottom-1 left-0 w-full  overflow-hidden">
            <svg
              className="relative block h-[50px] w-full md:h-[116px]"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1440 121"
              fill="none"
            >
              <path
                d="M0 103.632C144.463 22.5296 310.458 -11.9485 475.269 4.91572L1440 103.632V121H0V103.632Z"
                className="fill-accent40"
              />
            </svg>
          </div>
        </div>
      ) : null}
      {page.title === 'Contact' ? (
        <div className="relative bg-accent40 ">
          <div className="content-wrapper relative m-auto flex flex-col gap-10 px-8 pb-40 pt-20 md:px-20  md:pb-60  ">
            <h2 className="font-sans text-4xl font-semibold uppercase text-primary">
              {page.contactSectionTwoTitle.value}
            </h2>
            <div className="flex flex-col gap-10 lg:flex-row">
              <div className="textwrapper">
                <h3 className="mb-4 font-semibold text-primary">
                  {page.contactSectionTwoB1Title.value}
                </h3>
                <p className="text-primary">{page.contactSectionTwoB1Body.value}</p>
              </div>
              <div className="textwrapper">
                <h3 className="mb-4 font-semibold text-primary">
                  {page.contactSectionTwoB2Title.value}
                </h3>
                <p className="text-primary">{page.contactSectionTwoB2Body.value}</p>
              </div>
              <div className="textwrapper">
                <h3 className="mb-4 font-semibold text-primary">
                  {page.contactSectionTwoB3Title.value}
                </h3>
                <p className="text-primary">{page.contactSectionTwoB3Body.value}</p>
              </div>
            </div>
          </div>
          <div className="wave absolute -bottom-1 left-0 w-full  overflow-hidden">
            <svg
              className="relative block h-[50px] w-full md:h-[116px]"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1440 121"
              fill="none"
            >
              <path
                d="M0 103.632C144.463 22.5296 310.458 -11.9485 475.269 4.91572L1440 103.632V121H0V103.632Z"
                className="fill-accent80"
              />
            </svg>
          </div>
        </div>
      ) : null}
      {page.title === 'Contact' ? (
        <div className="relative bg-accent80 ">
          <div className="content-wrapper relative m-auto flex min-h-[66vh] flex-col gap-10 pt-10  md:flex-row  ">
            <div className="image-container relative bottom-0 z-0 order-1 w-1/2 pb-20 md:-order-1 ">
              <Image
                className=" absolute bottom-0 left-20 z-10"
                width={400}
                height={400}
                alt="jake with sweet potatoes"
                src={jakeBabyBigNibbles}
              />
            </div>
            <div className="textsection flex max-w-2xl flex-col  justify-center gap-4 px-8 pb-40 md:w-2/3 ">
              <h1 className="font-sans text-4xl font-semibold uppercase text-primary md:text-5xl ">
                {page.contactSectionThreeTitle.value}
              </h1>
              <p className="text-primary">{page.contactSectionThreeBody.value}</p>
            </div>
          </div>
          <div className="wave absolute -bottom-1 left-0 w-full  overflow-hidden">
            <svg
              className="relative block h-[50px] w-full md:h-[116px]"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1440 121"
              fill="none"
            >
              <path
                d="M0 103.632C144.463 22.5296 310.458 -11.9485 475.269 4.91572L1440 103.632V121H0V103.632Z"
                className="fill-black"
              />
            </svg>
          </div>
        </div>
      ) : null}
      {page.title === 'Contact' ? (
        <div className="relative w-full bg-black text-white md:px-20">
          <div className="content-wrapper relative m-auto flex max-w-[1400px] flex-col justify-between gap-10 md:flex-row ">
            <div className="textsection max-w-2xl px-8 pb-40 pt-10 md:w-2/3 md:pt-20 ">
              <h2 className="mb-4 text-4xl font-bold uppercase">
                <span className="text-stroke-hero">ready to </span>stir up the pot?
              </h2>
              <p className="mb-4">{page.contactBottomBody.value}</p>
              <p className="mb-4 font-semibold text-accent">
                Contact me today, and let&apos;s start cooking up our next big project!
              </p>
              <Link href={page.contactLink.value}>
                <button className="rounded-full border-2 border-accent p-4 font-semibold uppercase text-accent hover:bg-accent hover:text-primary">
                  get in touch
                </button>
              </Link>
            </div>
            <div className="image-section relative m-auto block w-1/2 pb-40 md:m-0 md:w-1/4">
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
      ) : null}
      {page.title === 'Shipping & Refund' ? (
        <div
          className="m-auto max-w-screen-sm p-8 pb-20 pt-20 text-white"
          dangerouslySetInnerHTML={{ __html: page.body }}
        />
      ) : null}
      {page.title === 'Privacy Policy' ? (
        <div
          className="m-auto max-w-screen-sm p-8 pb-20 pt-20 text-white"
          dangerouslySetInnerHTML={{ __html: page.body }}
        />
      ) : null}
    </>
  );
}
