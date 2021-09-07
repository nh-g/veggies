import Subscriber from "../components/Subscriber";
export default function Footer() {
  return (
    <footer>
      <div className="footer container">
        <div>
          <h1>
            Veggie <span>Restaurant</span>
          </h1>
          <h2>Let's veggie your day</h2>
        </div>
        <div className="social-icon">
          <div className="social-item">
            <a href="#">
              <img src="https://img.icons8.com/bubbles/50/000000/facebook-new.png" />
            </a>
          </div>
          <div className="social-item">
            <a href="#">
              <img src="https://img.icons8.com/bubbles/50/000000/instagram-new.png" />
            </a>
          </div>
          <div className="social-item">
            <a href="mailto: softwaredevelopmentacademy@gmail.com">
              <img src="https://img.icons8.com/bubbles/50/000000/email.png" />
            </a>
          </div>
        </div>
        <div>
            <br />
          <Subscriber />
          <p>Copyright © 2021 N.H.Giang. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
