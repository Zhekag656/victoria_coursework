import React from 'react';

const Contact = () => {
    return (
        <div className="mx-lg-5 mx-lg-1 my-5">
            <div className="h1 text-center">Контакти</div>

            <div className="row">
                <div className="col-md-6 col-12">
                    <div>Ви можете зв'язатися з нами за допомогою наведених нижче контактних даних:</div>
                    <ul >
                        <li>Електронна пошта: mitit@mitit.edu.ua</li>
                        <li>Телефон: +380 500000000</li>
                        <li>Адреса офісу: вулиця Київська, 45/1, Київ, 01011</li>
                    </ul>
                </div>
                <div className="col-md-6 col-12">
                    <div>Також ви можете знайти нас в соціальних мережах:</div>
                    <ul >
                        <li>Facebook: mitit</li>
                        <li>Twitter: mitit</li>
                        <li>Instagram: mitit</li>
                    </ul>
                </div>
                <div className="col-12">
                    <div>Ми знаходимося за адресою: вулиця Київська, 45/1, Київ, 01011</div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.362369556492!2d30.7383116765596!3d50.49021317159979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0c044dd735%3A0x77940fa521b6fd28!2z0JLQvtC10L3QvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDRgtC10LvQtdC60L7QvNC80YPQvdC40LrQsNGG0LjQuSDQuCDQuNC90YTQvtGA0LzQsNGC0LjQt9Cw0YbQuNC4INC40LzQtdC90Lgg0JPQtdGA0L7QtdCyINCa0YDRg9GC!5e0!3m2!1sru!2sua!4v1698935369629!5m2!1sru!2sua"  style={{border: 0, width: "100%"}} height={400} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
