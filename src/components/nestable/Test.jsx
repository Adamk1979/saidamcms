import Image from 'next/image';
import Link from 'next/link';

export default function Test({ blok }) {
    console.log("test blok", blok);

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
                        width={600}
                        height={400}
                        layout="responsive"
                    />
                </div>
            )}

            <div>{blok.test}</div>
            <div>{blok.price}</div>
            {blok.text && <div>{extractText(blok.text)}</div>}

            <div>{blok.colores}</div>
            {blok.colors && (
                <div className="product-detail__colors">
                    {blok.colors.map((colorImage, index) => (
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

            <div>{blok.size}</div>

            {blok.buttons && (
                <div className="product-detail__buttons">
                    {blok.buttons.map((button, index) => (
                        <div key={index} className="button-block">
                            {button.link ? (
                                <Link href={button.link}>
                                    <a className="button">
                                        <button>{button.label}</button>
                                    </a>
                                </Link>
                            ) : (
                                <button className="button" disabled>
                                    {button.label}
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            )}
            <div>{blok.model}</div>
        </div>
    );
}
