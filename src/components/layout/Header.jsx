"use client";
import Image from 'next/image';
import Link from 'next/link';
import '../styles/header.css';

export default function Header({ blok, onSearch }) {
  console.log("Header blok:", blok);

  const header = Array.isArray(blok) ? blok[0] : blok?.header?.[0];
  
  if (!header) {
    return null; 
  }

  const isLinkArray = Array.isArray(header?.links);
  const isSearchArray = Array.isArray(header?.search);

  return (
    <header className="header-content">
      <div className="left-section">
        {header && isLinkArray && (
          <nav>
            <ul>
              {header.links.map((l, index) => (
                <li key={index}>
                  <Link href={l.link?.cached_url || "#"} passHref>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {header && header.logo && (
          <div className="logo">
            <Image
              src={header.logo.filename} 
              alt={header.logo.alt || "Logo"}
              width={30}
              height={30}
            />
          </div>
        )}

        {header && isSearchArray && header.search[0]?.component === 'mysearch' && (
          <div className="search">
            <input type="text" placeholder={header.search[0]?.input || "Search"} />
          </div>
        )}
      </div>

      <div className="right-section">
        {header && header.logotwo && (
          <div className="logo-two">
            <Image
              src={header.logotwo.filename} 
              alt={header.logotwo.alt || "Logo Two"}
              width={30}
              height={30}
            />
          </div>
        )}

        {header && header.number && (
          <div className="number">
            <span>{header.number}</span>
          </div>
        )}
      </div>
    </header>
  );
}
