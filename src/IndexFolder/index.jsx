import React from 'react'
import darknet from '../images/darknet.jpg'

export default function Index() {
    return (
        <div>
            <div class="md:flex">
                <div class="md:flex-shrink-1 md:py-2   bg-midnight">
                    <img class="rounded-lg md:w-56" src={darknet} alt="Woman paying for a purchase" />
                </div>
                <div class="mt-4 md:mt-0 md:ml-6 lg:bg-bubble-gum">
                    <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">
                        Marketing
                    </div>
                    <a href="/get-started" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">
                        Finding customers for your new business
                    </a>
                    <p class="mt-2 text-gray-600">
                        Getting a new business off the ground is a lot of hard work.
                        Here are five ideas you can use to find your first customers.
                    </p>
                </div>
            </div>
            <div class="max-w-md mx-auto my-5 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                    <div class="md:shrink-0">
                        <img class="h-48 w-full object-cover md:h-full md:w-48" src={darknet} alt="Modern building architecture" />
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                        <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                    </div>
                </div>
            </div>
           
        </div>

    )
}
