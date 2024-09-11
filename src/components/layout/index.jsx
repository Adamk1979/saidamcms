// components/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ config, children }) {
  // Extract header and footer from the content field
  const { content } = config || {};
  const { header, footer } = content || {}; // Destructure header and footer from content

  return (
    <>
      <Header blok={header} /> {/* Pass header to Header component */}
      <main>{children}</main>
      <Footer blok={footer} /> {/* Pass footer to Footer component */}
    </>
  );
}
