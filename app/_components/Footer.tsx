const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-end lg:justify-between">
          {/* Left section */}
          <div>
            {/* Logo / Brand */}
            <div className="flex justify-center lg:justify-start">
              <span className="text-2xl font-bold text-orange-600">
                AutoTrip
              </span>
            </div>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              AutoTrip helps you plan smarter journeys with AI-powered
              itineraries, flights, hotels, and hidden gems — all in seconds.
            </p>
          </div>

          {/* Links */}
          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:text-gray-700/75"
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
