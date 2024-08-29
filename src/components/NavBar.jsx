import { faChevronDown, faEarthAfrica } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";

export default function NavBar() {
  return (

    <nav
      class="sticky top-0 z-10 block w-full max-w-full px-20 py-2 bg-white border rounded-none h-max border-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div class="flex items-center justify-between ">
        <a href="#"
          class="block cursor-pointer py-1.5 text-emerald-800  font-bold logo-title">
          AIBIOMETRICS
        </a>
        <div class="flex items-center gap-4">
          <div class=" ">
            <ul class="flex gap-10 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li class="flex items-center justify-center gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 cursor-pointer">
                <a href="#" class="flex items-center text-lg">
                  Accueil
                </a>
                <span class="text-emerald-300">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </li>
              <li class="flex items-center justify-center gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="#" class="flex items-center text-lg">
                  Know your customer
                </a>
                <span class="text-emerald-300">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </li>
              <li class=" flex items-center justify-center gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="#" class="flex items-center text-lg">
                  AML Screenning
                </a>
                <span class="text-emerald-300">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </li>
              <li class="flex items-center justify-center gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="#" class="flex items-center text-lg">
                  Pricing
                </a>
                <span class="text-emerald-300">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </li>
              <li class="flex items-center justify-center gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="#" class="flex items-center text-lg">
                  About Us
                </a>
                <span class="text-emerald-300">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex items-center gap-x-1">
          <li class="flex items-center justify-center gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            <span class=" text-2xl">
              <FontAwesomeIcon icon={faEarthAfrica} />
            </span>
            <a href="#" class="flex items-center text-lg">
              FR
            </a>
            <span class="text-emerald-300">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </li>
          <button
            class="rounded-lg bg-emerald-300 py-3 px-10 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button">
            <span class="text-neutral-50">Demo</span>
          </button>
          <button
            class="rounded-lg bg-emerald-300 py-3 px-10 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button">
            <span class="text-neutral-50">Demo</span>
          </button>
        </div>
      </div>
    </nav>
  );
}