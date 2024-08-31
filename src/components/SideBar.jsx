import { faChevronRight, faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import pic from "../images/pic.png";

export default function SideBar() {
    return (
        <>
            <div class="side-bar">
                <header class="header-section">
                    <img src={pic} alt="logo" />
                </header>
                <span class="icon text-red-500 remove-icon">
                    <FontAwesomeIcon icon={faRemove} />
                </span>
                <div class="menu">
                    <ul class="items">
                        <li class="item flex items-center justify-between gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 cursor-pointer">
                            <a href="#" class="flex items-center text-lg">
                                Accueil
                            </a>
                            <span class="text-emerald-300">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </li>
                        <li class="item flex items-center justify-between gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            <a href="#" class="flex items-center text-lg">
                                Know your customer
                            </a>
                            <span class="text-emerald-300">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </li>
                        <li class=" item flex items-center justify-between gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            <a href="#" class="flex items-center text-lg">
                                AML Screenning
                            </a>
                            <span class="text-emerald-300">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </li>
                        <li class="item flex items-center justify-between gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            <a href="#" class="flex items-center text-lg">
                                Pricing
                            </a>
                            <span class="text-emerald-300">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </li>
                        <li class="item flex items-center justify-between gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            <a href="#" class="flex items-center text-lg">
                                About Us
                            </a>
                            <span class="text-emerald-300">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
