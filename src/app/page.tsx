import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="p-10 flex justify-center">
      <section className="">
        <h1 className="text-xl text-bold">Chatbot Demo - Aaron K. Altman</h1>
        <p className="mt-10 text-base leading-8">
          This is a Chatbot Demo AI Notes App that has intelligence. Built with
          Open AI, Pinecone, NextJS, React, shadcn ui, clerk, and more.
        </p>
        <Button size="lg" asChild>
          <Link className="mt-10" href="/notes">
            Open the Notes App
          </Link>
        </Button>
      </section>
    </main>
  );
}
