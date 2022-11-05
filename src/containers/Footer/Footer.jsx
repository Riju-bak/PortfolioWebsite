import React from 'react';
import {email, phone, github} from "../../assets";
import './Footer.css';
import {motion} from "framer-motion";

function Footer() {
    const cards = [
        {image: email, content: "rijubak@gmail.com", link: "mailto:rijubak@gmail.com"},
        {image: phone, content: "+1 (548) 994-5509", link: "tel:+1 (548) 994-5509"},
        {image: github, content: "Github", link: "https://github.com/Riju-bak"}
    ]
    return (
        <div id="contact">
            <h2 className="rk__head-text gradient__text">Contact</h2>

            <div className="rk__footer-cards">
                {cards.map(card =>
                    <motion.div
                        whileInView={{opacity: 1}}
                        whileHover={{scale: 1.2}}
                        transition={{duration: 0.5, type: 'tween'}}
                        key={card.content}
                    >
                        <div className={"rk__footer-card"}>
                            <img src={card.image} alt={card.content} />
                            <a href={card.link} target="_blank" className="footer__p-text">{card.content}</a>
                        </div>
                    </motion.div>
                )}
            </div>
            <div className="footer__copyright">
                <p className="footer__p-text">@2022 Rijubak</p>
                <p className="footer__p-text">All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;