"use client";
import Image from 'next/image';
import Link from 'next/link';
import '../styles/hero.css';

export default function Hero({ blok }) {
  console.log("Hero blok", blok);

  const extractText = (richText) => {
    if (!richText || !richText.content) return '';
    return richText.content
      .flatMap(paragraph => paragraph.content.map(text => text.text))
      .join(' ');
  };

  return (
    <section className="hero-section">
      {blok?.title && <h1 className="hero-title">{blok.title}</h1>}

      {blok?.text && (
        <div className="hero-text">
          <p>{extractText(blok.text)}</p>
        </div>
      )}

      {blok.button && blok.button.length > 0 && blok.button.map((buttonItem) => {
        if (buttonItem.component === 'shop') {
          const buttonLink = buttonItem.link.cached_url || buttonItem.link.story?.url || '#';
          return (
            <Link key={buttonItem._uid} href={buttonLink}>
              <button className="hero-button">{buttonItem.label}</button>
            </Link>
          );
        }
        return null;
      })}

      {blok?.image && (
        <Image
          src={blok.image.filename}
          alt={blok.image.alt || 'Hero image'}
          width={blok.image.width || 1200}
          height={blok.image.height || 600}
          className="hero-image"
        />
      )}
    </section>
  );
}
