import { FC } from "react";
import { LayoutProps } from "./interfaces";
import Head from "next/head";
import { useRouter } from "next/router";

const Layout: FC<LayoutProps> = ({
  dataTestId = "layout",
  children,
  title,
}) => {
  const router = useRouter();

  return (
    <div data-testid={dataTestId}>
      <Head>
        <link rel="icon" href="/logo-cbolivar-2.svg" sizes="any" />
        <title>{title}</title>
      </Head>
      <section
        className={`w-full ${router.pathname === "/login" ? "" : "p-4"}`}
      >
        {children}
      </section>
    </div>
  );
};

export default Layout;
