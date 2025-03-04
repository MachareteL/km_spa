import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import DriverHeader from "../../public/driver.jpg";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [mobileNavigationOpened, setMobileNavigationOpened] = useState(false);
  const closeMobileNavigation = () => setMobileNavigationOpened(false);

  return (
    <>
      <header className="container mx-auto flex w-full items-center justify-between py-4 px-6">
        <a href="#">
          <div className="w-full text-center text-lg font-extrabold sm:w-fit sm:text-left">
            <span className="text-violet-500">Unique</span>
            <span className="dark:text-slate-400">Fund</span>
          </div>
        </a>
        <nav className="hidden sm:block">
          <ul className="flex items-center space-x-2">
            <li className="group relative">
              <a
                className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="group relative">
              <a
                className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                href="#"
              >
                Solutions
              </a>
              <ul className="invisible absolute z-30 space-y-2 rounded-lg border border-slate-50 bg-white p-4 opacity-0 shadow-xl transition-opacity delay-75 ease-in-out group-hover:visible group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-900">
                <li>
                  <a
                    className="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                    href="#"
                  >
                    Business Line of Credit
                  </a>
                </li>
                <li>
                  <a
                    className="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                    href="#"
                  >
                    SBA Loan
                  </a>
                </li>
                <li>
                  <a
                    className="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                    href="#"
                  >
                    Revenue Based Financing
                  </a>
                </li>
                <li>
                  <a
                    className="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                    href="#"
                  >
                    Invoice Factoring
                  </a>
                </li>
              </ul>
            </li>
            <li className="group relative">
              <a
                className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                href="/about"
              >
                About
              </a>
            </li>
            <li className="group relative">
              <a
                className="block whitespace-nowrap px-2 py-2 text-sm text-slate-900 no-underline transition hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-50"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="block text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 sm:hidden"
          title="Open navigation menu"
          onClick={() => setMobileNavigationOpened(true)}
        >
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {mobileNavigationOpened && (
          <div className="fixed top-0 left-0 bg-slate-900 opacity-95 z-10 h-full w-full" />
        )}
        <nav
          className={`fixed -right-2/3 top-0 z-20 h-full w-2/3 transform overflow-y-auto bg-white py-4 text-base transition ease-out dark:bg-slate-900 sm:hidden ${
            mobileNavigationOpened && "-translate-x-full shadow-md"
          }`}
        >
          <ul className="flex flex-col space-y-2">
            <li className="text-right">
              <button
                className="px-6 py-2 text-slate-400 hover:text-slate-900 dark:hover:text-slate-50"
                onClick={closeMobileNavigation}
              >
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                  aria-description="Close navigation arrow menu"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14m-4 4l4-4m-4-4l4 4"
                  ></path>
                </svg>
              </button>
            </li>
            <li className="group relative w-full overflow-x-visible text-right">
              <a
                className="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="group relative w-full overflow-x-visible text-right">
              <a
                className="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                href="#"
              >
                Solutions
              </a>
              <ul className="h-0 space-y-2 overflow-y-hidden bg-slate-50 px-4 py-0 transition-all delay-75 ease-in-out group-hover:h-full group-hover:py-4 dark:bg-slate-800">
                <li>
                  <a
                    className="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                    href="#"
                  >
                    Business Line of Credit
                  </a>
                </li>
                <li>
                  <a
                    className="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                    href="#"
                  >
                    SBA Loan
                  </a>
                </li>
                <li>
                  <a
                    className="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                    href="#"
                  >
                    Revenue Based Financing
                  </a>
                </li>
                <li>
                  <a
                    className="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                    href="#"
                  >
                    Invoice Factoring
                  </a>
                </li>
              </ul>
            </li>
            <li className="group relative w-full overflow-x-visible text-right">
              <a
                className="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                href="/about"
              >
                About
              </a>
            </li>
            <li className="group relative w-full overflow-x-visible text-right">
              <a
                className="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-900 no-underline transition hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-50"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="container mx-auto flex flex-col items-center px-4 pb-36 py-12 sm:pt-24 sm:flex-row-reverse sm:px-12">
        <div className="mb-8 w-full sm:mb-0 sm:w-1/2 sm:pl-4 md:pl-16">
          <Image
            alt="Hanging out with friends"
            className="rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px]"
            src={DriverHeader}
          />
        </div>
        <div className="sm:mr-4 w-full text-center sm:w-1/2 sm:text-left">
          <h1 className="mb-6 text-3xl font-bold leading-tight dark:text-slate-50 md:text-4xl">
            Fale com um de nossos consultores!
          </h1>
          <p className="mb-2 leading-relaxed text-slate-700 dark:text-slate-400">
            Evite surpresas e proteja seu veículo com um seguro confiável e
            acessível. <br /> Cobertura completa, sem perfil de condutor!
          </p>
          <ul className="mb-8 flex flex-col items-center space-y-1 dark:text-slate-400 sm:items-start">
            <li className="flex items-end">
              <svg
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
                className="mr-2 text-orange-300"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m5 12l5 5L20 7"
                ></path>
              </svg>
              <span>Plano de cobertura personalizado!</span>
            </li>
            <li className="flex items-end">
              <svg
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
                className="mr-2 text-orange-300"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m5 12l5 5L20 7"
                ></path>
              </svg>
              <span>Assistência 24h para emergências!</span>
            </li>
            <li className="flex items-end">
              <svg
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
                className="mr-2 text-orange-300"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m5 12l5 5L20 7"
                ></path>
              </svg>
              <span>Cotação gratuita, sem compromisso!</span>
            </li>
            <li className="flex items-end">
              <svg
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
                className="mr-2 text-orange-300"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m5 12l5 5L20 7"
                ></path>
              </svg>
              <span>Indenização total - 100% da Fipe!</span>
            </li>
          </ul>
          <div className="flex flex-col space-y-3 md:flex-row md:space-x-2 md:space-y-0">
            <a target="_blank" href="https://wa.me//5519992179295?text=Olá!%20Gostaria%20de%20receber%20uma%20Cotação%20Gratuita" className="rounded-lg border-0 bg-slate-900 px-6 py-3 text-base text-white shadow-lg shadow-slate-300 transition hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300 dark:bg-orange-300 dark:text-black dark:shadow-sm dark:shadow-orange-300 dark:hover:bg-orange-400 sm:py-2">
              <svg
                fill="#000000"
                viewBox="0 0 256 256"
                id="svg-whatsapp-icon"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
                strokeWidth="4"
                width="1.7em"
                className="inline-flex mr-2"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M128.00049,28A100.02594,100.02594,0,0,0,41.11475,177.53908l-9.0044,31.51661a11.99971,11.99971,0,0,0,14.835,14.834l31.5166-9.00391A100.00677,100.00677,0,1,0,128.00049,28Zm0,192a91.87082,91.87082,0,0,1-46.95264-12.86719,3.99494,3.99494,0,0,0-3.14355-.4082l-33.15723,9.47363a3.99979,3.99979,0,0,1-4.94434-4.94531l9.47266-33.15625a4.00111,4.00111,0,0,0-.4082-3.14355A92.01077,92.01077,0,1,1,128.00049,220Zm50.51123-73.457-20.45947-11.69141a12.01054,12.01054,0,0,0-12.12745.12891l-13.80664,8.28418a44.04183,44.04183,0,0,1-19.38232-19.38281l8.28369-13.80664a12.0108,12.0108,0,0,0,.12891-12.127l-11.69092-20.46A10.91584,10.91584,0,0,0,100,72a32.00811,32.00811,0,0,0-32,31.88086A84.001,84.001,0,0,0,151.999,188h.12012A32.00842,32.00842,0,0,0,184,156,10.913,10.913,0,0,0,178.51172,146.543ZM152.10791,180h-.1084A75.99972,75.99972,0,0,1,76,103.8926,23.997,23.997,0,0,1,100,80a2.89975,2.89975,0,0,1,2.51172,1.457L114.20264,101.918a4.00418,4.00418,0,0,1-.043,4.042l-9.38916,15.64844a3.9987,3.9987,0,0,0-.21826,3.69824,52.04112,52.04112,0,0,0,26.1416,26.1416,3.99707,3.99707,0,0,0,3.69873-.21875L150.04,141.84084a4.006,4.006,0,0,1,4.043-.04394l20.46045,11.69238A2.89712,2.89712,0,0,1,176,156,23.99725,23.99725,0,0,1,152.10791,180Z"></path>{" "}
                </g>
              </svg>
              Fale conosco
            </a>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-8 py-28 sm:px-12">
        <h1 className="sm:mb-18 mb-24 w-full text-center text-4xl font-extrabold dark:text-slate-50 sm:mx-auto sm:w-4/5">
          We provide {" "}
          <span className="text-violet-500">variety of choices {" "}</span>
          for any kind of situations
        </h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex cursor-pointer flex-col items-center justify-start rounded-lg bg-white py-5 px-6 text-center text-slate-800 shadow-lg shadow-slate-200 transition dark:bg-slate-700 dark:text-slate-200 dark:shadow-slate-700">
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              className="h-8 w-8"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm0 2h18M7 15h.01M11 15h2"
              ></path>
            </svg>
            <div className="mt-3 text-sm font-semibold">
              Business Line of Credit
            </div>
          </div>
          <div className="flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800">
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              className="h-8 w-8"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 21h18M3 10h18M5 6l7-3l7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3"
              ></path>
            </svg>
            <div className="mt-3 text-sm font-semibold">SBA Loan</div>
          </div>
          <div className="flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800">
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              className="h-8 w-8"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path>
                <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm5 6h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H10m2 0v1m0-8v1"></path>
              </g>
            </svg>
            <div className="mt-3 text-sm font-semibold">
              Revenue Based Financing
            </div>
          </div>
          <div className="flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800">
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              className="h-8 w-8"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2zM9 7h1m-1 6h6m-2 4h2"></path>
              </g>
            </svg>
            <div className="mt-3 text-sm font-semibold">Invoice Factoring</div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 items-center gap-4 rounded-lg bg-violet-500 py-12 px-14 md:grid-cols-2">
          <div className="text-center md:text-left">
            <div className="text-4xl font-extrabold text-white">
              Business Line
              <br />
              of Credit
            </div>
            <div className="mt-2 text-sm text-violet-100">
              Pay interest only on what you use
            </div>
            <ul className="mt-6 mb-8 text-sm text-violet-100 md:mb-0">
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                  className="mr-3"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m5 12l5 5L20 7"
                  ></path>
                </svg>
                High credit limit
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                  className="mr-3"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m5 12l5 5L20 7"
                  ></path>
                </svg>
                Fast disbursement, anytime
              </li>
            </ul>
          </div>
          <form className="flex flex-col md:ml-8">
            <input
              className="mb-4 rounded-md px-4 py-3 font-light"
              min="0"
              placeholder="How much do you need?"
              type="number"
            />
            <button
              className="flex items-center justify-center rounded-md bg-violet-900 px-4 py-3 font-semibold text-white shadow-md shadow-violet-700 transition hover:bg-slate-900"
              type="submit"
            >
              <svg
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
                className="mr-2"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
                ></path>
              </svg>
              Find the best limit
            </button>
          </form>
        </div>
      </section>
      <section className="container mx-auto px-12 py-28">
        <h1 className="mb-24 w-full text-center text-4xl font-extrabold dark:text-slate-50 md:mx-auto md:mb-24 md:w-4/5">
          Our
          <span className="text-violet-500">happy customers</span>
        </h1>
        <div className="flex flex-col space-y-6 md:flex-row md:space-y-0">
          <div className="flex w-full flex-col justify-between rounded-lg bg-white py-8 px-6 text-center text-slate-800 shadow-lg shadow-slate-200 transition dark:bg-slate-800 dark:shadow-slate-800">
            <div className="w-full text-center text-sm">
              <img
                alt="Hanging out with friends"
                className="mx-auto mb-8 h-20 w-20"
                src="/images/avatar-1.png"
              />
              <p className="mb-6 leading-relaxed text-slate-500 dark:text-slate-400">
                They helped me to quickly and easily compare my options, and I
                was able to secure the financing I needed to grow my business.
              </p>
              <div className="font-semibold text-slate-600">John Doe</div>
              <div className="text-xs text-slate-400">Crispy Creamy Crepes</div>
            </div>
          </div>
          <div className="z-10 flex w-full flex-col justify-between rounded-lg bg-white py-8 px-6 text-center text-slate-800 shadow-lg shadow-slate-200 transition dark:bg-slate-800 dark:shadow-slate-800 md:scale-y-110 md:scale-x-110">
            <div className="w-full text-center text-sm">
              <img
                alt="Hanging out with friends"
                className="mx-auto mb-8 h-20 w-20"
                src="/images/avatar-1.png"
              />
              <p className="mb-6 leading-relaxed text-slate-500 dark:text-slate-400">
                This team was knowledgeable and helpful, walking me through the
                process and finding a financing solution that fit my business
                perfectly.
              </p>
              <div className="font-semibold text-slate-600">Peter Smith</div>
              <div className="text-xs text-slate-400">Chick Chicken</div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-between rounded-lg bg-white py-8 px-6 text-center text-slate-800 shadow-lg shadow-slate-200 transition dark:bg-slate-800 dark:shadow-slate-800">
            <div className="w-full text-center text-sm">
              <img
                alt="Hanging out with friends"
                className="mx-auto mb-8 h-20 w-20"
                src="/images/avatar-1.png"
              />
              <p className="mb-6 leading-relaxed text-slate-500 dark:text-slate-400">
                Thanks to their guidance, I was able to secure the financing I
                needed to get my business off the ground.
              </p>
              <div className="font-semibold text-slate-600">Jane Brown</div>
              <div className="text-xs text-slate-400">Pizzy Pizza</div>
            </div>
          </div>
        </div>
      </section>
      <footer className="mt-28 bg-slate-50 dark:bg-black">
        <div className="container mx-auto flex flex-col items-start space-y-12 px-8 pb-8 pt-12 md:flex-row md:space-y-0 md:space-x-12 md:px-12">
          <div className="flex w-full flex-col space-y-4 text-center md:w-2/5 md:text-left">
            <div className="w-full text-lg font-extrabold md:w-fit md:text-left">
              <span className="text-violet-500">Unique</span>
              <span className="dark:text-slate-400">Fund</span>
            </div>
            <p className="text-sm text-slate-600">
              UniqueFund provides access to fast and reliable financing
              solutions for SMEs.
            </p>
          </div>
          <div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
            <div className="text-sm font-semibold">Company</div>
            <ul className="text-sm">
              <li className="pt-3">
                <a
                  className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  About
                </a>
              </li>
              <li className="pt-3">
                <a
                  className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Terms of Service
                </a>
              </li>
              <li className="pt-3">
                <a
                  className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="pt-3">
                <a
                  className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
            <div className="text-sm font-semibold">Solutions</div>
            <ul className="text-sm">
              <li className="pt-3">
                <a
                  className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Business Line of Credit
                </a>
              </li>
              <li className="pt-3">
                <a
                  className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  SBA Loan
                </a>
              </li>
              <li className="pt-3">
                <a
                  className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Revenue Based Financing
                </a>
              </li>
              <li className="pt-3">
                <a
                  className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Invoice Factoring
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
            <div className="text-sm font-semibold text-slate-600">
              Partnership
            </div>
            <ul className="text-sm">
              <li className="pt-3">
                <a
                  className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Loan Partner
                </a>
              </li>
              <li className="pt-3">
                <a
                  className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Affiliate
                </a>
              </li>
              <li className="pt-3">
                <a
                  className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Brand Guideline
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto border-t border-slate-200 p-8 text-center text-sm text-slate-600 dark:border-slate-900 md:flex-row md:px-12">
          © 2023 UniqueFund. All rights reserved.
        </div>
      </footer>
    </>
  );
}
