import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { mockSiteRepository } from "@/lib/data/mock-site-repository";

const features = [
  { number: "01", title: "strength training", detail: "build a stronger base, one session at a time." },
  { number: "02", title: "cardio", detail: "make room for better energy and endurance." },
  { number: "03", title: "cross fit", detail: "move with purpose. train at your own pace." },
];

export default async function HomePage() {
  const plans = await mockSiteRepository.getPlans();

  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="solid fitness home">solid<span>fitness</span></Link>
        <nav aria-label="main navigation">
          <a href="#training">training</a><a href="#memberships">memberships</a><a href="#visit">find us</a>
        </nav>
        <Link className="header-cta" href="#visit">book a free trial <span aria-hidden="true">↗</span></Link>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-art" aria-hidden="true"><div className="light-beam" /><div className="rack rack-one" /><div className="rack rack-two" /><div className="platform" /></div>
        <div className="hero-content">
          <p className="eyebrow"><span className="status-dot" /> purasawalkam · chennai</p>
          <h1 id="hero-title">your gym<br />deserves <em>more.</em></h1>
          <p className="hero-copy">A focused space to build strength, find your pace, and show up for yourself.</p>
          <div className="hero-actions"><a className="button button-primary" href="#visit">book a free trial <span aria-hidden="true">↗</span></a><a className="text-link" href="#training">explore the floor <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="hero-index"><span>01 / 07</span><span className="index-line" /><span>built for the work</span></div>
        <a className="scroll-cue" href="#training">scroll to explore <span aria-hidden="true">↓</span></a>
      </section>

      <section className="intro section-wrap" id="training">
        <div className="section-kicker"><span>01 — training</span><span>make every rep count</span></div>
        <div className="intro-grid"><h2>train with<br /><em>purpose.</em></h2><div className="intro-copy"><p>{siteConfig.about}</p><a className="text-link" href="#memberships">explore the training floor <span aria-hidden="true">↗</span></a></div></div>
        <div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.number}><span>{feature.number}</span><div><h3>{feature.title}</h3><p>{feature.detail}</p></div><span className="feature-arrow" aria-hidden="true">↗</span></article>)}</div>
      </section>

      <section className="membership section-wrap" id="memberships">
        <div className="section-kicker"><span>02 — memberships</span><span>find your level</span></div>
        <div className="membership-heading"><h2>show up.<br /><em>get stronger.</em></h2><p>Start with a free trial and find the training rhythm that works for you.</p></div>
        <div className="plan-grid">{plans.map((plan, index) => <article className={`plan-card${index === 1 ? " plan-featured" : ""}`} key={plan.id}><div className="plan-top"><span>{plan.name}</span><span>0{index + 1}</span></div><p className="plan-price">{plan.price}<small> / {plan.period}</small></p><p className="plan-note">membership details available at the gym.</p><a href="#visit" className="plan-link">ask about {plan.name} <span aria-hidden="true">↗</span></a></article>)}</div>
      </section>

      <section className="visit section-wrap" id="visit">
        <div className="section-kicker"><span>03 — find us</span><span>come through</span></div>
        <div className="visit-grid"><div><p className="eyebrow">solid fitness · chennai</p><h2>make your<br /><em>first move.</em></h2></div><div className="visit-details"><p>{siteConfig.location.address}</p><p>hours: <span className="todo">TODO — confirm opening hours</span></p><a className="button button-primary" href={`tel:${siteConfig.contact.phone}`}>call to book <span aria-hidden="true">↗</span></a></div></div>
      </section>

      <footer className="site-footer"><Link className="wordmark" href="/">solid<span>fitness</span></Link><p>train with purpose. · purasawalkam, chennai</p><div><Link href="/portal">member portal</Link><Link href="/admin">admin</Link><span>© solid fitness</span></div></footer>
    </main>
  );
}
