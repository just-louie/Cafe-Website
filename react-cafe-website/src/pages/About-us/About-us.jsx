import "./about-us.css";

function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>About Full House Cafe</h2>

        <p className="about-intro">
          Experience the best there is! Quality yet affordable meals and drinks,
          cozy dining area vibe, and enjoyable KTV bonding with your family and
          friends!
        </p>

        <div className="about-content">
          <div className="about-card">
            <h3>☕ Our Story</h3>
            <p>
              Full House Cafe was established in 2022 in Purok 3, Bambang,
              Bulacan. Since day one, we’ve aimed to create a warm and inviting
              space where everyone can enjoy delicious food, refreshing drinks,
              and great company.
            </p>
          </div>

          <div className="about-card">
            <h3>🌿 What We Serve</h3>
            <p>
              We focus on quality yet affordable meals and drinks. Every item on
              our menu is crafted to satisfy your taste buds while keeping you
              coming back for more.
            </p>
          </div>

          <div className="about-card">
            <h3>🤎 Our Space</h3>
            <p>
              Our cozy dining area and KTV setup make Full House Cafe the perfect
              spot for family bonding, friendly catch-ups, or relaxing alone
              with your favorite drink.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
