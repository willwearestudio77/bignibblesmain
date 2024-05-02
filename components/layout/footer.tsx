import ContactForm from 'components/forms/newsletter';
import FooterMenu from 'components/layout/footer-menu';
import SocialMediaIcons from 'components/social-media-icons';
import { getMenu } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import logoDark from 'public/logo-dark.png';
import spam from 'public/spam-bg.png';
import { Suspense } from 'react';
const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const legalMenu = await getMenu('legal-footer');
  const browseMenu = await getMenu('browse-menu-footer');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="relative bg-primary text-sm text-white">
      <div className="relative overflow-hidden px-4 py-20">
        <h2 className="pb-2 text-center text-4xl font-bold uppercase text-accent">
          Join the newsletter
        </h2>
        <h4 className="pb-4 text-center text-2xl font-bold uppercase">
          There might be spam, but only the tinned variety
        </h4>
        <ContactForm />
        <Image
          alt="Spam"
          className="absolute left-0 top-1 z-0 w-[100px] rotate-12 lg:w-[200px] xl:w-[300px]"
          height={400}
          src={spam}
          width={400}
        />
        <Image
          alt="Spam"
          className="absolute bottom-1 right-0 z-0 w-[100px] -rotate-12 lg:w-[200px] xl:w-[300px]"
          height={400}
          src={spam}
          width={400}
        />
      </div>
      <div className="mx-auto flex w-full  flex-col justify-between gap-6 bg-black px-10 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <div className="footer-container mx-auto flex w-full max-w-[1400px] flex-col justify-around md:flex-row md:px-10">
          <div className="mb-4">
            <Link
              className="flex items-center gap-2 py-4 text-black md:pt-1 dark:text-white"
              href="/"
            >
              <Image alt="Logo" height={72} src={logoDark} width={261} />
            </Link>
            <SocialMediaIcons />
          </div>
          <Suspense
            fallback={
              <div className="flex h-[188px] w-[200px] flex-col gap-2">
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
              </div>
            }
          >
            <div className="browse-menu mb-4">
              <h5 className="text-xl font-bold uppercase text-accent">browse</h5>
              <FooterMenu menu={browseMenu} />
            </div>
            <div className="legal-menu mb-4">
              <h5 className="text-xl font-bold uppercase text-accent">legal sh*t</h5>
              <FooterMenu menu={legalMenu} />
            </div>
          </Suspense>
        </div>
      </div>
      <div className=" bg-accent py-6  text-sm text-primary dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p>Designed By Studio77</p>
        </div>
      </div>
    </footer>
  );
}
