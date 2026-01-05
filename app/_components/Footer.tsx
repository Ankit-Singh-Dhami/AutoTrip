const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:pt-8">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start">
              <svg
                className="h-8"
                viewBox="0 0 118 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG PATHS KEPT SAME */}
                <path d="M37.83 19.2047C..." fill="currentColor" />
              </svg>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              AutoTrip helps you plan smarter journeys with AI-powered
              itineraries, flights, hotels, and hidden gems — all in seconds.
            </p>
          </div>

          {/* Links */}
          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          © {new Date().getFullYear()} AutoTrip. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
