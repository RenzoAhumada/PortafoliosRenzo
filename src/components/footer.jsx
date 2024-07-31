

export const Footer = () => {
  return (
    <footer className="text-gray-400 bg-blue-950 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-red-800 sm:py-2 sm:mt-0 mt-4">
          Gracias por visitar mi perfil, te invito a ver mis redes sociales.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-400" href='https://www.facebook.com/renzo.ahumada2?locale=es_LA'>
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-400" href='https://www.instagram.com/renzo.ahumada28/'>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-400" href='https://www.linkedin.com/in/renzo-nicolas-ahumada/'>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
          <a className="ml-3 text-gray-400" href='https://github.com/RenzoAhumada?tab=repositories'>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M12 .297c-6.6 0-12 5.4-12 12.025 0 5.325 3.438 9.846 8.205 11.44.6.113.82-.263.82-.588 0-.293-.01-1.07-.015-2.1-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.335-1.758-1.335-1.758-1.091-.745.083-.729.083-.729 1.205.083 1.838 1.237 1.838 1.237 1.07 1.834 2.808 1.305 3.492.998.108-.774.42-1.305.763-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.467-2.382 1.237-3.222-.124-.304-.537-1.527.117-3.18 0 0 1.01-.324 3.3 1.23a11.49 11.49 0 013.005-.403 11.53 11.53 0 013.005.403c2.287-1.555 3.297-1.23 3.297-1.23.656 1.653.243 2.875.12 3.18.773.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.623-5.48 5.92.43.37.814 1.096.814 2.207 0 1.59-.015 2.872-.015 3.262 0 .325.22.707.824.587C20.565 22.165 24 17.642 24 12.322 24 5.696 18.6.297 12 .297z"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
