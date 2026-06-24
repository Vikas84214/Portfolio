import { useEffect, useRef } from "react";

export default function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const skills = [
    { name: "Java", pct: 85 },
    { name: "Python", pct: 75 },
    { name: "C", pct: 70 },
    { name: "SQL", pct: 80 },
    { name: "HTML / CSS", pct: 88 },
    { name: "JavaScript", pct: 75 },
    { name: "Data Structures & Algorithms", pct: 72 },
    { name: "Database Management (MySQL)", pct: 78 },
  ];

  const certs = [
    { name: "Data Analytics Process Automation", issuer: "AICTE", icon: "📊" },
    { name: "Java Full Stack Developer", issuer: "AICTE", icon: "☕" },
    { name: "Cloud Foundation", issuer: "AWS Academy", icon: "☁️" },
    { name: "Certified Developer", issuer: "Oracle", icon: "🔷" },
    { name: "Database Programming with SQL", issuer: "AWS Academy", icon: "🗄️" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav>
        <div className="nav-logo">VK</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" style={{ maxWidth: "100%", padding: 0 }}>
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            Available for Opportunities
          </div>
          <h1 className="hero-name">
            <span>Vikas</span>
          </h1>
          <p className="hero-title">
            B.Tech Student in <strong>Computer Science & AI</strong>
            <br />Java Full Stack Developer · Problem Solver · Builder
          </p>
          <div className="hero-contacts">
            <a href="mailto:vikas2227031583@gmail.com" className="contact-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              vikas2227031583@gmail.com
            </a>
            <a href="tel:+918471089518" className="contact-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91 8471089518
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-chip">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="contact-chip">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
              LeetCode
            </a>
          </div>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m9 18 6-6-6-6"/>
              </svg>
              View Projects
            </a>
            <a href="mailto:vikas2227031583@gmail.com" className="btn-outline">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="scroll-indicator">scroll</div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="section-header reveal">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">Who I <em>Am</em></h2>
          <div className="section-line" />
        </div>
        <div className="about-grid reveal">
          <div className="about-text">
            <p>
              I'm <strong>Vikas</strong>, a second-year B.Tech student specializing in{" "}
              <strong>Computer Science and Artificial Intelligence</strong> at Galgotias College
              of Engineering and Technology (2023–2027).
            </p>
            <p>
              Passionate about full-stack development, I completed an <strong>AICTE Java Full Stack Developer Internship</strong>{" "}
              where I built real-world web applications — from backend Java development to database-driven systems.
            </p>
            <p>
              I love solving problems through code — whether it's data structures on LeetCode,
              building management systems, or designing user-friendly interfaces. I'm always
              learning and pushing my skills forward.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-num">2+</div>
              <div className="stat-label">Years Coding</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">5+</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">2</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">6+</div>
              <div className="stat-label">Tech Skills</div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <div style={{ padding: "0 40px" }}>
        <section id="skills" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-header reveal">
            <div className="section-tag">Skills</div>
            <h2 className="section-title">Technical <em>Expertise</em></h2>
            <div className="section-line" />
          </div>
          <div className="skills-grid reveal">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              {skills.slice(0, 4).map((s) => (
                <div className="skill-item" key={s.name}>
                  <div className="skill-top">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-pct">{s.pct}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="skill-category">
              <h3>Web Development & Core CS</h3>
              {skills.slice(4).map((s) => (
                <div className="skill-item" key={s.name}>
                  <div className="skill-top">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-pct">{s.pct}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal" style={{ marginTop: "40px" }}>
            <h3 style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--primary)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "16px" }}>
              Core Areas
            </h3>
            <div className="tech-tags">
              {["OOP Concepts", "Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Full Stack Development"].map((t) => (
                <span className="tech-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="section-header reveal">
          <div className="section-tag">Experience</div>
          <h2 className="section-title">Work <em>Experience</em></h2>
          <div className="section-line" />
        </div>
        <div className="timeline reveal">
          <div className="timeline-item">
            <div className="timeline-header">
              <div>
                <div className="timeline-role">Java Full Stack Developer Intern</div>
                <div className="timeline-org">AICTE Internship Program</div>
              </div>
              <div className="timeline-date">Oct 2025 – Jan 2026</div>
            </div>
            <p className="timeline-desc">
              Completed an intensive internship program focused on full-stack web development
              using Java. Gained hands-on experience building complete web applications from
              frontend to backend, working with databases, and implementing core software
              engineering practices. Ideal for students with basic programming knowledge,
              the program covered project development lifecycle end-to-end.
            </p>
            <div className="timeline-tags">
              <span className="timeline-tag">Java</span>
              <span className="timeline-tag">HTML</span>
              <span className="timeline-tag">CSS</span>
              <span className="timeline-tag">JavaScript</span>
              <span className="timeline-tag">MySQL</span>
              <span className="timeline-tag">Full Stack</span>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ paddingTop: 0 }}>
        <div className="section-header reveal">
          <div className="section-tag">Education</div>
          <h2 className="section-title">Academic <em>Journey</em></h2>
          <div className="section-line" />
        </div>
        <div className="timeline reveal">
          <div className="timeline-item">
            <div className="timeline-header">
              <div>
                <div className="timeline-role">B.Tech — Computer Science & Artificial Intelligence</div>
                <div className="timeline-org">Galgotias College of Engineering and Technology</div>
              </div>
              <div className="timeline-date">2023 – 2027</div>
            </div>
            <p className="timeline-desc">
              Pursuing a Bachelor's degree in Computer Science with a specialization in
              Artificial Intelligence. Building a strong foundation in programming, algorithms,
              data structures, machine learning fundamentals, and software engineering.
            </p>
            <div className="timeline-tags">
              <span className="timeline-tag">Computer Science</span>
              <span className="timeline-tag">Artificial Intelligence</span>
              <span className="timeline-tag">B.Tech</span>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-header">
              <div>
                <div className="timeline-role">Intermediate (10+2)</div>
                <div className="timeline-org">MPIC Rudhauli, Basti</div>
              </div>
              <div className="timeline-date">2020 – 2022</div>
            </div>
            <p className="timeline-desc">
              Completed higher secondary education with focus on Science and Mathematics,
              building the analytical foundation for engineering studies.
            </p>
          </div>
          <div className="timeline-item">
            <div className="timeline-header">
              <div>
                <div className="timeline-role">High School</div>
                <div className="timeline-org">MPIC Rudhauli, Basti</div>
              </div>
              <div className="timeline-date">2018 – 2020</div>
            </div>
            <p className="timeline-desc">
              Completed secondary education with strong academic performance, developing
              early interest in computers and mathematics.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-header reveal">
          <div className="section-tag">Projects</div>
          <h2 className="section-title">What I've <em>Built</em></h2>
          <div className="section-line" />
        </div>
        <div className="projects-grid reveal">
          <div className="project-card">
            <div className="project-num">PROJECT 01</div>
            <div className="project-icon">🏧</div>
            <h3 className="project-title">ATM Management System</h3>
            <p className="project-desc">
              A fully functional ATM simulation system built with Java Swing/AWT for a
              rich graphical interface and SQL for database management. Simulates core
              ATM functionalities including cash withdrawal, deposit, balance inquiry,
              and secure user authentication — replicating real-world banking flows.
            </p>
            <div className="project-tech">
              <span>Java</span>
              <span>Swing / AWT</span>
              <span>SQL</span>
              <span>JDBC</span>
              <span>GUI Development</span>
            </div>
          </div>
          <div className="project-card">
            <div className="project-num">PROJECT 02</div>
            <div className="project-icon">✈️</div>
            <h3 className="project-title">Travel & Tourism Management System</h3>
            <p className="project-desc">
              A comprehensive travel agency management platform that streamlines booking
              and management processes. Features include tour search, booking management,
              customer information management, report generation, user authentication,
              tour management, and payment processing modules.
            </p>
            <div className="project-tech">
              <span>Java</span>
              <span>SQL</span>
              <span>Authentication</span>
              <span>Booking System</span>
              <span>Reporting</span>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <div style={{ padding: "0 40px" }}>
        <section id="certifications" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-header reveal">
            <div className="section-tag">Certifications</div>
            <h2 className="section-title">Earned <em>Credentials</em></h2>
            <div className="section-line" />
          </div>
          <div className="certs-grid reveal">
            {certs.map((c) => (
              <div className="cert-card" key={c.name}>
                <div className="cert-icon">{c.icon}</div>
                <div className="cert-info">
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-issuer">{c.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-name">Vikas</div>
        <p className="footer-sub">CS & AI Student · Java Full Stack Developer · Open to Opportunities</p>
        <div className="footer-links">
          <a href="mailto:vikas2227031583@gmail.com">Email</a>
          <a href="tel:+918471089518">Phone</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://leetcode.com" target="_blank" rel="noreferrer">LeetCode</a>
          <a href="https://geeksforgeeks.org" target="_blank" rel="noreferrer">GFG</a>
        </div>
        <p className="footer-copy">© 2025 Vikas. Built with passion using React + Vite.</p>
      </footer>
    </>
  );
}
