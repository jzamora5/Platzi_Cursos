import Link from "next/link";

import { cookies } from "next/headers";

export const Header = () => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("accessToken")?.value;

  return (
    <header>
      <nav>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/store">
            <li>Store</li>
          </Link>
          <Link href="/test">
            <li>Test</li>
          </Link>
        </ul>
        {token ? <p>Hola!</p> : <Link href="/login">Login</Link>}
      </nav>
    </header>
  );
};
