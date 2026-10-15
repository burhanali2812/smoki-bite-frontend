"use client";
import { useState } from "react";
import Image from "next/image";
import { site } from "@/lib/data";

const links = [["#about", "About"], ["#menu", "Menu"], ["#order", "Order"], ["#reviews", "Reviews"], ["#contact", "Contact"]];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="hdr">
      <div className="wrap">
        <a className="brand" href="#top" aria-label="Smoki Bite home">
          <Image className="logo-img" src="/img/logo-1line.png" alt="Smoki Bite logo" width={145} height={46} priority />
        </a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
        <nav className={open ? "open" : ""} aria-label="Main">
          {links.map(([h, l]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a className="btn btn-fire" href="#order" onClick={() => setOpen(false)}>Order now</a>
        </nav>
      </div>
    </header>
  );
}
