import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ config, children }) {
  const { content } = config || {};
  const { header, footer } = content || {}; 

  return (
    <>
      <Header blok={header} /> 
      <main>{children}</main>
      <Footer blok={footer} />
    </>
  );
}
