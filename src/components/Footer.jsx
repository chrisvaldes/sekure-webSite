import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import femme1 from "../images/femme1.png";

export default function Footer() {
    return (
        <>
            <section class="section-footer">
                <div>
                    <div class="flex flex-wrap-reverse pb-10 gap-20 mx-20">
                        <div class="flex flex-col aligns-center justify-center">
                            <div class="flex mt-20 text-emerald-900 text-5xl font-bold text-left">
                                Notre API Robuste supportera <br />
                                votre business et son <br />
                                expansion sans problèmes
                            </div>
                            <div class="text-white text-left  my-10">
                                We are equipped to help you level up your KYC/AML compliance stack. Our team is ready to <br />
                                understand your needs, answer questions, and set up your account.  We are equipped to help you <br />
                                level up your KYC/AML compliance stack. Our team is ready to <br />
                                understand your needs, answer <br />
                                questions, and set up your account
                            </div>
                            <div class="">
                                <div class="flex items-flex justify-center gap-10 ">
                                    <button class="bg-emerald-900 px-5 py-3 rounded-lg text-white flex items-center justify-center gap-5">
                                        <span class="text-nowrap" >Commencer Gratuitement</span>
                                        <div class="btn-circle rounded-full bg-white flex items-center justify-center">
                                            <span class="icon text-emerald-300">
                                                <FontAwesomeIcon icon={faArrowRight} />
                                            </span>
                                        </div>
                                    </button>
                                    <button class=" bg-white  px-10 py-3 rounded-lg text-white flex items-center justify-between gap-5">
                                        <span class="text-emerald-900 text-nowrap">Nous Contacter</span>
                                        <div class="btn-circle rounded-full bg-emerald-900 flex items-center justify-center">
                                            <span class="icon text-emerald-300">
                                                <FontAwesomeIcon icon={faArrowRight} />
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <img src={femme1} alt="" className="object-cover " />
                        </div>
                    </div>
                    <div class="grid-footer">
                        <div class="flex flex-col text-left">
                            <span class="text-xl font-bold">Explorer</span>
                            <span class="mt-2">Documentation</span>
                            <span class="mt-2">Dashboard</span>
                            <span class="mt-2">Confidentialité</span>
                            <span class="mt-2">Termes</span>
                        </div>
                        <div class="flex flex-col text-left">
                            <span class="text-xl font-bold">Explorer</span>
                            <span class="mt-2">Accueil</span>
                            <span class="mt-2">A Propos</span>
                            <span class="mt-2">Contact</span>
                            <span class="mt-2">FAQ</span>
                        </div>
                        <div class="flex flex-col text-left">
                            <span class="text-xl font-bold">KYC</span>
                            <span class="mt-2">Comment ça marche</span>
                            <span class="mt-2">Interface KYC</span>
                            <span class="mt-2">Options KYC</span>
                            <span class="mt-2">Avantages</span>
                        </div>
                        <div class="flex flex-col text-left">
                            <span class="text-xl font-bold">AML</span>
                            <span class="mt-2">Comment ça marche</span>
                            <span class="mt-2">Process AML</span>
                            <span class="mt-2">Requis</span>
                            <span class="mt-2">Avantages</span>
                        </div>
                        <div class="flex flex-col text-left">
                            <span class="text-xl font-bold">Commencer</span>
                            <span class="mt-2">Pricing</span>
                            <span class="mt-2">Se Connecter</span>
                            <span class="mt-2">Voir Demo</span>
                        </div>
                        <div>
                            <form action="" class="flex flex-col text-left">
                                <span class="text-4xl font-bold py-5">AIBIOMETRICS</span>
                                <textarea name="" id="" placeholder='Recevoir Newsletter' class="p-2 rounded-lg"></textarea>
                                <button class=" bg-emerald-900  px-10 py-3 my-5 rounded-lg text-white flex items-center justify-between gap-5">
                                    <span class=" tex-white text-nowrap">Nous Contacter</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
