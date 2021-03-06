import React, { useState } from "react"
import Transition from "../../components/Transition/Transition"
import { Outline } from "../../components/Icons/Icons"
import Footer from "../../components/Footer/Footer"

export default function Layout({ children, title }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [hideSidebarMenu, setHideSidebarMenu] = useState(true)

  const openSidebar = () => {
    setIsSidebarOpen(true)
    setHideSidebarMenu(false)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const hideSidebar = () => {
    setHideSidebarMenu(true)
  }

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Off-canvas menu for mobile */}
      <div className={`${hideSidebarMenu ? "hidden " : ""}md:hidden`}>
        <div className="fixed inset-0 z-40 flex">
          <Transition
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            show={isSidebarOpen}
            onExited={hideSidebar}
          >
            <div className="fixed inset-0" onClick={closeSidebar}>
              <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>
          </Transition>

          <Transition
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            show={isSidebarOpen}
          >
            <div className="relative flex flex-col flex-1 w-full max-w-xs bg-white">
              <div className="absolute top-0 right-0 p-1 -mr-14">
                {isSidebarOpen && (
                  <button
                    className="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600"
                    aria-label="Close sidebar"
                    onClick={closeSidebar}
                  >
                    <Outline.X className="w-6 h-6 text-white" />
                  </button>
                )}
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <img className="w-auto h-8" src="/logo.svg" alt="Workflow" />
                </div>
                <nav className="px-2 mt-5">
                  <a
                    href="#"
                    className="flex items-center px-2 py-2 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out bg-gray-100 rounded-md group focus:outline-none focus:bg-gray-200"
                  >
                    <Outline.Archive className="w-6 h-6 mr-4 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-600" />
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                  >
                    <Outline.Archive className="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" />
                    People
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                  >
                    <Outline.Archive className="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" />
                    Projects
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                  >
                    <Outline.Archive className="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" />
                    Calendar
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                  >
                    <Outline.Archive className="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" />
                    Documents
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-2 py-2 mt-1 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100"
                  >
                    <Outline.Archive className="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" />
                    Reports
                  </a>
                </nav>
              </div>
            </div>
          </Transition>

          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-white border-r border-gray-200">
          <div className="flex flex-col flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img className="w-auto h-8" src="/logo.svg" alt="Workflow" />
            </div>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <nav className="flex-1 px-2 mt-5 bg-white">
              <a
                href="#"
                className="flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out bg-gray-100 rounded-md group hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200"
              >
                <Outline.Archive className="w-6 h-6 mr-3 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-600" />
                Dashboard
              </a>
              <a
                href="#"
                className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100"
              >
                <Outline.Archive className="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" />
                Team
              </a>
              <a
                href="#"
                className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100"
              >
                <Outline.Archive className="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" />
                Projects
              </a>
              <a
                href="#"
                className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100"
              >
                <Outline.Archive className="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" />
                Calendar
              </a>
              <a
                href="#"
                className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100"
              >
                <Outline.Archive className="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" />
                Documents
              </a>
              <a
                href="#"
                className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100"
              >
                <Outline.Archive className="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" />
                Reports
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <div className="pt-1 pl-1 md:hidden sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
            aria-label="Open sidebar"
            onClick={openSidebar}
          >
            <Outline.Menu className="w-6 h-6" />
          </button>
        </div>
        <main
          className="relative z-0 flex-1 pt-2 pb-6 overflow-y-auto focus:outline-none md:py-6"
          tabindex="0"
        >
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          </div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            {/* Replace with your content */}
            <div className="py-4">{children}</div>
            {/* /End replace */}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
