import React from "react";
import "./layout.module.css";

function Layout() {
  return (
    <main className="container">
      <section className="container__intro">
        <div className="intro__title">Join our community</div>
        <div className="intro__features">
          30-day, hassle-free money back guarantee
        </div>
        <p className="intro__text">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </section>
      <section className="container__price">
        <div className="price__title">Monthly Subscription</div>
        <div className="price__offer">
          $29 <span>per month</span>
        </div>
        <p className="price__extra">
          Full access for less than $1 a day
        </p>
        <div className="price__button">Sign Up</div>
      </section>
      <section className="container__why">
        <div className="why__title">Why Us</div>
        <div className="why__text">
          <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer &amp; expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Layout;
