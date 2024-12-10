import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Image } from "@unpic/react";
import spelen from "../assets/spelen.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "About page" },
    { name: "description", content: "Welcome to about!" },
  ];
};

export default function About() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>About page!</h1>
      <Link to="/about">Home</Link>;
      <p>
        Temporary about page. This is a Remix app with a few pages. This is the
        about page.
      </p>
    </div>
  );
}
