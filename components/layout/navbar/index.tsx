import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/bn-logo.png';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search from './search';

export default async function Navbar() {
  return (
    <nav className="relative flex items-center justify-between bg-accent p-4 lg:px-6">
      <div className="block flex-none md:hidden ">
        <MobileMenu />
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full justify-between md:w-full">
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <Image src={logo} alt="logo" width={200} height={50} />
          </Link>
          <ul className=" hidden gap-6  text-sm md:flex  md:items-center">
            <li>
              <Link
                href={'/about'}
                className="font-bold text-primary underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={'/contact'}
                className="font-bold text-primary underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href={'/search'}
                className="font-bold text-primary underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href={'/the-book'}
                className="font-bold text-primary underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                The Book
              </Link>
            </li>
          </ul>
          {/* {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null} */}
        </div>
        <div className="ml-4 hidden justify-center  md:flex md:w-1/3">
          <Search />
        </div>
        <div className="flex justify-end md:ml-6">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
