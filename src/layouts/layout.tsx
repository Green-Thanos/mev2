import { useRouter } from "next/router";
import * as React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  React.useEffect(() => {
    const hash = window.location.hash;
    const includesHash =
      router.pathname === "/blog/[slug]"
        ? !!hash
        : router.pathname === "/" && ["#projects", "#contact"].includes(hash);

    if (!includesHash) {
      window.scrollTo({ top: 1, behavior: "smooth" });
    }
  }, [router.pathname]);

  return (
    <div
      // 5rem = Navbar height, 12rem = footer height
      style={{ minHeight: "calc(100vh - 5rem - 12rem)" }}
      className="flex justify-center w-full px-5 pt-5"
    >
      <div className="fixed left-0 hidden top-20" id="top" />
      <main className="w-full max-w-4xl">{children}</main>
    </div>
  );
};
