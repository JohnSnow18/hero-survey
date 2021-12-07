import React from 'react'

function Home() {
  return (
    <div className="relative min-h-screen flex">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative">
          <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
          <div className="w-full  max-w-md z-10">
            <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Crea tu Encuesta gratuita....
            </div>
            <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
            Software para la creación de encuestas online de satisfacción del cliente, investigación de mercados, estudios de opinión, etc.
            </div>
          </div>
          {/*  <!---remove custom style--> */}
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full  xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Recibe respuestas rápido.
              </h2>

              <a className="nav-link" href="!#" id="navbarDropdownMenuLink" role="button">
          <img src="https://www.questionpro.com/qp_userimages/sub-3/3175908/portada-modelos-de-encuestas.png" alt="logo" width="1008" height="1000" className="img-home"/>
          </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

