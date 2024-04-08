import { AddToCart } from 'components/cart/add-to-cart';
import Footer from 'components/layout/footer';
import PhotoCarousel from 'components/photo-carousel';
import PartnerUp from 'components/sections/partner-up';
import { getCollectionProducts, getHome } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import chilli from 'public/chilli.png';
import dscard from 'public/ds.png';
import hand from 'public/hand.png';

import jakeyLimeEyes from 'public/jake-top.png';
import { Suspense } from 'react';
export const runtime = 'edge';
const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,permalink&access_token=${process.env.INSTAGRAMKEY}`;
export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const data = await getHome();
  const instagramData = await fetch(url);
  const instagram = await instagramData.json();
  const instagramArray = await instagram.data.slice(0, 10);
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
          <div className="hero-section relative min-h-[75vh] bg-primary pb-20 pt-20">
            <div className="herotext relative z-30 my-auto flex max-w-4xl items-center p-10  leading-8 md:w-3/4 md:pl-10 md:pl-5">
              <div className=" relative items-center text-wrap align-middle	 font-sans text-4xl font-semibold uppercase	 leading-normal text-accent md:text-7xl">
                <span className="text-stroke-hero">{data.first_line}</span>
                <div className="relative inline-block px-5 		 align-middle ">
                  <Image
                    className="relative z-10   "
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
                <div className="relative inline-block px-5 py-10  align-middle">
                  <Image
                    className="relative top-1/2 z-10 "
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
                    className="relative top-1/2  z-10 "
                    height={44}
                    width={40}
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
                <button className="m-auto ml-4 inline-block rounded-full border-2 border-accent p-4 align-middle  	">
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
              </div>
            </div>
            <div className="heroimage absolute bottom-0 right-0 w-2/3 md:w-5/12 ">
              <Image
                className="relative z-10 self-end 	 "
                width={1000}
                height={1000}
                alt="jake with limes for eyes"
                src={jakeyLimeEyes}
              />
            </div>
            <svg
              className="absolute bottom-20 right-0 z-0 w-[150px] blur-2xl "
              viewBox="0 0 466 503"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.8" cx="252.146" cy="251.744" r="251.256" fill="#EFAF14" />
            </svg>
            <div className="wave absolute -bottom-1 left-0 z-10 w-full overflow-hidden ">
              {/* <svg
                className="relative block h-[102px] w-full"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className="fill-accent80"
                ></path>
              </svg> */}
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
            <div className="m-auto flex max-w-screen-xl flex-col py-12 md:flex-row">
              <div className="product w-full md:w-1/2">
                <div className="featured-product-conatiner m-auto max-w-sm rounded-lg  border-2 border-accent40 p-12 ">
                  <Image
                    className="relative z-10 pb-4"
                    width={firstProductImage?.width ?? 0}
                    height={firstProductImage?.height ?? 0}
                    alt="hand icon"
                    src={firstProductImage?.url ?? ''}
                  ></Image>
                  <h5 className="pb-2">{firstProduct?.title ?? ''}</h5>
                  <p className="pb-4">£{firstProduct?.priceRange.maxVariantPrice.amount}0</p>
                  <AddToCart
                    variants={firstProduct?.variants ?? []}
                    availableForSale={firstProduct?.availableForSale ?? false}
                  />
                </div>
              </div>
              <div className="product-desctiption w-full p-8 md:w-1/2 md:p-20">
                <h2 className=" py-4 text-4xl font-bold">{data.second_section_title}</h2>
                <p>{data.product_text_description}</p>
                <button>
                  <Link href={`/product/${firstProduct?.handle ?? ''}`}>Read More</Link>
                </button>
              </div>
            </div>
            <div className="wave absolute -bottom-1 left-0 w-full rotate-180 overflow-hidden  ">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className="fill-primary"
                ></path>
              </svg>
            </div>
          </div>

          <PartnerUp data="some data" />
          <div className="instagram-section relative bg-accent80 py-10">
            <h2 className="py-10 text-center text-4xl font-bold uppercase">content</h2>
            <PhotoCarousel instagramArray={instagramArray} />
            <div className="button-container flex justify-center">
              <Link href="https://www.instagram.com/bignibblesfood/">
                <button className="rounded-full border-2 border-primary p-4 font-bold uppercase">
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
