import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", textAlign: "center", padding: "6rem 1.5rem" }}>
        <h1>Page not found</h1>
        <p>
          <Link href="/">Back to home</Link>
        </p>
      </body>
    </html>
  );
}
