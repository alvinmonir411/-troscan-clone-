import Link from "next/link";

const Footer = () => {
  const sitemapLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const socialsLinks = [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
  ];

  const moreLinks = [
    { name: "License", href: "#" },
    { name: "Grainient", href: "#" },
    { name: "Inspirux", href: "#" },
    { name: "Store", href: "#" },
  ];

  return (
    <footer className="bg-[#8d493a] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-12">
      {/* Logo or Brand Name */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-100">
          Troscán
        </h2>
      </div>

      {/* Link Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center md:text-left mb-12">
        {/* Column 1 */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300 tracking-wider mb-4 uppercase">
            Sitemap
          </h3>
          <ul className="space-y-3">
            {sitemapLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-lg text-gray-100 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300 tracking-wider mb-4 uppercase">
            Socials
          </h3>
          <ul className="space-y-3">
            {socialsLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-lg text-gray-100 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300 tracking-wider mb-4 uppercase">
            More
          </h3>
          <ul className="space-y-3">
            {moreLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-lg text-gray-100 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Border & Copyright */}
      <div className="border-t border-white pt-6">
        <p className="text-center text-sm text-gray-200">
          © 2025, All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
