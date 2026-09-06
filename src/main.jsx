import React, { useRef } from "react";
import { createRoot } from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import "./styles.css";

function Orb() {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = t * 0.12;
      ref.current.rotation.y = t * 0.18;
      ref.current.position.y = Math.sin(t * 0.7) * 0.12;
    }
  });
  return (
    <Float speed={1.3} rotationIntensity={0.35} floatIntensity={0.55}>
      <mesh ref={ref} scale={1.7}>
        <icosahedronGeometry args={[1, 5]} />
        <MeshDistortMaterial
          color="#d9ff54"
          roughness={0.18}
          metalness={0.55}
          distort={0.24}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5.4], fov: 42 }} dpr={[1, 2]}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 4, 5]} intensity={2.4} />
      <pointLight position={[-4, -2, 3]} intensity={12} distance={10} />
      <Orb />
      <Environment preset="studio" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
    </Canvas>
  );
}

const projects = [
  {
    n: "01",
    title: "Berger Paints — Fundamental Analysis",
    text: "A business and financial analysis covering company fundamentals, profitability, leverage, industry position and long-term growth factors."
  },
  {
    n: "02",
    title: "AI-Driven Recruitment Research",
    text: "Academic research exploring how artificial intelligence can support recruitment processes, screening and hiring decisions."
  },
  {
    n: "03",
    title: "Digital Content & Social Media",
    text: "Practical work involving Instagram content management, visual communication, video editing and social-media content creation."
  }
];

function App() {
  return (
    <div className="site">
      <header className="nav">
        <a className="logo" href="#home">CF<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="navBtn" href="#contact">Let's talk ↗</a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="heroCopy">
            <p className="eyebrow">MBA · MARKETING & FINANCE</p>
            <h1>CLIVE<br/><em>FERNANDES</em></h1>
            <p className="heroText">
              Business, marketing and finance graduate with an interest in operations,
              digital content and practical business research.
            </p>
            <div className="actions">
              <a className="primary" href="#projects">Explore my work ↓</a>
              <a className="secondary" href="#about">About me</a>
            </div>
          </div>
          <div className="orb"><Scene /></div>
          <div className="scroll">SCROLL TO EXPLORE ↓</div>
        </section>

        <section id="about" className="section about">
          <div className="sectionNo">01 / ABOUT</div>
          <div>
            <h2>Curious mind.<br/><span>Practical approach.</span></h2>
            <p className="lead">
              I’m Clive Nelson Fernandes, an MBA graduate in Marketing & Finance.
              I enjoy combining business thinking with creative communication and
              hands-on project work.
            </p>
            <p>
              My experience includes digital-marketing training, Instagram content
              management, video editing and event photography/videography. I also
              enjoy academic research and business analysis.
            </p>
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="sectionNo">02 / SKILLS</div>
          <div className="skillGrid">
            {["Marketing", "Finance", "Business Research", "Canva", "Adobe Premiere Pro", "Social Media", "Content Creation", "Photography / Videography"].map((s, i) => (
              <div className="skill" key={s}><span>0{i+1}</span>{s}<b>↗</b></div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="sectionNo">03 / SELECTED WORK</div>
          <div className="projectList">
            {projects.map(p => (
              <article className="project" key={p.n}>
                <div className="projectNo">{p.n}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
                <div className="arrow">↗</div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="sectionNo">04 / EXPERIENCE</div>
          <div>
            <div className="timeline">
              <div className="timeItem">
                <span>INTERNSHIP</span>
                <h3>Instagram Content Management</h3>
                <p>Managed and supported Instagram content as part of practical digital-marketing experience.</p>
              </div>
              <div className="timeItem">
                <span>EDUCATION</span>
                <h3>MBA — Marketing & Finance</h3>
                <p>Postgraduate business education with focus across marketing and finance.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="eyebrow">05 / CONTACT</p>
          <h2>LET'S CREATE<br/><em>SOMETHING USEFUL.</em></h2>
          <p>Interested in connecting about opportunities, projects or collaborations?</p>
          <a className="contactBtn" href="mailto:YOUR-EMAIL@example.com">YOUR-EMAIL@example.com ↗</a>
          <div className="socials">
            <a href="https://www.linkedin.com/" target="_blank">LinkedIn ↗</a>
            <a href="https://github.com/" target="_blank">GitHub ↗</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 CLIVE FERNANDES</span>
        <span>BUILT WITH REACT + THREE.JS</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
