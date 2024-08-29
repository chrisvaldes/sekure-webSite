import React, { useState } from 'react';

const sizes = {
  md: 'px-4 py-2 rounded-md text-base',
  lg: 'px-5 py-8 rounded-lg text-lg',
};

const colors = {
  indigo: 'bg-indigo-500 hover:bg-indigo-600 text-white',
  cyan: 'active:bg-cyan-900 bg-cyan-600  text-white focus:ring-2 ring-indigo-800 ' +
    'focus:outline-none ',
};

export default function Button({ color, size, children }) {

  const [status, setStatus] = useState("false")

  const handleSubmit = () => {
    setStatus(false)
    setTimeout(() => {
      console.log("wait for 5s")
      setStatus(true)
    }, 5000)
    console.log("over 5s")
    
  }

  return (
    <>
      <button type="button" className={`font-bold ${colors[color]} ${sizes[size]}`}>
        {children}
      </button>

      {
        status ? (
          <button onClick={handleSubmit} type="button" class="flex bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        )
          : (
            <button type="button" class="flex bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <svg class="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </button>
          )
      }

      <button type="button" class=" border relative inline-flex items-center px-4 py-2 bg-white text-sky-500 font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
        Processing...
        <span class="absolute -top-3.5 -right-3.5 m-2 flex h-3 w-3">
          <svg class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400"></svg>
          <svg class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></svg>
        </span>
      </button>

      <div class="relative ...">
        <div class="absolute pointer-events-auto ...">
          <svg class="absolute text-slate-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
          </svg>
        </div>
        <input type="text" placeholder="Search" class="..." />
      </div>

      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-200 h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-200 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                <div class="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <form class="mb-5">
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Username</span>
          {/* <!-- Using form state modifiers, the classes can be identical for every input --> */}
          <input type="text" value="tbone" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
             
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "/>
        </label>
        {/* <!-- ... --> */}
      </form>


    </>
  );
}