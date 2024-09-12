import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetail({ blok }) {
  console.log("ProductDetail blok:", blok);

  const extractText = (richText) => {
    if (!richText || !richText.content) return '';
    return richText.content
      .flatMap(paragraph => paragraph.content.map(text => text.text))
      .join(' ');
  };

  return (
    <div className="product-detail">
      {blok.image?.filename && (
        <div className="product-detail__image">
          <Image
            src={blok.image.filename}
            alt={blok.label || "Product Image"}
            width={800}
            height={600}
            layout="responsive"
          />
        </div>
      )}
      {blok.label && <h1>{blok.label}</h1>}
      {blok.text && <div>{extractText(blok.text)}</div>}
      {blok.colores && <p>Colores: {blok.colores}</p>}
      {blok.color && blok.color.length > 0 && (
        <div className="product-detail__colors">
          {blok.color.map((colorImage, index) => (
            <Image
              key={index}
              src={colorImage.filename}
              alt={`Color ${index}`}
              width={100}
              height={100}
            />
          ))}
        </div>
      )}
      {blok.size && <p>Tamaño: {blok.size}</p>}
      {blok.buttons && blok.buttons.length > 0 && (
        <div className="product-detail__buttons">
          {blok.buttons.map((button, index) => (
            <Link key={index} href={button.link}>
              <a className="button">{button.label}</a>
            </Link>
          ))}
        </div>
      )}
      {blok.guide && blok.guide.sizeguide && (
        <div className="product-detail__guide">
          <Link href={blok.guide.sizeguide.link}>
            <a className="guide-link">{blok.guide.sizeguide.label}</a>
          </Link>
        </div>
      )}
      {blok.model && <p>Modelo: {blok.model}</p>}
    </div>
  );
}
