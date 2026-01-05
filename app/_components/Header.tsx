const Header = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="AutoTrip Logo"
            className="w-8 h-8 text-orange-600"
          />
          <span className="text-xl font-semibold text-orange-600">
            AutoTrip
          </span>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-gray-600 hover:text-orange-600 transition"
          >
            Features
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-orange-600 transition"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-orange-600 transition"
          >
            About
          </a>
        </nav>

        {/* Right: Button */}
        <button className="rounded-full bg-orange-600 px-5 py-2 text-sm font-medium text-white hover:bg-orange-700 transition">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
