import Link from "next/link";

export default function AdminPage() {
  return <main className="placeholder-page"><Link className="wordmark" href="/">solid<span>fitness</span></Link><p className="eyebrow">staff area</p><h1>admin<br /><em>workspace.</em></h1><p className="placeholder-copy">the staff workspace is not configured yet. connect a secure sign-in and backend before enabling access.</p><Link className="button button-primary" href="/">back to the site <span aria-hidden="true">↗</span></Link></main>;
}
