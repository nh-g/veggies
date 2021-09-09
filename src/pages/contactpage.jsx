import ImageLoader from "../components/ImageLoader";

export default function ContactPage() {
    const ownerImageURL = "brand/owner.jpg"
    return (
      <div className="contact-page">
        <ImageLoader filePath={ownerImageURL} />

        <div className="opening">
          <h2>Opening Hours</h2>
          <p>
            ❖  Tuesday to Friday ..... 10:00 - 20:00
            <br />
            ❖  Saturday to Sunday ..... 12:00 - 21:00
          </p>
        </div>
        {/* TASK: Contact form */}
        <div className="address">
          <h2>Address</h2>
          <p>
            Odengatan 21, 113 45 Stockholm 
          </p>
        </div>

        {/* Map */}
      </div>
    );
}
