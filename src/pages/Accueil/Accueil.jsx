import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import NavBar from '../../components/NavBar';
// import Footer from '../../components/Footer';
// import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';
import femme from "../../images/femme.png";
import femme2 from "../../images/femme2.png";
import fleche from "../../images/fleche.png";

export default function Accueil() {
    return (
        <>
            <div>
                <NavBar />

                <section>
                    <div class="flex flex-wrap-reverse items-center justify-center mt-20">
                        <div class="mx-10">
                            <div class="flex mt-20">
                                <button class="text-nowrap rounded-md bg-white py-4 px-5 rounded-md">THE IDENTITY VERIFICATION PLATFORM</button>
                            </div>
                            <div class="text-5xl text-left font-bold text-emerald-300 mt-10">
                                <span class="text-emerald-900">Faster, more accurate, and <br /> built for you :</span>
                                <span>fraud prevention <br /> done right</span>

                            </div>
                            <div class="text-emerald-900 text-left text-lg my-10">
                                The only AI-powered identity verification platform form fraud prevention, compliance, and <br />
                                safeguarding your customers. Build trusted digital communities, improve UX, and drive <br />
                                growth for your business with Veriff.
                            </div>
                            <div class="flex mt-10 mb-20 gap-10">
                                <button class="text-nowrap rounded-md bg-emerald-900 py-4 px-5 rounded-md text-white font-semibold">Commencer gratuitement</button>
                                <button class="text-nowrap rounded-md bg-white py-4 px-20 rounded-md text-emerald-900 font-bold">Contacter</button>
                            </div>
                            <div >
                                <h2 class="text-left text-4xl font-semibold mb-10">
                                    Make identity verification quick and easy by <br />
                                    helping genuine users get verified the first time, <br />
                                    while keeping fraudsters out
                                </h2>
                            </div>
                        </div>
                        <div class="">
                            <img src={femme} alt="" class="object-cover w-full h-full" />
                        </div>
                    </div>

                    {/* Grid section */}
                    <div class="card-accueil mx-20 py-5 bg-white">
                        <div class="flex items-center justify-center gap-10 grid-width">
                            <div class="flex items-center justify-center circle-orange-100 rounded-full">
                                <div class="circle-amber-100 rounded-full bg-emerald-300 flex items-center justify-center">
                                    <span class="icon text-white">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                </div>
                            </div>
                            <div class="text-left">
                                <h4 class="font-semibold text-md">Large Couverture en Afrique</h4>
                                <h6> The only AI-powered identity verification</h6>
                            </div>
                        </div>
                        <div class="flex items-center justify-center gap-10 grid-width ">
                            <div class="flex items-center justify-center circle-orange-100 rounded-full">
                                <div class="circle-amber-100 rounded-full bg-emerald-300 flex items-center justify-center">
                                    <span class="icon text-white">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                </div>
                            </div>
                            <div class="text-left">
                                <h4 class="font-semibold text-md">Adverse media screening</h4>
                                <h6>The only AI-powered identity verification</h6>
                            </div>
                        </div>
                        <div class="flex items-center justify-center gap-10 grid-width">
                            <div class="flex items-center justify-center circle-orange-100 rounded-full">
                                <div class="circle-amber-100 rounded-full bg-emerald-300 flex items-center justify-center">
                                    <span class="icon text-white">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                </div>
                            </div>
                            <div class="text-left">
                                <h4 class="font-semibold text-md">Enhanced due diligence (EDD) : </h4>
                                <h6>The only AI-powered identity verification</h6>
                            </div>
                        </div>
                        <div class="flex items-center justify-center gap-10 grid-width">
                            <div class="flex items-center justify-center circle-orange-100 rounded-full">
                                <div class="circle-amber-100 rounded-full bg-emerald-300 flex items-center justify-center">
                                    <span class="icon text-white">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                </div>
                            </div>
                            <div class="text-left">
                                <h4 class="font-semibold text-md">PEP Screening</h4>
                                <h6>The only AI-powered identity verification</h6>
                            </div>
                        </div>
                        <div class="flex items-center justify-center gap-10 grid-width">
                            <div class="flex items-center justify-center circle-orange-100 rounded-full">
                                <div class="circle-amber-100 rounded-full bg-emerald-300 flex items-center justify-center">
                                    <span class="icon text-white">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                </div>
                            </div>
                            <div class="text-left">
                                <h4 class="font-semibold text-md">Ongoing monitoring</h4>
                                <h6>The only AI-powered identity verification</h6>
                            </div>
                        </div>
                        <div class="flex items-center justify-center gap-10 grid-width">
                            <div class="flex items-center justify-center circle-orange-100 rounded-full">
                                <div class="circle-amber-100 rounded-full bg-emerald-300 flex items-center justify-center">
                                    <span class="icon text-white">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                </div>
                            </div>
                            <div class="text-left">
                                <h4 class="font-semibold text-md">Sanction screening</h4>
                                <h6>The only AI-powered identity verification</h6>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="flex flex-wrap items-center justify-center gap-20 mt-20 mx-20">

                        <div>
                            <div class="flex flex-col items-center justify-center">
                                <h2 class="text-emerald-900 text-left text-4xl mb-5 font-bold w-full">
                                    Prendre des selfies pour vérifier <br /> l'authenticité</h2>
                                <div class="text-left mb-10">
                                    Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                    avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                    vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                    inexistants et des frais de
                                </div>
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

                    <div class="flex flex-wrap-reverse items-center justify-center gap-20 mt-20 ">
                        <div class="flex items-center justify-center gap-20 image">
                            <div class="empty-card  bg-emerald-300">

                            </div>
                            <div class="empty-card bg-emerald-300">

                            </div>
                        </div>
                        <div class="">
                            <div class="flex flex-col items-center justify-center">
                                <h2 class="text-emerald-900 text-left text-4xl mb-5 font-bold">
                                    Prendre des photos de vos pieces <br /> d'identité
                                </h2>
                                <div class="text-left mb-10">
                                    Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                    avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                    vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                    inexistants et des frais de
                                </div>
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

                    <div class="flex flex-wrap items-center justify-center gap-20 mt-20 mx-20">

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

                </section>

                <section>
                    {/* Grid section */}
                    <div class="bg-emerald-900 rounded-3xl m-20 py-10">

                        <div class="text-emerald-100 text-5xl">
                            With Aibiometrics, anonymous strangers easyli <br />
                            become your trustworthy users
                        </div>

                        <div class="text-white text-md my-10">
                            Orchestrate identity verification checks, code-free. Place checks at any stage customer journey for top anti-fraud protection and pass rates
                            worldwide. Orgestrate identity verification
                        </div>

                        <div class="card-anonymously gap-10">
                            <div class="sub-card-anonymously flex flex-col items-center justify-center bg-emerald-300 rounded-2xl ">
                                <div class="text-5xl font-bold text-emerald-800 pb-5">
                                    6 secs
                                </div>
                                <div class="text-2xl font-semibold">
                                    temps moyen de <br /> validation
                                </div>
                            </div>

                            <div class="sub-card-anonymously flex flex-col items-center justify-center bg-emerald-300 rounded-2xl ">
                                <div class="text-5xl font-bold text-emerald-800 pb-5">
                                    95%
                                </div>
                                <div class="text-2xl font-semibold">
                                    Verified on the first try
                                </div>
                            </div>

                            <div class="sub-card-anonymously flex flex-col items-center justify-center bg-emerald-300 rounded-2xl ">
                                <div class="text-5xl font-bold text-emerald-800 pb-5">
                                    11.5K+
                                </div>
                                <div class="text-2xl font-semibold">
                                    Documents covered
                                </div>
                            </div>

                            <div class="sub-card-anonymously flex flex-col items-center justify-center bg-emerald-300 rounded-2xl ">
                                <div class="text-5xl font-bold text-emerald-800 pb-5">
                                    200 +
                                </div>
                                <div class="text-2xl font-semibold">
                                    pays couverts
                                </div>
                            </div>

                            <div class="sub-card-anonymously flex flex-col items-center justify-center bg-emerald-300 rounded-2xl ">
                                <div class="text-5xl font-bold text-emerald-800 pb-5">
                                    95%
                                </div>
                                <div class="text-2xl font-semibold">
                                    Verified on the first try
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-white">
                    <div class="text-left text-4xl font-bold text-emerald-900 ml-40">
                        <span class="">
                            Tous les outils qu'il vous faut pour proteger <br />
                            votre plateforme de la fraude
                        </span>
                    </div>
                    <div>
                        <ul class="flex mini-nav-items items-center justify-around bg-emerald-100 mx-40 rounded-full my-10">
                            <li class="text-xl py-5 mini-nav-item">
                                <a href="">Identity Verification</a>
                            </li>
                            <li class="text-xl py-5">
                                <a href="">Know Your Customer</a>
                            </li>
                            <li class="text-xl py-5">
                                <a href="">Biometric Verification</a>
                            </li>
                            <li class="text-xl py-5">
                                <a href="">Fraud Mitigation</a>
                            </li>
                        </ul>


                        <div class="flex flex-wrap items-center justify-around gap-20 pb-20">
                            <div class="flex items-center justiy-around gap-10">
                                <div class="">
                                    <img src={femme2} alt="" />
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
                    </div>
                </section>

                <section class="py-20 mx-20">
                    <div class="text-emerald-900 text-4xl font-bold text-left mb-10">
                        <span>Tous les outils qu'il vous faut pour </span> <span class="text-emerald-300" > proteger <br /> votre plateforme de la fraude</span>
                    </div>
                    <div class="text-left pb-20">
                        Ochestration identity verification checks, code-free. Place checks at any stage of the customer journey for top anti-fraud protection and pass rates worldwide. Orchestrate <br />
                        Ochestration identity verification checks, code-free. Place checks at any stage of the customer journey for top anti-fraud protection and pass rates worldwide.
                    </div>
                    <div class="big-circles">
                        <div class="flex flex-col items-center justify-center relative ">
                            <div class="flex items-center justify-center rounded-full big-circle">
                                <span>
                                    Sign Up
                                </span>
                            </div>
                            <div class="big-circle-detail">
                                Ochestration identity verification <br />
                                checks, code-free. Place checks at <br />
                                any stage of the customer journey for top anti-
                            </div>
                            <div class="absolute arrow-circle">
                                <img src={fleche} alt="" />
                            </div>
                        </div>

                        <div class="flex flex-col items-center justify-center relative">
                            <div class="flex items-center justify-center rounded-full big-circle">
                                <span>
                                    Vérification <br />
                                    de l'utilisateur
                                </span>
                            </div>
                            <div class="big-circle-detail">
                                Ochestration identity verification <br />
                                checks, code-free. Place checks at <br />
                                any stage of the customer journey for top anti-
                            </div>
                            <div class="absolute arrow-circle">
                                <img src={fleche} alt="" />
                            </div>
                        </div>

                        <div class="flex flex-col items-center justify-center relative">
                            <div class="flex items-center justify-center rounded-full big-circle">
                                <span>
                                    Vérification <br />
                                    AML
                                </span>
                            </div>
                            <div class="big-circle-detail">
                                Ochestration identity verification <br />
                                checks, code-free. Place checks at <br />
                                any stage of the customer journey for top anti-
                            </div>
                            <div class="absolute arrow-circle">
                                <img src={fleche} alt="" />
                            </div>
                        </div>

                        <div class="flex flex-col items-center justify-center relative">
                            <div class="flex items-center justify-center rounded-full big-circle">
                                <span>
                                    Connexion
                                </span>
                            </div>
                            <div class="big-circle-detail">
                                Ochestration identity verification <br />
                                checks, code-free. Place checks at <br />
                                any stage of the customer journey for top anti-
                            </div>
                            <div class="absolute arrow-circle">
                                <img src={fleche} alt="" />
                            </div>
                        </div>

                        <div class="flex flex-col items-center justify-center relative">
                            <div class="flex items-center justify-center rounded-full big-circle">
                                <span>
                                    Detection <br /> de fraudes
                                </span>
                            </div>
                            <div class="big-circle-detail">
                                Ochestration identity verification <br />
                                checks, code-free. Place checks at <br />
                                any stage of the customer journey for top anti-
                            </div>
                            <div class="absolute arrow-circle">
                                <img src={fleche} alt="" />
                            </div>
                        </div>

                        <div class="flex flex-col items-center justify-center relative">
                            <div class="flex items-center justify-center rounded-full big-circle">
                                <span>
                                    Transactions
                                </span>
                            </div>
                            <div class="big-circle-detail">
                                Ochestration identity verification <br />
                                checks, code-free. Place checks at <br />
                                any stage of the customer journey for top anti-
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <Footer />
                </footer>

            </div>
        </>
    )
}
