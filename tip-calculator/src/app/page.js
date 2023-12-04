import React from "react";
import Panel from "./components/Panel";
import Tip from "./components/TipForm";
export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5 lg:p-24">
      <h1 className="my-14 text-center text-3xl font-bold uppercase tracking-widest text-gray-300">
        Split that tip
      </h1>
      <Panel>
        <Tip />
      </Panel>
    </main>
  );
}
