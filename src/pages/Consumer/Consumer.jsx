import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import femme from "../../images/femme.png";


export default function Consumer() {
    return (
        <>
            <NavBar />
            <section>
                <SideBar />
                <div class="flex flex-wrap-reverse  px-20 medium-screen mt-20">
                    <div class="">
                        <div class="flex mt-20">
                            <button class="text-nowrap rounded-md bg-white py-4 px-5 rounded-md">THE IDENTITY VERIFICATION PLATFORM</button>
                        </div>
                        <div class="text-5xl text-left font-bold text-emerald-300 mt-10">
                            <span class="uppercase text-emerald-900">KYC </span>Rapide <span class="text-emerald-900">et</span> <span>flexible</span> <span class="text-emerald-900">pour</span> <br />
                            <span>+200 pays </span> <span class="text-emerald-900">d'Afrique et du</span> <br />
                            <span class="text-emerald-900">monde</span>
                        </div>
                        <div class="text-emerald-900 text-left text-lg my-10">
                            Know Your Customer (KYC) procedures are essential to any business that wants to accurately <br />
                            verify customers ans assess potential risk. Verif helps businesses meet  regulatory <br />
                            requirements and realize additional benefits.
                        </div>
                    </div>
                    <div class="">
                        <img src={femme} alt="" class="object-cover w-full h-full" />
                    </div>
                </div>

                {/* Grid section */}
                <div class="card-grid mx-20 py-5">
                    <div class="flex items-center justify-center gap-10 grid-width">
                        <div class="circle-emerald-500 rounded-full bg-white flex items-center justify-center">
                            <span class="icon text-emerald-300">
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                        </div>
                        <div class="text-left text-white">
                            <h4 class="font-semibold text-md">Customer du diligence (CDD):</h4>
                            <h6>The only AI-powered identity verification</h6>
                        </div>
                    </div>
                    <div class="flex items-center justify-center gap-10 grid-width ">
                        <div class="circle-emerald-500 rounded-full bg-white flex items-center justify-center">
                            <span class="icon text-emerald-300">
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                        </div>
                        <div class="text-left text-white">
                            <h4 class="font-semibold text-md">Adverse media screening</h4>
                            <h6>The only AI-powered identity verification</h6>
                        </div>
                    </div>
                    <div class="flex items-center justify-center gap-10 grid-width">
                        <div class="circle-emerald-500 rounded-full bg-white flex items-center justify-center">
                            <span class="icon text-emerald-300">
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                        </div>
                        <div class="text-left text-white">
                            <h4 class="font-semibold text-md">Enhanced due diligence (EDD) : </h4>
                            <h6>The only AI-powered identity verification</h6>
                        </div>
                    </div>
                    <div class="flex items-center justify-center gap-10 grid-width">
                        <div class="circle-emerald-500 rounded-full bg-white flex items-center justify-center">
                            <span class="icon text-emerald-300">
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                        </div>
                        <div class="text-left text-white">
                            <h4 class="font-semibold text-md">PEP Screening</h4>
                            <h6>The only AI-powered identity verification</h6>
                        </div>
                    </div>
                    <div class="flex items-center justify-center gap-10 grid-width">
                        <div class="circle-emerald-500 rounded-full bg-white flex items-center justify-center">
                            <span class="icon text-emerald-300">
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                        </div>
                        <div class="text-left text-white">
                            <h4 class="font-semibold text-md">Ongoing monitoring</h4>
                            <h6>The only AI-powered identity verification</h6>
                        </div>
                    </div>
                    <div class="flex items-center justify-center gap-10 grid-width">
                        <div class="circle-emerald-500 rounded-full bg-white flex items-center justify-center">
                            <span class="icon text-emerald-300">
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                        </div>
                        <div class="text-left text-white">
                            <h4 class="font-semibold text-md">Sanction screening</h4>
                            <h6>The only AI-powered identity verification</h6>
                        </div>
                    </div>
                </div>
            </section>

            {/* other section  */}
            <section>
                <div class="mx-20 my-10">
                    <h2 class="text-emerald-900 text-left text-4xl font-semibold  my-10">
                        Make identity verification quick and easy by <br />
                        helping genuine users get verified the firs time, <br />
                        while keeping fraudsters out.
                    </h2>
                    <div class="flex flex-wrap items-center justify-around gap-20">
                        <div class="flex items-center justiy-center gap-20">
                            <div class="empty-card  bg-emerald-300">

                            </div>
                            <div class="empty-card bg-emerald-300">

                            </div>
                        </div>
                        <div class="">
                            <h2 class="text-emerald-900 text-left text-4xl mb-5 font-bold">Prendre des photos de vos pieces <br /> d'identité</h2>
                            <div class="text-left mb-10">
                                Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                inexistants et des frais de
                            </div>
                            <div class="grid grid-cols-2 gap-5 items-center justify-center">
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white p-2">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left text-xm">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white p-2">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white p-2">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white p-2">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* into the same section  */}

                    <div class="flex flex-wrap items-center justify-around mt-20">

                        <div >
                            <h2 class="text-emerald-900 text-left text-4xl mb-5 font-bold w-full">
                                Prendre des selfies pour vérifier <br /> l'authenticité</h2>
                            <div class="text-left mb-10">
                                Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                inexistants et des frais de
                            </div>
                            <div class="grid grid-cols-2 items-center justify-center gap-10">
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white p-2">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left text-xm">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white p-2">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white p-2">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white p-2">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="empty-card-2  bg-emerald-300 mt-10">

                            </div>
                            <div class="empty-card-2 bg-emerald-300 mt-10">

                            </div>
                        </div>
                    </div>

                    {/* into the same section but another frames  */}

                    <div class="flex flex-wrap items-center justify-around gap-20 mt-20">
                        <div>
                            <div class="flex items-center justify-center gap-20">
                                <div class="empty-card  bg-emerald-300">

                                </div>
                                <div class="empty-card bg-emerald-300">

                                </div>
                            </div>
                        </div>
                        <div class="">
                            <h2 class="text-emerald-900 text-left text-4xl mb-5 font-bold">Vérification en quelque seconde <br /> et connexion</h2>
                            <div class="text-left mb-10">
                                Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                inexistants et des frais de
                            </div>
                            <div class="grid grid-cols-2 gap-10">
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white p-2">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left text-xm">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white p-2">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white p-2">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white p-2">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white">
                <h2 class="text-emerald-900 text-4xl font-semibold pt-20 pb-10">Comply with KYC relations and onboard mord <br /> customers</h2>
                <div>
                    Orchestrate identity verification checks, code-free. Place checks at any stage of the customers journey for top anti-fraud protection and pass rates worldwide. Orchestrate identity verification <br />
                    checks, code-free. Place checks at any stage of the customers journey for top anti-fraud protection and pass rates worldwide. Orchestrate identity verification
                </div>

                <div class=" gap-5 mt-20 relation-onboard">
                    <div class="flex flex-col items-center mb-20">
                        <div class="flex items-center justify-center circle-orange-100 rounded-full">
                            <div class="circle-amber-100 rounded-full bg-emerald-300 flex items-center justify-center">
                                <span class="icon text-white">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
                        </div>
                        <div class="text-emerald-900 font-bold text-2xl">Comply wity evolving <br /> regulation </div>
                        <div>Know that customers are genuine, ensure <br /> that the proper checks are carried out, <br /> and stay compliant</div>
                    </div>
                    <div class="flex flex-col items-center mb-20">
                        <div class="flex items-center justify-center circle-orange-100 rounded-full">
                            <div class="circle-amber-100 rounded-full bg-emerald-300 flex items-center justify-center">
                                <span class="icon text-white">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
                        </div>
                        <div class="text-emerald-900 font-bold text-2xl">Comply wity evolving <br /> regulation </div>
                        <div>Know that customers are genuine, ensure <br /> that the proper checks are carried out, <br /> and stay compliant</div>
                    </div>
                    <div class="flex flex-col items-center mb-20">
                        <div class="flex items-center justify-center circle-orange-100 rounded-full">
                            <div class="circle-amber-100 rounded-full bg-emerald-300 flex items-center justify-center">
                                <span class="icon text-white">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
                        </div>
                        <div class="text-emerald-900 font-bold text-2xl">Comply wity evolving <br /> regulation </div>
                        <div>Know that customers are genuine, ensure <br /> that the proper checks are carried out, <br /> and stay compliant</div>
                    </div>
                    <div class="flex flex-col items-center mb-20">
                        <div class="flex items-center justify-center circle-orange-100 rounded-full">
                            <div class="circle-amber-100 rounded-full bg-emerald-300 flex items-center justify-center">
                                <span class="icon text-white">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
                        </div>
                        <div class="text-emerald-900 font-bold text-2xl">Comply wity evolving <br /> regulation </div>
                        <div>Know that customers are genuine, ensure <br /> that the proper checks are carried out, <br /> and stay compliant</div>
                    </div>
                </div>
            </section>

            <section>
                <h2 class="mt-20 text-4xl font-bold text-emerald-800">Our approach is to break user identity into  atomic attributes called 'merits". <br />
                    A merit is and individual piece of information about a user that cant be used <br />
                    to improve a prediction of their future behavior.
                </h2>
                <div class="flex items-center gap-20 justify-center overflow-x-auto py-20">
                    <div class="flex flex-col text-left whitespace-nowrap scroll-disponibility">
                        <div class="flex mt-20">
                            <button class="text-nowrap rounded-md bg-emerald-200 p-1 rounded-md">Disponibilité par pays</button>
                        </div>
                        <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                        <span class="mt-2">
                            Localement ou internationalement, vos achats en <br />
                            ligne ne connaissent plus de limite aves les <br />
                            carte virtuelles Visa et Mastercard de chez <br />
                            SEKURE. En 2 minutes, créez et vérifiez votre <br />
                            compte Sekure pour obtenire votre carte virtuelle. <br />
                            Entre des frais d'entretien inexistants et des frais <br />
                            de transaction amoindris, Sekure vous offre les <br />
                            meilleurs Avantages du marché bancaire africain <br />
                            sur jusqu'a 06 cartes que vous pouvez suivre <br />
                            individuellement dans via l'application
                        </span>
                    </div>
                    <div class="flex flex-col text-left whitespace-nowrap">
                        <div class="flex mt-20">
                            <button class="text-nowrap rounded-md bg-emerald-300 p-1 rounded-md">Disponibilité par pays</button>
                        </div>
                        <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                        <span class="mt-2">
                            Localement ou internationalement, vos achats en <br />
                            ligne ne connaissent plus de limite aves les <br />
                            carte virtuelles Visa et Mastercard de chez <br />
                            SEKURE. En 2 minutes, créez et vérifiez votre <br />
                            compte Sekure pour obtenire votre carte virtuelle. <br />
                            Entre des frais d'entretien inexistants et des frais <br />
                            de transaction amoindris, Sekure vous offre les <br />
                            meilleurs Avantages du marché bancaire africain <br />
                            sur jusqu'a 06 cartes que vous pouvez suivre <br />
                            individuellement dans via l'application
                        </span>
                    </div>
                    <div class="flex flex-col text-left whitespace-nowrap">
                        <div class="flex mt-20">
                            <button class="text-nowrap rounded-md bg-emerald-300 p-1 rounded-md">Disponibilité par pays</button>
                        </div>
                        <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                        <span class="mt-2">
                            Localement ou internationalement, vos achats en <br />
                            ligne ne connaissent plus de limite aves les <br />
                            carte virtuelles Visa et Mastercard de chez <br />
                            SEKURE. En 2 minutes, créez et vérifiez votre <br />
                            compte Sekure pour obtenire votre carte virtuelle. <br />
                            Entre des frais d'entretien inexistants et des frais <br />
                            de transaction amoindris, Sekure vous offre les <br />
                            meilleurs Avantages du marché bancaire africain <br />
                            sur jusqu'a 06 cartes que vous pouvez suivre <br />
                            individuellement dans via l'application
                        </span>
                    </div>
                    <div class="flex flex-col text-left whitespace-nowrap">
                        <div class="flex mt-20">
                            <button class="text-nowrap rounded-md bg-emerald-300 p-1 rounded-md">Disponibilité par pays</button>
                        </div>
                        <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                        <span class="mt-2">
                            Localement ou internationalement, vos achats en <br />
                            ligne ne connaissent plus de limite aves les <br />
                            carte virtuelles Visa et Mastercard de chez <br />
                            SEKURE. En 2 minutes, créez et vérifiez votre <br />
                            compte Sekure pour obtenire votre carte virtuelle. <br />
                            Entre des frais d'entretien inexistants et des frais <br />
                            de transaction amoindris, Sekure vous offre les <br />
                            meilleurs Avantages du marché bancaire africain <br />
                            sur jusqu'a 06 cartes que vous pouvez suivre <br />
                            individuellement dans via l'application
                        </span>
                    </div>
                    <div class="flex flex-col text-left whitespace-nowrap">
                        <div class="flex mt-20">
                            <button class="text-nowrap rounded-md bg-emerald-300 p-1 rounded-md">Disponibilité par pays</button>
                        </div>
                        <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                        <span class="mt-2">
                            Localement ou internationalement, vos achats en <br />
                            ligne ne connaissent plus de limite aves les <br />
                            carte virtuelles Visa et Mastercard de chez <br />
                            SEKURE. En 2 minutes, créez et vérifiez votre <br />
                            compte Sekure pour obtenire votre carte virtuelle. <br />
                            Entre des frais d'entretien inexistants et des frais <br />
                            de transaction amoindris, Sekure vous offre les <br />
                            meilleurs Avantages du marché bancaire africain <br />
                            sur jusqu'a 06 cartes que vous pouvez suivre <br />
                            individuellement dans via l'application
                        </span>
                    </div>
                    <div class="flex flex-col text-left whitespace-nowrap">
                        <div class="flex mt-20">
                            <button class="text-nowrap rounded-md bg-emerald-300 p-1 rounded-md">Disponibilité par pays</button>
                        </div>
                        <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                        <span class="mt-2">
                            Localement ou internationalement, vos achats en <br />
                            ligne ne connaissent plus de limite aves les <br />
                            carte virtuelles Visa et Mastercard de chez <br />
                            SEKURE. En 2 minutes, créez et vérifiez votre <br />
                            compte Sekure pour obtenire votre carte virtuelle. <br />
                            Entre des frais d'entretien inexistants et des frais <br />
                            de transaction amoindris, Sekure vous offre les <br />
                            meilleurs Avantages du marché bancaire africain <br />
                            sur jusqu'a 06 cartes que vous pouvez suivre <br />
                            individuellement dans via l'application
                        </span>
                    </div>
                    <div class="flex flex-col text-left whitespace-nowrap">
                        <div class="flex mt-20">
                            <button class="text-nowrap rounded-md bg-emerald-300 p-1 rounded-md">Disponibilité par pays</button>
                        </div>
                        <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                        <span class="mt-2">
                            Localement ou internationalement, vos achats en <br />
                            ligne ne connaissent plus de limite aves les <br />
                            carte virtuelles Visa et Mastercard de chez <br />
                            SEKURE. En 2 minutes, créez et vérifiez votre <br />
                            compte Sekure pour obtenire votre carte virtuelle. <br />
                            Entre des frais d'entretien inexistants et des frais <br />
                            de transaction amoindris, Sekure vous offre les <br />
                            meilleurs Avantages du marché bancaire africain <br />
                            sur jusqu'a 06 cartes que vous pouvez suivre <br />
                            individuellement dans via l'application
                        </span>
                    </div>
                    <div class="flex flex-col text-left whitespace-nowrap">
                        <div class="flex mt-20">
                            <button class="text-nowrap rounded-md bg-emerald-300 p-1 rounded-md">Disponibilité par pays</button>
                        </div>
                        <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                        <span class="mt-2">
                            Localement ou internationalement, vos achats en <br />
                            ligne ne connaissent plus de limite aves les <br />
                            carte virtuelles Visa et Mastercard de chez <br />
                            SEKURE. En 2 minutes, créez et vérifiez votre <br />
                            compte Sekure pour obtenire votre carte virtuelle. <br />
                            Entre des frais d'entretien inexistants et des frais <br />
                            de transaction amoindris, Sekure vous offre les <br />
                            meilleurs Avantages du marché bancaire africain <br />
                            sur jusqu'a 06 cartes que vous pouvez suivre <br />
                            individuellement dans via l'application
                        </span>
                    </div>
                    <div class="flex flex-col text-left whitespace-nowrap">
                        <div class="flex mt-20">
                            <button class="text-nowrap rounded-md bg-emerald-300 p-1 rounded-md">Disponibilité par pays</button>
                        </div>
                        <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                        <span class="mt-2">
                            Localement ou internationalement, vos achats en <br />
                            ligne ne connaissent plus de limite aves les <br />
                            carte virtuelles Visa et Mastercard de chez <br />
                            SEKURE. En 2 minutes, créez et vérifiez votre <br />
                            compte Sekure pour obtenire votre carte virtuelle. <br />
                            Entre des frais d'entretien inexistants et des frais <br />
                            de transaction amoindris, Sekure vous offre les <br />
                            meilleurs Avantages du marché bancaire africain <br />
                            sur jusqu'a 06 cartes que vous pouvez suivre <br />
                            individuellement dans via l'application
                        </span>
                    </div>
                    <div class="flex flex-col text-left whitespace-nowrap mr-10">
                        <div class="flex mt-20">
                            <button class="text-nowrap rounded-md bg-emerald-300 p-1 rounded-md">Disponibilité par pays</button>
                        </div>
                        <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                        <span class="mt-2">
                            Localement ou internationalement, vos achats en <br />
                            ligne ne connaissent plus de limite aves les <br />
                            carte virtuelles Visa et Mastercard de chez <br />
                            SEKURE. En 2 minutes, créez et vérifiez votre <br />
                            compte Sekure pour obtenire votre carte virtuelle. <br />
                            Entre des frais d'entretien inexistants et des frais <br />
                            de transaction amoindris, Sekure vous offre les <br />
                            meilleurs Avantages du marché bancaire africain <br />
                            sur jusqu'a 06 cartes que vous pouvez suivre <br />
                            individuellement dans via l'application
                        </span>
                    </div>
                </div>
            </section>

            <footer>
                <Footer />
            </footer>
        </>
    )
}
