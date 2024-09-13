"use client";
import { useState } from "react";
import Link from "next/link";
import '../styles/footer.css'; 

export default function Footer({ blok }) {
  console.log("Footer blok:", blok);

  const [email, setEmail] = useState("");

  const extractText = (richText) => {
    if (!richText || !richText.content) return '';
    return richText.content
      .flatMap(paragraph => paragraph.content.map(text => text.text))
      .join(' ');
  };

  const footer = Array.isArray(blok) ? blok[0] : blok?.footer?.[0];
  
  if (!footer) {
    return null; 
  }

  const emailLink = footer?.search?.[0]?.link?.[0];
  const emailLinkUrl = emailLink?.story?.slug ? `/${emailLink.story.slug}` : "#";

  return (
    <footer className="footer">
      <div className="container">
        <div className="leftSide">
          {footer?.title && <h2 className="title">{footer.title}</h2>}

          {footer?.text && (
            <div className="richText">
              <p>{extractText(footer.text)}</p>
            </div>
          )}

          {footer?.search && (
            <div className="search">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
          {footer?.nav && (
            <div className="navList">
              {footer.nav.map((navBlock, index) => (
                <div key={index} className="navSection">
                  {navBlock.component === 'navone' && (
                    <>
                      <h4 className="navTitle">
                        {navBlock.navone.find(item => item.component === 'nav-title')?.label || "Nav One"}
                      </h4>
                      <ul>
                        {navBlock.navone.filter(item => item.component === 'nav-item').map((item, idx) => (
                          <li key={idx} className="navItem">
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
                          <li key={idx} className="navItem">
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
                          <li key={idx} className="navItem">
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
