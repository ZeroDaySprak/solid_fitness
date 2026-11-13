import Link from "next/link";

export default function PortalPage() {
  return <main className="placeholder-page"><Link className="wordmark" href="/">solid<span>fitness</span></Link><p className="eyebrow">member portal</p><h1>your training,<br /><em>in one place.</em></h1><p className="placeholder-copy">member access is in development. check back soon or visit the gym for membership support.</p><Link className="button button-primary" href="/">back to the site <span aria-hidden="true">↗</span></Link></main>;
}
