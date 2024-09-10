"use client";
import { useState } from "react";
import Link from "next/link";
import '../styles/footer.css'; 

export default function Footer({ blok }) {
  console.log("footer blok:", blok);
  const [email, setEmail] = useState("");

  const extractText = (richText) => {
    if (!richText || !richText.content) return '';
    return richText.content
      .flatMap(paragraph => paragraph.content.map(text => text.text))
      .join(' ');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Extracting the link and constructing the URL
  const emailLink = blok?.search?.[0]?.link?.[0];
  const emailLinkUrl = emailLink?.story?.slug ? `/${emailLink.story.slug}` : "#";

  return (
    <footer className="footer">
      <div className="container">
        <div className="leftSide">
          {blok?.title && <h2 className="title">{blok.title}</h2>}

          {blok?.text && (
            <div className="richText">
              <p>{extractText(blok.text)}</p>
            </div>
          )}

          {blok?.search && (
            <div className="search">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email Address"
                className="emailInput"
              />
              {emailLink && (
                <a 
                  href={emailLinkUrl} 
                  className="emailLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {emailLink.label}
                </a>
              )}
            </div>
          )}
        </div>

        <nav className="rightSide">
          {blok?.nav && (
            <div className="navList">
              {blok.nav.map((navBlock, index) => (
                <div key={index} className="navSection">
                  {/* Use dynamic titles from navBlock */}
                  {navBlock.component === 'navone' && (
                    <>
                      <h4 className="navTitle">
                        {navBlock.navone.find(item => item.component === 'nav-title')?.label || "Nav One"}
                      </h4>
                      <ul>
                        {navBlock.navone.filter(item => item.component === 'nav-item').map((item, idx) => (
                          <li key={idx}>
                            <Link href={item.link?.url || "#"}>
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {navBlock.component === 'Navtwo' && (
                    <>
                      <h4 className="navTitle">
                        {navBlock.navtwo.find(item => item.component === 'nav-title')?.label || "Nav Two"}
                      </h4>
                      <ul>
                        {navBlock.navtwo.filter(item => item.component === 'nav-item').map((item, idx) => (
                          <li key={idx}>
                            <Link href={item.link?.url || "#"}>
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {navBlock.component === 'Navthree' && (
                    <>
                      <h4 className="navTitle">
                        {navBlock.navthree.find(item => item.component === 'nav-title')?.label || "Nav Three"}
                      </h4>
                      <ul>
                        {navBlock.navthree.filter(item => item.component === 'nav-item').map((item, idx) => (
                          <li key={idx}>
                            <Link href={item.link?.url || "#"}>
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </nav>
      </div>
    </footer>
  );
}
