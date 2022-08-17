import * as React from "react";
import { useRouter } from "next/router";
import { Github, Linkedin, List, Twitter, X } from "react-bootstrap-icons";
import classNames from "clsx";
import { useViewport } from "lib/hooks/useViewport";
import { IconLink } from "./nav/IconLink";
import { Link } from "./nav/Link";
import { ThemeSwitcher } from "./nav/ThemeSwitcher";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Blog",
    href: "/blog",
    types: ["/blog", "/blog/[slug]"],
  },
];

export function Nav() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const viewport = useViewport();

  React.useEffect(() => {
    if (viewport > 768) {
      setMenuOpen(false);
    }
  }, [viewport]);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [router]);

  function isCurrent(path: string | string[]) {
    const array = Array.isArray(path) ? path : [path];
    return array.includes(router.pathname);
  }

  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-center w-full px-5 h-15 bg-gray-50 dark:bg-blue"
      id="nav"
    >
      <nav className="flex items-center justify-between w-full h-20 max-w-4xl">
        <ul
          className={classNames(
            "h-full space-x-1 md:items-center",
            menuOpen
              ? "fixed w-full h-[22rem] top-0 left-0 z-50 flex items-center flex-col bg-gray-50 dark:bg-blue p-5 shadow-lg open-nav-animation"
              : "hidden md:flex relative",
          )}
        >
          {links.map((link) => (
            <li className="z-50" key={link.href} data-href={link.href}>
              <Link
                menuOpen={menuOpen}
                href={link.href}
                isActive={isCurrent(link.types ?? link.href)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center h-full space-x-1">
          <li>
            <IconLink aria-label="Linkedin profile" href="https://linkedin.com/in/casper-iversen">
              <Linkedin />
            </IconLink>
          </li>
          <li>
            <IconLink aria-label="GitHub profile" href="https://github.com/dev-caspertheghost">
              <Github />
            </IconLink>
          </li>
          <li>
            <IconLink aria-label="Twitter profile" href="https://twitter.com/casper124578">
              <Twitter />
            </IconLink>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
          className="z-50 flex flex-col w-8 md:hidden"
        >
          {menuOpen ? <X width={35} height={35} /> : <List width={30} height={30} />}
        </button>
      </nav>
    </header>
  );
}