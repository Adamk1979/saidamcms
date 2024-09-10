import Image from 'next/image';
import Link from 'next/link';
import '../styles/header.css'; 

export default function Header({ blok }) {
    console.log("Header blok:", blok);

    const navigation = blok.navigation && blok.navigation[0]; 

    const isLinkArray = Array.isArray(navigation?.links);
    const isSearchArray = Array.isArray(navigation?.search);

    return (
        <header className="header-content">
            {/* Left section */}
            <div className="left-section">
                {navigation && isLinkArray && (
                    <nav>
                        <ul>
                            {navigation.links.map((l, index) => (
                                <li key={index}>
                                    <Link href={l.link.cached_url} passHref>
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}

                {navigation && navigation.logo && (
                    <div className="logo">
                        <Image
                            src={navigation.logo.filename} 
                            alt="Logo"
                            width={30}
                            height={30}
                        />
                    </div>
                )}

                {navigation && isSearchArray && navigation.search[0]?.component === 'mysearch' && (
                    <div className="search">
                        <input type="text" placeholder={navigation.search[0]?.input || "Search..."} />
                    </div>
                )}
            </div>

            {/* Right section */}
            <div className="right-section">
                {navigation && navigation.logotwo && (
                    <div className="logo-two">
                        <Image
                            src={navigation.logotwo.filename} 
                            alt="Logo Two"
                            width={30}
                            height={30}
                        />
                    </div>
                )}

                {navigation && navigation.number && (
                    <div className="number">
                        <span>{navigation.number}</span>
                    </div>
                )}
            </div>
        </header>
    );
}
