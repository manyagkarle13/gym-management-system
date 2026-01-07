import gymHero from "../images/gym-hero.png";

function Landing() {
  return (
    <div style={styles.page}>

      {/* NAVBAR */}
      <div style={styles.navbar}>
        <h2>Gym Management System</h2>
        <div>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </div>
      </div>

      {/* HERO SECTION */}
      <div style={styles.hero}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>
            Manage Your Gym <br /> Smarter
          </h1>

          <p style={styles.heroText}>
            A single platform for gym owners, trainers, and members to manage
            memberships, schedules, and payments efficiently.
          </p>

        
        </div>

        <div style={styles.heroRight}>
          <img src={gymHero} alt="Gym" style={styles.heroImage} />
        </div>
      </div>

      {/* ROLE CARDS SECTION (THIS IS THE IMPORTANT PART) */}
      <div style={styles.roleSection}>
        <p style={styles.roleSub}>Our Program</p>
        <h2 style={styles.roleTitle}>Build your best body</h2>

        <div style={styles.roleCards}>
          {roleCard("🏢", "Owner", "Manage gym, trainers, packages & payments")}
          {roleCard("🏋️", "Trainer", "Handle batches, schedules & members")}
          {roleCard("👥", "Members", "Join gyms, select plans & get updates")}
        </div>
      </div>

      {/* ABOUT US */}
      <div id="about" style={styles.about}>
        <h2>About Us</h2>
        <p>
          Gym Management System modernizes fitness centers by connecting owners,
          trainers, and members on one powerful platform. Everything from
          memberships to payments is simplified and automated.
        </p>
      </div>

      {/* CONTACT */}
      <div id="contact" style={styles.contact}>
        <h2>Contact Us</h2>
        <p>Email: support@gymmanagementsystem.com</p>
        <p>Phone: +91 90000 00000</p>
      </div>
    </div>
  );
}

/* CARD COMPONENT */
function roleCard(icon: string, title: string, text: string) {
  return (
    <div style={styles.card}>
      <div style={styles.cardIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

/* STYLES */
const styles: any = {
  page: {
    fontFamily: "Arial, sans-serif",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    background: "linear-gradient(90deg,#1b1b3a,#2a2a72)",
    color: "white",
  },

  navLink: {
    marginLeft: "20px",
    color: "white",
    textDecoration: "none",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    padding: "80px 40px",
    background: "linear-gradient(90deg,#1b1b3a,#2a2a72)",
    color: "white",
  },

  heroLeft: { width: "50%" },
  heroRight: { width: "45%", textAlign: "center" },

  heroTitle: { fontSize: "48px", lineHeight: "1.1" },
  heroText: { marginTop: "20px", color: "#ddd" },

  heroImage: {
    width: "100%",
    maxWidth: "420px",
  },

  button: {
    marginTop: "30px",
    padding: "12px 28px",
    borderRadius: "30px",
    border: "none",
    backgroundColor: "#e63946",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },

  /* ROLE SECTION */
  roleSection: {
    backgroundColor: "#d63b34",
    padding: "70px 40px",
    textAlign: "center",
    color: "white",
  },

  roleSub: {
    opacity: 0.9,
    marginBottom: "10px",
  },

  roleTitle: {
    fontSize: "36px",
    marginBottom: "40px",
  },

  roleCards: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.25)",
    width: "260px",
    padding: "30px",
    borderRadius: "20px",
  },

  cardIcon: {
    fontSize: "40px",
    marginBottom: "15px",
  },

  about: {
    backgroundColor: "#1b1b3a",
    color: "white",
    padding: "70px 40px",
    textAlign: "center",
  },

  contact: {
    padding: "50px 40px",
    textAlign: "center",
  },
};

export default Landing;
