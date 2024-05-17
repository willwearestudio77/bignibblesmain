import { AddToCart } from 'components/cart/add-to-cart';
import Footer from 'components/layout/footer';
import { PhotoCarousel } from 'components/photo-carousel';
import PartnerUp from 'components/sections/partner-up';
import Stamps from 'components/stamps';

import { getCollectionProducts, getHome } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import chilli from 'public/chilli.png';
import dscard from 'public/ds.png';
import hand from 'public/hand.png';
import jakeyLimeEyes from 'public/jake-top.png';
import rock from 'public/rock.png';
import { Suspense } from 'react';
export const runtime = 'edge';
export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const data = await getHome();

  const products = await getCollectionProducts({
    collection: 'frontpage',
    reverse: true,
    sortKey: 'CREATED_AT'
  });
  const firstProduct = products[0];
  const firstProductImage = firstProduct?.images[0];
  return (
    <>
      <Suspense>
        <Suspense>
          <div className="hero-section relative bg-primary pb-60 md:min-h-[75vh] md:pb-40 md:pt-20">
            <Stamps />
            <div className="herotext relative z-30 my-auto flex max-w-4xl items-center p-10 leading-8  md:w-3/4 md:pl-10 lg:pl-20 lg:pt-20">
              <div className=" relative items-center text-wrap align-middle	 font-sans text-4xl font-semibold uppercase	leading-relaxed text-accent	 md:text-7xl md:leading-normal">
                <span className="text-stroke-hero text-transparent">{data.first_line}</span>
                <div className="relative inline-block px-5  align-middle ">
                  <Image
                    className="relative z-10 transition-transform hover:scale-125  "
                    height={69}
                    width={48}
                    alt="hand icon"
                    src={hand}
                  ></Image>
                  <svg
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2	 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="63"
                    height="63"
                    viewBox="0 0 63 63"
                    fill="none"
                  >
                    <circle cx="31.5" cy="31.5" r="31.5" fill="#3C3C3C" />
                  </svg>
                </div>
                {data.second_line}
                <div className="relative inline-block px-5 py-5 align-middle  md:py-10">
                  <Image
                    className="relative top-1/2 z-10 transition-transform hover:scale-125 "
                    height={36}
                    width={36}
                    alt="chilli icon"
                    src={chilli}
                  ></Image>
                  <svg
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="63"
                    height="63"
                    viewBox="0 0 63 63"
                    fill="none"
                  >
                    <circle cx="31.5" cy="31.5" r="31.5" fill="#3C3C3C" />
                  </svg>
                </div>
                <span className="text-stroke-hero">{data.third_line}</span>
                <div className="relative inline-block  px-5	 align-middle  ">
                  <Image
                    className="relative top-1/2 z-10 h-[40px] w-[44px] transition-transform hover:scale-125	 "
                    height={200}
                    width={200}
                    alt="nintendo ds card"
                    src={dscard}
                  ></Image>
                  <svg
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="63"
                    height="63"
                    viewBox="0 0 63 63"
                    fill="none"
                  >
                    <circle cx="31.5" cy="31.5" r="31.5" fill="#3C3C3C" />
                  </svg>
                </div>
                {data.fourth_line}
                <Link href="/about">
                  <button className="m-auto ml-4 inline-block rounded-full border-2 border-accent p-4 align-middle 	">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="15"
                      viewBox="0 0 48 15"
                      fill="none"
                    >
                      <path
                        d="M47.7071 8.20711C48.0976 7.81658 48.0976 7.18342 47.7071 6.79289L41.3431 0.428932C40.9526 0.0384078 40.3195 0.0384078 39.9289 0.428932C39.5384 0.819457 39.5384 1.45262 39.9289 1.84315L45.5858 7.5L39.9289 13.1569C39.5384 13.5474 39.5384 14.1805 39.9289 14.5711C40.3195 14.9616 40.9526 14.9616 41.3431 14.5711L47.7071 8.20711ZM0 8.5H47V6.5H0V8.5Z"
                        fill="#EFAF14"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
            <div className="heroimage absolute bottom-0 right-0 w-2/3 md:w-5/12 ">
              <Image
                className="relative z-10 self-end"
                width={1000}
                height={1000}
                alt="jake with limes for eyes"
                src={jakeyLimeEyes}
              />
            </div>
            <svg
              className="absolute bottom-20 right-0 z-0 w-[150px] blur-2xl md:w-[400px] "
              viewBox="0 0 466 503"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.8" cx="252.146" cy="251.744" r="251.256" fill="#EFAF14" />
            </svg>
            <div className="wave absolute -bottom-1 left-0 z-10 w-full overflow-hidden ">
              <svg
                className="relative block h-[50px] w-full md:h-[116px]"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                viewBox="0 0 1440 116"
                fill="none"
              >
                <path
                  d="M0 83L614.386 14.0747C891.452 -17.0082 1171.92 6.40659 1440 83V83V115.5H0V83Z"
                  className="fill-accent80"
                />
              </svg>
            </div>
          </div>
          <div className="product-section relative bg-accent80 pb-20">
            <div className="m-auto flex max-w-screen-xl flex-col pt-12 md:flex-row md:pb-36">
              <div className="product homepage-product w-full p-4 md:w-1/2">
                <div className="featured-product-conatiner relative m-auto max-w-sm rounded-lg  border-2 border-accent40 p-4 md:p-12 ">
                  <div className="rock absolute left-0 top-0 z-20">
                    <div className="relative">
                      <Image
                        className="absolute left-1/2 z-10	 -translate-x-1/2 transition-transform hover:scale-125  "
                        height={69}
                        width={48}
                        alt="hand icon"
                        src={rock}
                      ></Image>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="81"
                        viewBox="0 0 80 81"
                        fill="none"
                      >
                        <circle cx="40.1802" cy="40.6487" r="39.8198" fill="#231F20" />
                      </svg>
                    </div>
                  </div>
                  <Image
                    className="relative z-10 pb-4"
                    width={firstProductImage?.width ?? 0}
                    height={firstProductImage?.height ?? 0}
                    alt="hand icon"
                    src={firstProductImage?.url ?? ''}
                  ></Image>
                  <h5 className="pb-2 font-semibold">{firstProduct?.title ?? ''}</h5>
                  <p className="pb-4 font-semibold">
                    £{firstProduct?.priceRange.maxVariantPrice.amount}0
                  </p>
                  <AddToCart
                    variants={firstProduct?.variants ?? []}
                    availableForSale={firstProduct?.availableForSale ?? false}
                  />
                </div>
              </div>
              <div className="product-desctiption flex w-full items-center p-8 md:w-1/2 md:p-20">
                <div className="textwrapper">
                  <h2 className=" py-4 text-4xl font-bold uppercase text-primary">
                    {data.second_section_title}
                  </h2>
                  <p className="mb-4 text-primary">{data.product_text_description}</p>
                  <button className="rounded-full border-2 border-primary p-4 font-bold uppercase text-primary hover:bg-primary hover:text-accent">
                    <Link href={'/the-book'}>Read More</Link>
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
                  className="fill-primary"
                />
              </svg>
            </div>
          </div>
          <div className="relative bg-primary">
            <PartnerUp />
            <div className="wave absolute -bottom-1 left-0 w-full overflow-hidden">
              <svg
                className="relative block h-[50px] w-full md:h-[116px]"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                viewBox="0 0 1440 80"
                fill="none"
              >
                <path
                  d="M1440 55.5842C1214.42 7.42618 983.258 -9.29672 753.093 5.89086L0 55.5842V80H1440V55.5842Z"
                  className="fill-accent80"
                />
              </svg>
            </div>
          </div>
          <div className="instagram-section relative bg-accent80 pb-40">
            <h2 className="py-10 text-center text-4xl font-bold uppercase">content</h2>

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
            <div className="button-container flex justify-center">
              <Link href="https://www.instagram.com/bignibblesfood/">
                <button className="rounded-full border-2 border-primary p-4 font-bold uppercase text-primary hover:bg-primary hover:text-accent">
                  follow me
                </button>
              </Link>
            </div>
          </div>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
