import React from "react";
import NavBar from "./_components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <NavBar />
      <section>{children}</section>
    </main>
  );
}
