import Link from "next/link";

export default function TOC() {
  return (
    <nav aria-label="Labs table of contents">
      <ul>
        <li><a href="https://webdev-client.vercel.app/book/ch1#sec-1-3-11">Back To Book</a></li>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/labs">Labs</Link></li>
        <li><Link href="/labs/lab1">Lab 1</Link></li>
        <li><Link href="/labs/lab2">Lab 2</Link></li>
        <li><Link href="/labs/lab3">Lab 3</Link></li>
        <li><Link href="/labs/lab4">Lab 4</Link></li>
        <li><Link href="/labs/lab5">Lab 5</Link></li>
        <li><Link href="/book/ch1" id="wd-toc-book-link">Chapter 1</Link></li>
        <li>
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
        </li>
        <li>
          <Link id="wd-github" href="https://github.com/anishban5610/webdev-client"> Github</Link>
        </li>
      </ul>
    </nav>
  );
}
