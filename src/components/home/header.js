"use client"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, SignalIcon, XMarkIcon } from '@heroicons/react/24/outline'
import 'tailwindcss/tailwind.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';


export default function Header({session}) {
  const {data: sessionClient} = useSession()
  console.log("session ", session);
  const navigation = [
    { name: 'Home', href: '#', current: true },
    // { name: 'Pricing', href: '#', current: false },
    
  ]
  const userNavigation = [
    { name: 'Sign out', href: '#'},
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
 
 
  const user = {
    name: session.user.name,
    email: session.user.email,
  }
  console.log("user ", user.imageUrl);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-red-500">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12"
                        src="/logo.svg"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-red-900 text-white'
                                : 'text-gray-300 hover:bg-red-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* <button
                        type="button"
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                      </button> */}

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-red-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-800">
                            <span className="sr-only">Open user menu</span>
                            {sessionClient?.user &&(
                              <>
                              {sessionClient.user.image &&(
                                <img className="h-8 w-8 rounded-full" src={sessionClient.user.image} alt="" />

                              )}
                              </>
                            )}
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {/* {userNavigation.map((item) => ( */}
                              {/* <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <button
                                    onClick={item.function}
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </button>
                                )}
                              </Menu.Item> */}
                              <Menu.Item key="signout">
                                {({ active }) => (
                                  <button
                                    onClick={()=>signOut({
                                      callbackUrl:"http://localhost:3000/signup"
                                    })}
                                    className={classNames(
                                      active ? 'bg-red-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    Sign Out
                                  </button>
                                )}
                              </Menu.Item>
                            {/* ))} */}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-red-800 p-2 text-red-400 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-red-900 text-white' : 'text-gray-200 hover:bg-red-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-red-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                    {sessionClient?.user &&(
                              <>
                              {sessionClient.user.image &&(
                                <img className="h-8 w-8 rounded-full" src={sessionClient.user.image} alt="" />

                              )}
                              </>
                            )}
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-200">{user.email}</div>
                    </div>
                    {/* <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
              
                    </button> */}
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    
                      <Disclosure.Button
                        key="Signout"
                        as="a"
                        onClick={()=>signOut({
                          callbackUrl:"http://localhost:3000/signup"
                        })}
                        className="block rounded-md px-3 py-2 text-base font-medium cursor-pointer text-gray-200 hover:bg-red-700 hover:text-white"
                      >
                        Sign Out
                      </Disclosure.Button>
                    
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Home</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  )
}