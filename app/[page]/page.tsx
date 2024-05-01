import { AddToCart } from 'components/cart/add-to-cart';
import CrazyText from 'components/sections/crazy-text';
import PartnerUp from 'components/sections/partner-up';
import { getPage } from 'lib/shopify';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import jakeWithASpoon from 'public/jake-horwood-spoon.png';
import tongueEmoji from 'public/tounge-emoji.png';
import wiseEmoji from 'public/wise-emoji.png';

// const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,permalink&access_token=${process.env.INSTAGRAMKEY}`;
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
  // const instagramData = await fetch(url);
  // const instagram = await instagramData.json();
  // const instagramArray = await instagram.data.slice(0, 10);
  const productAvailability = page.cookbookProduct?.reference.totalInventory > 0 ? true : false;
  const variantData = page.title === 'The Book' ? page.cookbookProduct?.reference.variants : null;
  const variants: any[] = variantData ? variantData.edges.map((edge: any) => edge.node) : [];
  const productImage = page.cookbookProduct?.reference.images?.edges[0].node.originalSrc;
  if (!page) return notFound();
  return (
    <>
      {page.title === 'About' ? (
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
      ) : null}
      {page.aboutHeader && (
        <div className="relative w-full bg-accent40 py-20">
          <div className="content-wrapper relative relative flex max-w-[1400px] gap-10 ">
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
      )}
      {page.title === 'About' ? (
        <>
          <div className="section-container relative flex flex-col items-center bg-primary pb-40 pt-20">
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
              <h2 className="mb-4 text-2xl font-bold">{page.fourthSectionTitle.value}</h2>
              <p className="mb-4">{page.fourthSectionBody.value}</p>
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
        <div className="bg-accent40 py-10">
          <h3 className="mb-6 text-center text-4xl font-bold uppercase">content</h3>
          {/* <PhotoCarousel instagramArray={instagramArray} /> */}
        </div>
      ) : null}
      {page.title === 'The Book' ? (
        <div className="relative bg-primary">
          <div className="content-wrapper relative relative m-auto flex max-w-[1400px] gap-10 p-20 ">
            <div className="image-section relative flex w-1/4">
              <Image
                alt="product image"
                src={productImage}
                className="-rotate-12 rounded-lg object-contain"
                width={800}
                height={800}
              />
            </div>
            <div className="textsection flex w-2/3 flex-col gap-4 p-20">
              <h5 className="font-sans uppercase text-white">shop</h5>
              <h1 className="font-sans text-4xl font-semibold uppercase text-white">
                {page.cookbookTitleOne.value}{' '}
                <span className="text-accent">{page.cookbookTitleTwo.value} </span>
                {page.cookbookTitleThree.value}
              </h1>
              <p className="text-white">{page.heroText.value}</p>
              <AddToCart
                backgroundColor="primary"
                variants={variants ?? []}
                availableForSale={productAvailability}
              />
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
        <div className="relative bg-accent40 pb-20">
          <div className="content-wrapper relative relative m-auto flex max-w-[1400px] gap-20 p-20 ">
            <div className="textsection w-1/2">
              <h5 className="mb-2 font-sans text-xl font-semibold uppercase">
                {page.secondSectionSubtileOne.value}
              </h5>
              <h3 className="mb-2 font-sans text-4xl font-semibold uppercase">
                {page.secondSectionTitleOne.value}{' '}
                <Image
                  alt="emoji of a wise face"
                  className="inline-block w-12"
                  src={tongueEmoji}
                  width={800}
                  height={800}
                />
              </h3>
              <p>{page.secondSectionBodyOne.value}</p>
            </div>
            <div className="imagesection w-1/2">
              <div className="image-container mb-10 w-1/2">
                <Image
                  alt="product image"
                  src={productImage}
                  className="-rotate-12 rounded-lg object-contain"
                  width={800}
                  height={800}
                />
              </div>
              <div className="textblock">
                <h5 className="mb-2 font-sans text-xl font-semibold uppercase">
                  {page.secondSectionSubtileTwo.value}
                </h5>
                <h3 className="mb-2 font-sans text-4xl font-semibold uppercase">
                  {page.secondSectionTitleTwo.value}{' '}
                  <Image
                    alt="emoji of a wise face"
                    className="inline-block w-12"
                    src={wiseEmoji}
                    width={800}
                    height={800}
                  />
                </h3>
                <p>{page.secondSectionBodyTwo.value}</p>
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
                className="fill-accent"
              />
            </svg>
          </div>
        </div>
      ) : null}
      {page.title === 'The Book' ? (
        <div className="relative bg-accent pb-40">
          <div className="content-wrapper m-auto max-w-[1000px] p-10">
            <h1 className="mb-10 text-center text-xl font-semibold">List of featured cities</h1>
            <ul
              className="border-b text-lg font-semibold"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
            >
              {(() => {
                try {
                  const cities = JSON.parse(page.listOfCities.value);
                  return (
                    Array.isArray(cities) &&
                    cities.map((city, index) => (
                      <li className="border-t p-2 text-center" key={index}>
                        {city}
                      </li>
                    ))
                  );
                } catch (error) {
                  console.error('Error parsing cities:', error);
                  return null;
                }
              })()}
            </ul>
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
          <div className="content-wrapper relative relative m-auto flex max-w-[1400px] gap-10 p-20 ">
            <div className="image-section relative flex w-1/4">
              <Image
                alt="product image"
                src={productImage}
                className="-rotate-12 rounded-lg object-contain"
                width={800}
                height={800}
              />
            </div>
            <div className="textsection flex w-2/3 flex-col gap-4 p-20">
              <h5 className="font-sans uppercase text-white">shop</h5>
              <h1 className="font-sans text-4xl font-semibold uppercase text-white">
                {page.cookbookTitleOne.value}{' '}
                <span className="text-accent">{page.cookbookTitleTwo.value} </span>
                {page.cookbookTitleThree.value}
              </h1>
              <p className="text-white">{page.heroText.value}</p>
              <AddToCart
                backgroundColor="primary"
                variants={variants ?? []}
                availableForSale={productAvailability}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
