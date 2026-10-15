import Image from "next/image";
import Nav from "./Nav";
import OrderForm from "./OrderForm";
import { site, menu, addons, reviews } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org", "@type": "Restaurant", name: site.name, slogan: site.tagline,
  url: site.url, image: `${site.url}/img/logo-2line.png`, telephone: site.phone, email: site.email,
  servesCuisine: ["Shawarma", "Fast Food", "Burgers"], priceRange: "Rs.",
  address: { "@type": "PostalAddress", streetAddress: site.address, addressCountry: "PK" },
  hasMenu: `${site.url}/#menu`,
};
const ticker = ["Smoki Shawarma", "Grill Shawarma", "Loaded Fries", "Beef Grill Burger", "Spring Rolls", "Smoki Wrap"];
const price = (p) => (p ? `Rs. ${p}` : "Ask price");
const wa = `https://wa.me/${site.whatsapp}`;

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="top">
        <section className="hero">
          <div className="wrap">
            <div>
              <h1>Bold flavors<span>Real taste</span></h1>
              <p>Smoky chicken shawarma, grilled until the edges crackle, with fresh salad and our special sauces. Har bite mein fire!</p>
              <div className="cta">
                <a className="btn btn-fire" href="#order">Order now</a>
                <a className="btn btn-ghost" href="#menu">See the menu</a>
              </div>
              <div className="stats">
                <div><b>6</b><small>signature items</small></div>
                <div><b>Fresh</b><small>ingredients daily</small></div>
                <div><b>Hot</b><small>from the grill</small></div>
              </div>
            </div>
            <div className="hero-art">
              <Image className="logo-img" src="/img/logo-2line.png" alt="Smoki Bite logo: Har Bite Mein Fire" width={1389} height={1600} priority sizes="(max-width:820px) 72vw, 460px" />
            </div>
          </div>
        </section>

        <div className="marq" aria-hidden="true"><div>{[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => <span key={i}>&nbsp;&nbsp;🔥 {t}&nbsp;&nbsp;</span>)}</div></div>

        <section id="about" className="about">
          <div className="wrap">
            <div className="logo"><Image className="logo-img" src="/img/logo-2line.png" alt="Smoki Bite brand logo" width={520} height={599} sizes="(max-width:820px) 360px, 420px" /></div>
            <div>
              <h2 className="h2">Fire-grilled, <em>made fresh</em></h2>
              <p className="lead">Smoki Bite started with one idea: shawarma and grill food should taste smoky, loaded and honest. We cook to order, use fresh ingredients, and build our own sauces so every bite hits the way it should.</p>
              <ul>
                <li><b>Fresh ingredients.</b> Salad and sauces are prepared daily.</li>
                <li><b>Quality food.</b> Smoki chicken and beef patties grilled to order.</li>
                <li><b>Unforgettable taste.</b> Special sauces you wont find anywhere else.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="menu" className="products">
          <div className="wrap">
            <h2 className="h2">Explore our <em>products</em></h2>
            <p className="lead">Six signature items, each built around our smoki chicken and special sauces.</p>
            <div className="grid">
              {menu.map((m) => (
                <article className="card" key={m.id}>
                  <div className="ph"><img src={m.img} alt={`${m.name} at Smoki Bite`} width={184} height={184} loading="lazy" /></div>
                  <div className="content">
                    <h3>{m.name}</h3>
                    <span className="opt">{m.options}</span>
                    <p>{m.desc}</p>
                    <div className="f"><span className="price">{price(m.price)}</span><a className="btn btn-fire" href="#order">Order</a></div>
                  </div>
                </article>
              ))}
            </div>
            <div className="addons" aria-label="Extras and drinks">{addons.map((a) => <span key={a}>{a}</span>)}</div>
          </div>
        </section>

        <section id="menu-card" className="mc">
          <div className="wrap">
            <div>
              <h2 className="h2">The full <em>menu card</em></h2>
              <p className="lead">Every item, size and add-on in one place. Tap the card to open it full size, then send us your order.</p>
              <div className="cta" style={{ marginTop: 24 }}><a className="btn btn-fire" href="#order">Order now</a><a className="btn btn-ghost" href="/img/menu-card.jpg" target="_blank" rel="noopener">Open full size</a></div>
            </div>
            <a className="poster" href="/img/menu-card.jpg" target="_blank" rel="noopener" aria-label="Open the Smoki Bite menu card full size"><img src="/img/menu-card.jpg" alt="Smoki Bite menu card with shawarma, wraps, burgers, fries, spring rolls and drinks" width={1024} height={1536} loading="lazy" /></a>
          </div>
        </section>

        <section id="order" className="order">
          <div className="wrap">
            <div>
              <h2 className="h2">Order <em>now</em></h2>
              <p className="lead">Pick your item, fill in your details and send it straight to us on WhatsApp. We confirm your order and price right away.</p>
              <div className="call"><a href={`tel:${site.phone.replace(/\s/g, "")}`}>Call: {site.phone}</a><span>{site.hours}</span></div>
            </div>
            <OrderForm />
          </div>
        </section>

        <section id="reviews">
          <div className="wrap">
            <h2 className="h2">What our <em>customers say</em></h2>
            <div className="rv">
              {reviews.map((r) => (
                <figure key={r.name}>
                  <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <blockquote>“{r.text}”</blockquote>
                  <figcaption><b>{r.name}</b><span>Ordered: {r.item}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <div>
              <h2 className="h2">Find <em>us</em></h2>
              <p className="lead">Hungry? Walk in, call, or message us. We reply fast.</p>
              <div className="info">
                <div><b>Address</b>{site.address}</div>
                <div><b>Phone / WhatsApp</b><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></div>
                <div><b>Email</b><a href={`mailto:${site.email}`}>{site.email}</a></div>
                <div><b>Opening hours</b>{site.hours}</div>
              </div>
            </div>
            <div className="map" role="img" aria-label="Map placeholder">Paste your Google Maps embed iframe here (inside this div in app/page.js)</div>
          </div>
        </section>
      </main>

      <footer className="ft">
        <div className="wrap">
          <div>
            <Image className="logo-img" src="/img/logo-1line.jpg" alt="Smoki Bite" width={220} height={70} />
            <p className="lead" style={{ marginTop: 14 }}>Bold flavors, real taste. {site.tagline}</p>
          </div>
          <div><h4>Quick links</h4><ul><li><a href="#about">About us</a></li><li><a href="#menu">Menu</a></li><li><a href="#order">Order now</a></li><li><a href="#reviews">Reviews</a></li></ul></div>
          <div><h4>Follow us</h4><ul><li><a href={site.instagram} rel="noopener">Instagram</a></li><li><a href={site.facebook} rel="noopener">Facebook</a></li><li><a href={wa} rel="noopener">WhatsApp</a></li></ul></div>
        </div>
        <p className="copy">© {new Date().getFullYear()} Smoki Bite. Fresh ingredients · Quality food · Unforgettable taste.</p>
      </footer>
      <a className="wa" href={wa} rel="noopener" aria-label="Chat on WhatsApp">WhatsApp</a>
    </>
  );
}
