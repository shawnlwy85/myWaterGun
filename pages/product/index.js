import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <>
      <h1>Product </h1>
      <Link href="/">
        <a>Go Home</a>
      </Link>
      <h2>
        <Link href="/product/1">
          <a>P1</a>
        </Link>
      </h2>
      <h2>
        <Link href="/product/2" replace>
          <a>P2 - with replace props</a>
        </Link>
      </h2>

      <h2>
        <Link href="/product/3">
          <a>P3</a>
        </Link>
      </h2>
    </>
  );
}
