"use client";
import { useState } from "react";
import { menu, site } from "@/lib/data";

export default function OrderForm() {
  const [f, setF] = useState({ name: "", phone: "", item: menu[0].name, qty: 1, address: "", note: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const send = (e) => {
    e.preventDefault();
    const msg = `Hi Smoki Bite! I'd like to order:%0A${f.qty} x ${f.item}%0AName: ${f.name}%0APhone: ${f.phone}%0AAddress: ${f.address}%0ANote: ${f.note || "-"}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${msg}`, "_blank", "noopener");
  };
  return (
    <form className="form" onSubmit={send}>
      <div className="row">
        <label>Your name<input required value={f.name} onChange={set("name")} autoComplete="name" /></label>
        <label>Phone<input required type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" /></label>
      </div>
      <div className="row">
        <label>Item<select value={f.item} onChange={set("item")}>{menu.map((m) => <option key={m.id}>{m.name}</option>)}</select></label>
        <label>Quantity<input type="number" min="1" max="50" value={f.qty} onChange={set("qty")} /></label>
      </div>
      <label>Delivery address<textarea required rows={2} value={f.address} onChange={set("address")} autoComplete="street-address" /></label>
      <label>Notes (size, extra cheese, sauces)<textarea rows={2} value={f.note} onChange={set("note")} /></label>
      <button className="btn btn-fire" type="submit">Send order on WhatsApp</button>
    </form>
  );
}
