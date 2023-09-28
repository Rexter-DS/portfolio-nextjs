"use client"

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import NavResume from './nav-resume.component';
import NavGithub from './nav-github.component';
import NavLinkedin from './nav-linkedin.component';
import ButtonContactMe from '../button/button-contact.component';

const NavMenu = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <Bars3Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 p-3">
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-base font-bold">Projects</span>
              </div>
              <div>
                <NavResume></NavResume>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className="w-8 sm:w-10">
                  <NavGithub></NavGithub>
                </div>
                <div className="w-8 sm:w-10">
                  <NavLinkedin></NavLinkedin>
                </div>
                {/* <div className="w-8 sm:w-10">
                  <EmailLogo></EmailLogo>
                </div> */}
              </div>
              <div>
                <ButtonContactMe></ButtonContactMe>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default NavMenu;