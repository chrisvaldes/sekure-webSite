import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import NavBar from '../../components/NavBar';
import femme from "../../images/femme.png";


export default function Acceuil() {
    return (
        <>
            <section>
                <NavBar />
                <div class="flex flex-row md:flex-col-reverse px-20 medium-screen">
                    <div class="w-full">
                        <div class="flex mt-20">
                            <button class="text-nowrap rounded-md bg-white py-4 px-5 rounded-md">THE IDENTITY VERIFICATION PLATFORM</button>
                        </div>
                        <div class="text-5xl text-left font-semibold text-emerald-500 mt-10">
                            <span class="uppercase text-emerald-800">ai</span>-powered <span class="uppercase text-emerald-800">aml screening <br /> solution</span> to mitigate business <br /> risk
                        </div>
                        <div class="text-emerald-900 text-left text-lg mt-10">
                            Know Your Customer (KYC) procedures are essential to any business that wants to accurately <br />
                            verify customers ans assess potential risk. Verif helps businesses meet  regulatory <br />
                            requirements and realize additional benefits.
                        </div>
                    </div>
                    <div class="w-full">
                        <img src={femme} alt="" className="object-cover w-full h-full" />
                    </div>
                </div>

                {/* Grid section */}
                <div class="card-grid mx-20 py-5">
                    <div class="flex items-center justify-center gap-20 grid-width ">
                        <div class="circle-emerald-500 rounded-full bg-emerald-300 flex items-center justify-center">
                            <div class="flex items-center justify-center circle-white rounded-full bg-white z-100">
                                <span class="icon text-emerald-300">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
                        </div>
                        <div class="text-left text-white">
                            <h4 class="font-semibold text-md">Customer du diligence (CDD):</h4>
                            <h6>The only AI-powered identity verification</h6>
                        </div>
                    </div>
                    <div class="flex items-center justify-center gap-20 grid-width ">
                        <div class="circle-emerald-500 rounded-full bg-emerald-300 flex items-center justify-center">
                            <div class="flex items-center justify-center circle-white rounded-full bg-white z-100">
                                <span class="icon text-emerald-300">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
                        </div>
                        <div class="text-left text-white">
                            <h4 class="font-semibold text-md">Adverse media screening</h4>
                            <h6>The only AI-powered identity verification</h6>
                        </div>
                    </div>
                    <div class="flex items-center justify-center gap-20 grid-width">
                        <div class="circle-emerald-500 rounded-full bg-emerald-300 flex items-center justify-center">
                            <div class="flex items-center justify-center circle-white rounded-full bg-white z-100">
                                <span class="icon text-emerald-300">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
                        </div>
                        <div class="text-left text-white">
                            <h4 class="font-semibold text-md">Enhanced due diligence (EDD) : </h4>
                            <h6>The only AI-powered identity verification</h6>
                        </div>
                    </div>
                    <div class="flex items-center justify-center gap-20 grid-width">
                        <div class="circle-emerald-500 rounded-full bg-emerald-300 flex items-center justify-center">
                            <div class="flex items-center justify-center circle-white rounded-full bg-white z-100">
                                <span class="icon text-emerald-300">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
                        </div>
                        <div class="text-left text-white">
                            <h4 class="font-semibold text-md">PEP Screening</h4>
                            <h6>The only AI-powered identity verification</h6>
                        </div>
                    </div>
                    <div class="flex items-center justify-center gap-20 grid-width">
                        <div class="circle-emerald-500 rounded-full bg-emerald-300 flex items-center justify-center">
                            <div class="flex items-center justify-center circle-white rounded-full bg-white z-100">
                                <span class="icon text-emerald-300">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
                        </div>
                        <div class="text-left text-white">
                            <h4 class="font-semibold text-md">Ongoing monitoring</h4>
                            <h6>The only AI-powered identity verification</h6>
                        </div>
                    </div>
                    <div class="flex items-center justify-center gap-20 grid-width">
                        <div class="circle-emerald-500 rounded-full bg-emerald-300 flex items-center justify-center">
                            <div class="flex items-center justify-center circle-white rounded-full bg-white z-100">
                                <span class="icon text-emerald-300">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
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
                <div class="mx-20">
                    <h2 class="text-emerald-900 text-left text-4xl font-semibold  my-10">
                        Make identity verification quick and easy by <br />
                        helping genuine users get verified the firs time, <br />
                        while keeping fraudsters out.
                    </h2>
                    <div class="flex flex-wrap items-center justify-center gap-20">
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
                            <div class="grid grid-cols-2 gap-10">
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left text-xm">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white">
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

                    <div class="flex flex-wrap items-center justify-center mt-20">

                        <div class="mr-60">
                            <h2 class="text-emerald-900 text-left text-4xl mb-5 font-bold w-full">
                                Prendre des selfies pour vérifier <br /> l'authenticité</h2>
                            <div class="text-left mb-10">
                                Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                inexistants et des frais de
                            </div>
                            <div class="grid grid-cols-2 gap-10">
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left text-xm">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white">
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

                    <div class="flex flex-wrap items-center justify-center gap-20 mt-20">
                        <div class="flex items-center justiy-center gap-20">
                            <div class="empty-card  bg-emerald-300">

                            </div>
                            <div class="empty-card bg-emerald-300">

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
                                        <span class="icon text-white">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left text-xm">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white">
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

                    <div class="flex flex-wrap items-center justify-center mt-20">

                        <div class="mr-60">
                            <h2 class="text-emerald-900 text-left text-4xl mb-5 font-bold w-full">
                                Address <br /> Vérification</h2>
                            <div class="text-left mb-10">
                                Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                inexistants et des frais de
                            </div>
                            <div class="grid grid-cols-2 gap-10">
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left text-xm">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div class="text-left">
                                        Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                    </div>
                                </div>
                                <div class="flex items-center justify-center gap-5">
                                    <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                        <span class="icon text-white">
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
                </div>
            </section>

            <section class="bg-white h-50">

            </section>
        </>
    )
}
