import Link from "next/link";

import Logo from "./logo";

function MainNavigation() {
  return (
    <header>
      <Link href="/">
        {/* Remember that you must pass text inside Link, so we are wrapping <Logo /> inside an anchor tag */}
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">All Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
