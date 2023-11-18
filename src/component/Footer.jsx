import React from 'react';

const Footer = () => {
    return (
        <footer className="py-3 px-lg-5 px-1 bg-body-secondary">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <a href="/about" className="nav-link px-2 text-muted">Про сайт</a>
                </li>
                <li className="nav-item">
                    <a href="/gallery" className="nav-link px-2 text-muted">Галерея картинок</a>
                </li>
                <li className="nav-item">
                    <a href="/news" className="nav-link px-2 text-muted">Новини</a>
                </li>
                <li className="nav-item">
                    <a href="/contacts" className="nav-link px-2 text-muted">Контакти</a>
                </li>
            </ul>
            <p className="text-center text-muted">© 2023 MITIT COMPANY, Inc</p>
        </footer>
    );
};

export default Footer;
