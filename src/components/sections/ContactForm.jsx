import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [date, setDate] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = "service_7omxxg5";
            const templateId = "template_zqan7i2";
            const userId = "user_1jlxGYDmk1IIiMo7AtBRD";
            const templateParams = {
                name,
                email,
                message,
                date
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setDate('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
      <div id="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <div style={{ textAlign: "center" }} onClick={submit}>
          <span className="cta">Send Message</span>
        </div>

        <p className={emailSent ? "visible" : null}>
          Thank you for your message, we will be in touch in no time!
        </p>
      </div>
    );
};

