'use client';

import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import Search from './search';

export default function MobileMenu() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors md:hidden dark:border-neutral-700 dark:text-white"
      >
        <Bars3Icon className="h-4" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-accent80 pb-6 dark:bg-primary">
              <div className="p-4">
                <button
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-primary transition-colors dark:border-neutral-700 dark:text-white"
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <XMarkIcon className="h-6" />
                </button>

                <div className="mb-4 w-full">
                  <Search />
                </div>

                <ul className="flex w-full flex-col gap-10 uppercase">
                  <li>
                    <Link
                      href={'/about'}
                      className="block font-bold text-primary underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={'/contact'}
                      className="block font-bold text-primary underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={'/search'}
                      className="block font-bold text-primary underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                    >
                      Shop
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href={'/the-book'}
                      className="block font-bold text-primary underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                    >
                      The Book
                    </Link>
                  </li> */}
                </ul>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
