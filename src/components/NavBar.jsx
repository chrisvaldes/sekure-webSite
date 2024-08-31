import { faBars, faChevronDown, faEarthAfrica } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Link } from 'react-router-dom';

export default function NavBar() {

  // const [accueil, setAccueil] = useState("false")
  // const [customer, setCustomer] = useState("false")

  // const handleAccueil = () => {
  //   setAccueil(!accueil)
  //   setCustomer(false)
  // }

  // const handleCustomer = () => {
  //   setAccueil(false)
  //   setCustomer(!customer)
  // }

  return (

    <nav
      class="fixed top-0 z-10 block w-full max-w-full px-20 py-2 bg-white border rounded-none h-max border-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div class="flex items-center justify-between ">

        <div class="flex items-center justify-center gap-5">
          <div class="">
            <span class="text-3xl icon-bars">
              <FontAwesomeIcon icon={faBars} />
            </span>
          </div>

          <a href="#"
            class="block cursor-pointer py-1.5 text-emerald-800  font-bold logo-title">
            AIBIOMETRICS
          </a>
        </div>

        <div class="flex items-center gap-4">
          <div className='nav-items'>
            <ul class="flex gap-3 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center ">
              <li class="flex items-center justify-center gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 cursor-pointer relative" >
                <Link to="/" class="flex items-center text-lg">
                  Accueil
                </Link>
                {/* {
                  accueil && (
                    <div class="" style={{}}>
                      <ul class="nav-sub-items">
                        <li class="nav-sub-item text-left">
                          <a href="">Know your customer</a>
                        </li>
                        <li class="nav-sub-item text-left">
                          <a href="">AML Screening</a>
                        </li>
                        <li class="nav-sub-item text-left">
                          <a href="">Pricing</a>
                        </li>
                        <li class="nav-sub-item text-left">
                          <a href="">About us</a>
                        </li>
                      </ul>
                    </div>
                  )
                }
                {
                  accueil ? ( */}
                    <span class="text-emerald-300">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  {/* ) :
                    (
                      <span class="text-emerald-300">
                        <FontAwesomeIcon icon={faChevronDown} />
                      </span>
                    )
                } */}
              </li>
              <li class="flex items-center justify-center gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 relative">
                <Link to="/consumer" class="flex items-center text-lg text-nowrap">
                  Know your customer
                </Link>
                {/* {
                  customer && (
                    <div class="">
                      <ul class="nav-sub-items">
                        <li class="nav-sub-item text-left">
                          <a href="">Accueil</a>
                        </li>
                        <li class="nav-sub-item text-left">
                          <a href="">AML Screening</a>
                        </li>
                        <li class="nav-sub-item text-left">
                          <a href="">Pricing</a>
                        </li>
                        <li class="nav-sub-item text-left">
                          <a href="">About us</a>
                        </li>
                      </ul>
                    </div>
                  )
                }
                {
                  customer ? ( */}
                    <span class="text-emerald-300">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  {/* ) :
                    (
                      <span class="text-emerald-300">
                        <FontAwesomeIcon icon={faChevronDown} />
                      </span>
                    )
                } */}
              </li>
              <li class=" flex items-center justify-center gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <a href="#" class="flex items-center text-lg text-nowrap">
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
                <a href="#" class="flex items-center text-lg  text-nowrap">
                  About Us
                </a>
                <span class="text-emerald-300">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="nav-button flex items-center gap-x-1">
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