import img from "./asset/profile.png";

function App() {
  console.log("=========This is the portfolio of TITUS ERICSON BIANTO==========");
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <div className="profile">
          <img src={img} alt="Profile" className="profile-img" />
          <h2>Titus Ericson Bianto</h2>
        </div>
      </header>
      <main>
        <section className="intro">
          <h1>
            I'm <span>Titus, </span>
          </h1>
          <p>
            A 2024 Informatics undergraduate student with a strong interest in
            web development. I have foundational skills in HTML, CSS, and
            JavaScript, and am currently expanding my knowledge in modern
            frameworks such as React. I enjoy working both independently and
            collaboratively with a focus on creating functional, responsive,
            and user-friendly websites. I am committed to continuous learning
            and eager to contribute to projects and organizational activities.
          </p>
          <div className="socials">
            <a href="https://github.com/Erito">GitHub</a>
            <a href="https://www.linkedin.com/in/titus-ericson-bianto-31a956314/">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/titus_erito/">Instagram</a>
          </div>
        </section>
        <section className="services">
          <h2>What Can I Do</h2>
        </section>
        <section className="cards">
          <div className="card-row">
            <div className="card">
              <h3>Soft Skills</h3>
              <p>
                - Quick Learner
                <br />
                - Time Management
                <br />
                - Communication Skills
                <br />
                - Teamwork & Collaboration
                <br />
                - Problem Solving & Critical Thinking
                <br />
              </p>
            </div>
            <div className="card">
              <h3>Hard Skills</h3>
              <p>
                - HTML, CSS, JavaScript (Fundamentals)
                <br />
                - Responsive Web Design
                <br />
                - React (Basic Understanding)
                <br />
                - Git and GitHub
                <br />- C, C++
              </p>
            </div>
          </div>
          <div className="card-row">
            <div className="card">
              <h3>Organizations</h3>
              <p>
                - Student Council (OSIS) — Staff, Information and Communication Technology Division (2023 - 2024)
                <br />
                - Introduction to Informatics Study Program (PPIF) — MODULE Division (2025)
                <br />
              </p>
            </div>
          </div>
        </section>
        <footer className="portfolio-footer">
        <div className="footer-content">
          <span>📞 087888082449</span>
          <span>📩 Titusbianto38@gmail.com</span>
        </div>
      </footer>
      </main>
    </div>
  );
}

export default App;
