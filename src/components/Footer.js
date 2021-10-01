import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="container-contact">
        <ul>
          <li>
            <a href="https://github.com/matthewbush55" target="_blank" rel="noreferrer">
              <img src={process.env.PUBLIC_URL + "/images/GitHub-Mark-64px.png"} alt="GitHub Logo" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/matthewrbush/" target="_blank" rel="noreferrer">
              <img id="logo-resize" src="./assets" alt="LinkedIn Logo" />
            </a>
          </li>
          <li>
            <a href="https://stackexchange.com/users/22014112/matt-bush" target="_blank" rel="noreferrer">
              <img src="images/512px-Stack_Overflow_icon.png" alt="Stack Overflow Logo" />
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1lGi8s4kUscZPg60GTUPDwr125d5EmdNQ/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <img src={process.env.PUBLIC_URL + "/images/resume.png"} alt="Document icon" />
            </a>
          </li>
          <li>
            <a href="mailto:matthewbush55@gmail.com" target="_blank" rel="noreferrer">
              <img src={process.env.PUBLIC_URL + "/images/email.png"} alt="Email icon" />
            </a>
          </li>
          <li>
            <a href="tel:970-368-5575" target="_blank" rel="noreferrer">
              <img src={process.env.PUBLIC_URL + "/images/phone.png"} alt="Phone icon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
