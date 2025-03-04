import Image from "next/image";
import DriverHeader from "../../public/driver.jpg";
import LucasProfile from "../../public/Lucas_profile_picture.jpg";
import NoProfilePicture from "../../public/No_profile_picture.jpeg";
import JuliaProfilePicture from "../../public/Julia_profile_picture.jpg";
import FlatLogo from "../../public/logo-site-1.png";
import RoundedLogo from "../../public/logo_km-protecao-veicular.png";
import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";

export default function Home() {
  const [mobileNavigationOpened, setMobileNavigationOpened] = useState(false);
  const closeMobileNavigation = () => setMobileNavigationOpened(false);

  function sendGAWhatsappEvent() {
    console.log("sending GA event");
    sendGAEvent({event: 'whatsapp_cta_clicked', value: new Date().toLocaleDateString()});
  }

  return (
    <>
      <header className="container mx-auto flex w-full items-center justify-between py-4 px-6">
        <div className="w-full text-center text-lg font-extrabold sm:w-fit sm:text-left">
          <Image
            src={FlatLogo}
            alt="KM Proteção Veicular Logo"
            className="bg-white w-48 rounded-md px-4"
          />
        </div>
        <nav className="hidden sm:block">
          <ul className="flex items-center space-x-2">
            <li className="group relative">
              <a
                className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                href="#beneficios"
              >
                Benefícios
              </a>
            </li>
            <li className="group relative">
              <a
                className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                href="#relatos"
              >
                Relatos
              </a>
            </li>
            <li className="group relative">
              <a
                className="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                href="#quem-somos"
              >
                Quem Somos
              </a>
            </li>
            <li className="group relative">
              <a
                className="block whitespace-nowrap px-2 py-2 text-sm text-slate-900 no-underline transition hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-50"
                href="https://api.whatsapp.com/send?phone=5519992179295&text=Ol%C3%A1!%20Gostaria%20de%20receber%20uma%20Cota%C3%A7%C3%A3o%20Gratuita"
              >
                Contato
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
                href="#beneficios"
                onClick={closeMobileNavigation}
              >
                Benefícios
              </a>
            </li>
            <li className="group relative w-full overflow-x-visible text-right">
              <a
                className="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                href="#relatos"
                onClick={closeMobileNavigation}
              >
                Relatos
              </a>
            </li>
            <li className="group relative w-full overflow-x-visible text-right">
              <a
                className="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                href="#quem-somos"
                onClick={closeMobileNavigation}
              >
                Quem somos
              </a>
            </li>
            <li className="group relative w-full overflow-x-visible text-right">
              <a
                className="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-900 no-underline transition hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-50"
                href="https://api.whatsapp.com/send?phone=5519992179295&text=Ol%C3%A1!%20Gostaria%20de%20receber%20uma%20Cota%C3%A7%C3%A3o%20Gratuita"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="container mx-auto flex flex-col items-center px-4 pb-28 py-12 sm:pt-24 sm:flex-row-reverse sm:px-12">
        <div className="mb-8 w-full sm:mb-0 sm:w-1/2 sm:pl-4 md:pl-16">
          <Image
            alt="Hanging out with friends"
            className="rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px]"
            priority
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
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5519992179295&text=Ol%C3%A1!%20Gostaria%20de%20receber%20uma%20Cota%C3%A7%C3%A3o%20Gratuita"
              className="rounded-lg border-0 bg-slate-900 px-6 py-3 text-base text-white shadow-lg shadow-slate-300 transition hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300 dark:bg-orange-300 dark:text-black dark:shadow-sm dark:shadow-orange-300 dark:hover:bg-orange-400 sm:py-2"
              onClick={sendGAWhatsappEvent}
            >
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
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
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
      <section
        id="beneficios"
        className="container mx-auto px-8 py-14 sm:px-12"
      >
        <h1 className="sm:mb-18 mb-12 w-full text-center text-4xl font-extrabold dark:text-slate-50 sm:mx-auto sm:w-4/5">
          Benefícios 24h <span className="text-violet-500">do associado </span>
          KM
        </h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition  dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700">
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
              Adesão sem perfil de condutor e consulta de crédito
            </div>
          </div>
          <div className="flex flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition  dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700">
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
            <div className="mt-3 text-sm font-semibold">
              Assistência em todo o país - Guincho 24h e Carro Reserva
            </div>
          </div>
          <div className="flex flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition  dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700">
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
              Proteção para terceiros - Cobertura 100% da Tabela Fipe
            </div>
          </div>
          <div className="flex flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition  dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700">
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
            <div className="mt-3 text-sm font-semibold">
              Cobertura completa - Roubo, Furto, Colisão e Fenômenos da Natureza
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 items-center gap-4 rounded-lg bg-violet-500 py-12 px-8 md:grid-cols-2">
          <div className="text-center md:text-left">
            <div className="text-4xl font-extrabold text-white">
              Torne-se um associado
            </div>
            <div className="mt-2 text-sm text-violet-100">
              Proteja seu veículo com um seguro confiável e acessível.
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
                Preço justo
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
                Cancele a qualquer momento
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
                Suporte 24h por dia, 7 dias por semana
              </li>
            </ul>
          </div>
          <form className="flex flex-col md:ml-8">
            <a
              href="https://api.whatsapp.com/send?phone=5519992179295&text=Ol%C3%A1!%20Gostaria%20de%20receber%20uma%20Cota%C3%A7%C3%A3o%20Gratuita"
              className="rounded-md bg-violet-900 px-4 py-3 font-semibold text-white shadow-md shadow-violet-700 transition hover:bg-slate-900 text-center"
              type="submit"
            >
              Fale diretamente com um de nossos consultores
            </a>
          </form>
        </div>
      </section>
      <section id="relatos" className="container mx-auto px-12 py-14">
        <h1 className="mb-24 w-full text-center text-4xl font-extrabold dark:text-slate-50 md:mx-auto md:mb-24 md:w-4/5">
          Relatos {""}
          <span className="text-violet-500">dos nossos clientes</span>
        </h1>
        <div className="flex flex-col space-y-6 md:flex-row md:space-y-0">
          <div className="flex w-full flex-col justify-between rounded-lg bg-white py-8 px-6 text-center text-slate-800 shadow-lg shadow-slate-200 transition dark:bg-slate-800 dark:shadow-slate-800">
            <div className="w-full text-center text-sm">
              <Image
                alt="Hanging out with friends"
                className="mx-auto mb-8 h-20 w-20 rounded-full"
                src={LucasProfile}
              />
              <p className="mb-6 leading-relaxed text-slate-500 dark:text-slate-400">
                Serviço bem bacana. Sempre falo com pessoas de verdade, sem
                aquele atendimento robótico. Me ajudam quando preciso, quando
                preciso o consultor também ajuda indicando onde e com quem
                preciso falar. Recomendo.
              </p>
              <div className="font-semibold text-slate-600">
                Lucas Macharete
              </div>
              <div className="text-xs text-slate-400">
                Associado KM - Avaliação Whatsapp
              </div>
            </div>
          </div>
          <div className="z-10 flex w-full flex-col justify-between rounded-lg bg-white py-8 px-6 text-center text-slate-800 shadow-lg shadow-slate-200 transition dark:bg-slate-800 dark:shadow-slate-800 md:scale-y-110 md:scale-x-110">
            <div className="w-full text-center text-sm">
              <Image
                alt="Hanging out with friends"
                className="mx-auto mb-8 h-20 w-20 rounded-full"
                src={JuliaProfilePicture}
              />
              <p className="mb-6 leading-relaxed text-slate-500 dark:text-slate-400">
                Atendimento Excelente! Foi bastante fácil fazer adesão, pelo
                celular mesmo enviei as fotos para o sistema. Quando precisei de
                ajuda foram muito prestativos também
              </p>
              <div className="font-semibold text-slate-600">Julia Castro</div>
              <div className="text-xs text-slate-400">
                Associada KM - Avaliação Whatsapp
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-between rounded-lg bg-white py-8 px-6 text-center text-slate-800 shadow-lg shadow-slate-200 transition dark:bg-slate-800 dark:shadow-slate-800">
            <div className="w-full text-center text-sm">
              <Image
                alt="Hanging out with friends"
                className="mx-auto mb-8 h-20 w-20 rounded-full"
                src={NoProfilePicture}
              />
              <p className="mb-6 leading-relaxed text-slate-500 dark:text-slate-400">
                Pra mim está sendo muito bom, precise do serviço de guincho, e
                fui prontamente atendido sem nenhum problema.
              </p>
              <div className="font-semibold text-slate-600">
                Gilmar Brendariol
              </div>
              <div className="text-xs text-slate-400">
                Associado KM - Avalição Google
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="quem-somos" className="mt-28 bg-slate-50 dark:bg-black">
        <div className="container mx-auto flex flex-col items-start space-y-12 px-8 pb-8 pt-12 md:flex-row md:space-y-0 md:space-x-12 md:px-12">
          <div className="flex w-full flex-col space-y-4 text-center md:w-2/5 md:text-left">
            <div className="w-full text-lg font-extrabold md:w-fit md:text-left">
              <Image
                src={RoundedLogo}
                alt="KM Proteção Veicular Logo"
                className="bg-white w-48 rounded-full p-2 m-auto"
              />
            </div>
          </div>
          <div className="w-full text-center text-slate-400 md:text-left">
            <div className="text-lg font-semibold mb-4">Quem somos?</div>
            <span className="text-slate-300 text-sm">
              <p>
                A KM Proteção Veicular nasceu com o propósito de oferecer segurança e tranquilidade aos seus
                associados.
                <br />
                <br />
                Com um modelo de proteção acessível e sem
                burocracia, a empresa se consolidou no mercado ao proporcionar
                um serviço confiável e eficiente. Com o crescimento e a
                confiança dos clientes, a KM expandiu sua atuação e agora conta
                com uma filial em Sumaré, São Paulo, garantindo suporte e
                atendimento personalizado na região.
                <br />
                <br />
                Temos um atendimento online rápido e prestativo contudo visando a transparência e a confiança temos escritórios fisícos e visitas presenciais, conforme a necessidade do cliente.
                Estamos sempre disponíveis para oferecer a melhor experiência em
                proteção veicular.
                <br />
                <br />
                Nosso compromisso vai além da proteção de
                veículos; buscamos entregar um atendimento humanizado e
                transparente, sempre priorizando a satisfação e a segurança de
                nossos associados.
                <br />
                <br />
              </p>
              <p>
                Oferecemos transparência, comodidade e agilidade na utilização
                dos produtos e serviços disponibilizados para nossos
                participantes. Atendemos de forma diferenciada, por meio de um
                serviço exclusivo que supere as expectativas, garantindo custos
                competitivos e alto padrão de excelência nos serviços prestados.
              </p>
            </span>
          </div>
        </div>
        <div className="container mx-auto border-t border-slate-200 p-8 text-center text-sm text-slate-600 dark:border-slate-900 md:flex-row md:px-12">
          © {new Date().getFullYear()} KM Seguros. Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
}
