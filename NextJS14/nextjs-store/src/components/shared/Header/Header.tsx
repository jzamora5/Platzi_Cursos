import Link from "next/link";

import { validateAccessToken } from "app/utils/auth/validateAccessToken";

export const Header = async () => {
  const customer = await validateAccessToken();

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
        {customer?.firstName ? (
          <p>Hola! {customer.firstName}</p>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};
