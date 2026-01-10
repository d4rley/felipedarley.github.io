import { useState } from "react";
import Accordion from "./components/Accordion";
import "./App.css";
import { Github, Linkedin, Mail, Phone, Instagram } from "lucide-react";


// FLAGS
import brasilFlag from "./assets/brasil.png";
import euaFlag from "./assets/eua.png";

function App() {
  const isMobile = window.innerWidth <= 768;
  const [openIndex, setOpenIndex] = useState(null);
  const [rightView, setRightView] = useState("about");
  const [lang, setLang] = useState("pt");

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const t = {
    pt: {
      role: "🧠 Desenvolvedor Full Stack com foco em Backend",

      accBackend: "Backend (foco principal)",
      accFrontend: "Frontend",
      accInfra: "Infra / Outros",

      aboutTitle: "👋 Sobre mim",
      about1:
        "Sou desenvolvedor Full Stack com foco em Backend, com experiência em construção de APIs REST, integrações de pagamento e aplicações escaláveis.",
      about2:
        "Trabalho principalmente com PHP e Laravel, cuidando de toda a camada servidor, banco de dados e infraestrutura básica.",
      about3:
        "Tenho familiaridade com React no frontend e com ambientes Linux/VPS, utilizando Nginx, PM2 e Git no dia a dia.",

      viewProjects: "Ver projetos →",//
      project2: "API de Pagamentos",
      project3: "Sistema Administrativo",
      totocoin: "Plataforma financeira com integração Pix.",
      apipay: "API REST para pagamentos e webhooks.",
      sispay: "Dashboard administrativo integrado à API.",
      projects: "🚀 Projetos",
      viewProject: "Visualizar projeto",
      back: "← Voltar",
      experienceBtn: "Experiências →",
      videoText:
        "Demonstração em vídeo do funcionamento da plataforma Totocoin, evidenciando a integração Pix, o fluxo de pagamentos e a estrutura da aplicação.",


      experienceTitle: "💼 Experiências",
      exp1Title: "2024 — Backend Developer | Bendegó",
      exp1Desc: "• APIs REST • Integrações • Manutenção de sistemas",
      exp2Title: "2023 — Developer | Blick",
      exp2Desc: "• PHP / Laravel • Sistemas internos",
      backProjects: "← Voltar aos projetos",
    },

    en: {
      role: "🧠 Full Stack Developer focused on Backend",

      accBackend: "Backend (main focus)",
      accFrontend: "Frontend",
      accInfra: "Infrastructure / Others",

      aboutTitle: "👋 About me",
      about1:
        "Full Stack Developer focused on Backend, with experience building REST APIs, payment integrations and scalable applications.",
      about2:
        "I mainly work with PHP and Laravel, handling server-side logic, databases and infrastructure.",
      about3:
        "I have experience with React on the frontend and Linux/VPS environments, using Nginx, PM2 and Git daily.",

      viewProjects: "View projects →",//
      project2: "Payment Processing API",
      project3: "Administrative Management System",
      totocoin: "Financial platform with Pix integration.",
      apipay: "REST API for payments and webhooks.",
      sispay: "Administrative dashboard integrated with the API.",
      projects: "🚀 Projects",
      viewProject: "View project",
      back: "← Back",
      experienceBtn: "Experience →",
      videoText:
        "Video demonstration of the Totocoin platform, highlighting Pix integration, payment flow, and overall application structure.",


      experienceTitle: "💼 Experience",
      exp1Title: "2024 — Backend Developer | Bendegó",
      exp1Desc: "• REST APIs • Integrations • System maintenance",
      exp2Title: "2023 — Developer | Blick",
      exp2Desc: "• PHP / Laravel • Internal systems",
      backProjects: "← Back to projects",
    },
  };

  return (
    <div className="page">
      {/* ===== LANGUAGE FLAGS ===== */}
      <div className="lang-flags">
        <button
          className={lang === "pt" ? "active" : ""}
          onClick={() => setLang("pt")}
          aria-label="Português"
        >
          <img src={brasilFlag} alt="Português" />
        </button>

        <button
          className={lang === "en" ? "active" : ""}
          onClick={() => setLang("en")}
          aria-label="English"
        >
          <img src={euaFlag} alt="English" />
        </button>
      </div>

      {/* ================= LEFT ================= */}
      <div className="container">
        <div className="profile-card">
          <h1>Felipe Darley</h1>
          <p className="cargo">{t[lang].role}</p>

          <div className="stack">
            <Accordion
              icon="⚙️"
              title={t[lang].accBackend}
              open={openIndex === 0}
              onToggle={() => toggleAccordion(0)}
            >
              <ul>
                <li>PHP</li>
                <li>Laravel</li>
                <li>MySQL</li>
                <li>APIs REST</li>
                <li>Pix</li>
              </ul>
            </Accordion>

            <Accordion
              icon="🎨"
              title={t[lang].accFrontend}
              open={openIndex === 1}
              onToggle={() => toggleAccordion(1)}
            >
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML / CSS</li>
              </ul>
            </Accordion>

            <Accordion
              icon="🛠️"
              title={t[lang].accInfra}
              open={openIndex === 2}
              onToggle={() => toggleAccordion(2)}
            >
              <ul>
                <li>Linux / VPS</li>
                <li>Nginx</li>
                <li>PM2</li>
                <li>Git</li>
              </ul>
            </Accordion>
          </div>
        </div>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="right-area">
        <div className={`right-slider ${rightView}`}>
          {/* ABOUT */}
          <div className="right-panel">
            <div className="about-card">
              <div className="socials">
                <div className="socials">
                  <a
                    href="https://github.com/d4rley"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <Github />
                  </a>

                  <a
                    href="https://instagram.com/fe_darley"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/felipe-pontes-290a4120b/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin />
                  </a>

                  <a
                    href="mailto:felipedarley72@gmail.com"
                    aria-label="Email"
                  >
                    <Mail />
                  </a>

                  <a
                    href="https://wa.me/5584988860352"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                  >
                    <Phone />
                  </a>
                </div>

              </div>

              <h2>{t[lang].aboutTitle}</h2>
              <p>{t[lang].about1}</p>
              <p>{t[lang].about2}</p>
              <p>{t[lang].about3}</p>

              <button
                className="link-button"
                onClick={() => setRightView("projects")}
              >
                {t[lang].viewProjects}
              </button>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="right-panel">
            <div className="projects-card">
              <h2>{t[lang].projects}</h2>

              <div className="project">
                <div className="project-header">
                  <h3>Totocoin</h3>
                  <button
                    className="mini-button"
                    onClick={() => setRightView("totocoin")}
                  >
                    {t[lang].viewProject}
                  </button>
                </div>
                <p className="cargo">{t[lang].totocoin}</p>
                <span>PHP • Laravel • MySQL • Pix</span>
              </div>

              <div className="project">
                <h3 className="cargo">{t[lang].project2}</h3>
                <p className="cargo">{t[lang].apipay}</p>
                <span>Laravel • MySQL • API REST</span>
              </div>

              <div className="project">
                <h3 className="cargo">{t[lang].project3}</h3>
                <p className="cargo">{t[lang].sispay}</p>
                <span>React • API REST</span>
              </div>

              <div className="projects-actions">
                <button
                  className="link-button"
                  onClick={() => setRightView("about")}
                >
                  {t[lang].back}
                </button>

                <button
                  className="link-button"
                  onClick={() => setRightView("experience")}
                >
                  {t[lang].experienceBtn}
                </button>
              </div>
            </div>
          </div>

          {/* TOT0COIN VIDEO */}
          <div className="right-panel">
            <div className="projects-card">
              <h2>🚀 Totocoin</h2>

              <div className="project-video">
                <iframe
                  src="https://www.youtube.com/embed/n6yRSZpQPUk"
                  title="Totocoin"
                  allowFullScreen
                />
              </div><p className="video-description">
                {t[lang].videoText}
              </p>

              <button
                className="link-button"
                onClick={() => setRightView("projects")}
              >
                {t[lang].back}
              </button>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="right-panel">
            <div className="projects-card">
              <h2>{t[lang].experienceTitle}</h2>

              <div className="project">
                <h3>{t[lang].exp1Title}</h3>
                <p>{t[lang].exp1Desc}</p>
                <span>PHP • Laravel • MySQL • React</span>
              </div>

              <div className="project">
                <h3>{t[lang].exp2Title}</h3>
                <p>{t[lang].exp2Desc}</p>
                <span>PHP • Laravel • MySQL</span>
              </div>

              <button
                className="link-button"
                onClick={() => setRightView("projects")}
              >
                {t[lang].backProjects}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
