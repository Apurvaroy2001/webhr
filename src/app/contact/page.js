import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard/>

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm/>
                </section>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.652772869567!2d88.3693099756528!3d22.47967902955806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02710544e338e9%3A0x39de82bf9ac5b375!2s3-56%2C%20Vidyasagar%20Colony%2C%20Ganguly%20Bagan%2C%20Kolkata%2C%20West%20Bengal%20700086!5e0!3m2!1sen!2sin!4v1708180312910!5m2!1sen!2sin"
                width={100} height={450} style={{border:0}} allowFullScreen="" loading="lazy"
                className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>


        </>
    );
};

export default Contact;