import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
    return (
        <>
            {/* Navbar */}
            <header className="navbar">
                <div className="logo"><img src="./asset/logo.png" alt={"logo"} /> </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#" className="active">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Contact Section */}
            <section className="contact">
                <div className="overlay"> <img src="./asset/lady.jpg" alt="image"/> </div>
                <div className="overlay4"> <img src="./asset/bg.png" alt="image"/> </div>
                <h1>Contact Us</h1>
                <p className="subtitle">Get in touch with us</p>
                <div className="contact-container">
                    <div className="overlay3"> <img src="./asset/pata2.png" alt="image"/> </div>
                    <div className="contact-image">
                        <img src="../public/image.png" alt="Smiling woman skincare" />
                    </div>
                    <form className="contact-form">
                        <div className="overlay2"> <img src="./asset/pata.png" alt="image"/> </div>                        <div className="form-group">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email" />
                            <input type="tel" placeholder="+1 012 3456 789" />
                        </div>
                        <textarea placeholder="Write your message..."></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>

            {/* Map */}
            <section className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8446.540809619722!2d88.48763881716553!3d22.72909423120671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89c04b6fe4559%3A0xa012120ab7f1da34!2sBrainware%20University!5e1!3m2!1sen!2sin!4v1758345331338!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                ></iframe>
            </section>

            {/* Footer */}
            <footer>
                <div className="footer-container">
                    <div className="footer-about">
                        <div className="logo"><img src="./asset/logo.png" alt={"logo"} /> </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    </div>
                    <div className="footer-links">
                        <h3>Information</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact</h3>
                        <p>📞 123 456 789</p>
                        <p>💬 Whatsapp</p>
                        <p>✉️ hello@liftmedia.com</p>
                        <p>Mon–Fri: 09:00–20:00 hrs</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>dayandnightbeauty@gmail.com</p>
                    <p>Designed by Web Prism Dynamics LLP © 2025. All rights reserved.</p>
                    <div className="socials">
                        <a href="#">🌐</a>
                        <a href="#">🐦</a>
                        <a href="#">📘</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default ContactPage;
