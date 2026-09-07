import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Blocks,
  Braces,
  Check,
  ChevronRight,
  CircleCheck,
  Code2,
  Command,
  Cpu,
  ExternalLink,
  Gamepad2,
  Github,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
  X,
  Zap,
} from "lucide-react";

const storage = {
  waves: "/manus-storage/ocean-waves_979265a7.gif",
  avatar: "/manus-storage/avatar-ocean_3d805b42.jpg",
  avatarCasual: "/manus-storage/avatar-casual_f2a126f6.jpg",
};

const services = [
  {
    icon: Server,
    index: "01",
    title: "Server Architecture",
    description:
      "Fondasi server yang rapi, stabil, dan siap tumbuh—dari setup proxy sampai optimasi performa.",
    tags: ["Paper / Purpur", "Velocity", "Linux"],
  },
  {
    icon: Blocks,
    index: "02",
    title: "Custom Gameplay",
    description:
      "Mode permainan, progression, dan sistem yang bikin pemain punya alasan untuk kembali setiap hari.",
    tags: ["SMP Systems", "Minigames", "Economy"],
  },
  {
    icon: Braces,
    index: "03",
    title: "Plugin & Integration",
    description:
      "Integrasi plugin yang saling bicara dengan baik, plus fitur custom yang terasa native di server.",
    tags: ["Java", "API Integration", "Webhooks"],
  },
];

const projects = [
  {
    number: "01",
    type: "NETWORK BUILD",
    title: "Astra SMP",
    description: "Survival economy dengan progression musiman dan komunitas yang terasa dekat.",
    tags: ["Gameplay", "Economy", "Community"],
    tone: "project-sky",
  },
  {
    number: "02",
    type: "SYSTEM DESIGN",
    title: "Bluehaven Network",
    description: "Network multi-server dengan matchmaking cepat dan fondasi yang mudah di-maintain.",
    tags: ["Velocity", "Proxy", "Scaling"],
    tone: "project-deep",
  },
  {
    number: "03",
    type: "CUSTOM PLUGIN",
    title: "TideQuests",
    description: "Quest engine modular untuk membuat konten baru tanpa mengulang pekerjaan dari nol.",
    tags: ["Java", "Paper API", "UX"],
    tone: "project-cyan",
  },
];

const benefits = [
  "Kode terstruktur dan mudah dilanjutkan",
  "Fokus pada performa dan pengalaman pemain",
  "Komunikasi yang jelas, tanpa jargon berlebihan",
  "Dokumentasi dan handover yang siap dipakai",
];

const buildModes = [
  {
    id: "foundation",
    label: "Foundation",
    icon: Server,
    title: "Server yang tetap tenang saat ramai.",
    description: "Mulai dari fondasi yang rapi: struktur proxy, permission, storage, dan monitoring yang siap mengimbangi pertumbuhan pemain.",
    metric: "01 / stable core",
    points: ["Paper / Purpur tuning", "Proxy & network flow", "Backups & observability"],
  },
  {
    id: "experience",
    label: "Experience",
    icon: Gamepad2,
    title: "Gameplay yang punya alasan untuk kembali.",
    description: "Setiap fitur harus terasa jelas bagi pemain—dari first join sampai progression panjang yang tetap menyenangkan.",
    metric: "02 / player loop",
    points: ["Progression systems", "Economy balance", "Onboarding yang jelas"],
  },
  {
    id: "polish",
    label: "Polish",
    icon: Sparkles,
    title: "Detail kecil yang membuat server terasa beda.",
    description: "Feedback, command, UI, dan integrasi yang halus membuat kualitas server terasa tanpa harus berteriak.",
    metric: "03 / final layer",
    points: ["Custom plugin UX", "Discord integrations", "Clean handover"],
  },
];

function LogoMark() {
  return (
    <div className="logo-mark" aria-hidden="true">
      <span className="logo-pixel logo-pixel-one" />
      <span className="logo-pixel logo-pixel-two" />
      <span className="logo-pixel logo-pixel-three" />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMode, setActiveMode] = useState("foundation");

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-nav">
        <div className="nav-inner">
          <a className="brand" href="#top" onClick={closeMenu}>
            <LogoMark />
            <span>
              <strong>REIJI</strong>
              <em>KUROSE / DEV</em>
            </span>
          </a>

          <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Navigasi utama">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#about" onClick={closeMenu}>About me</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a className="nav-availability" href="#contact">
            <span className="status-dot" />
            Available for work
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-image" style={{ backgroundImage: `url(${storage.waves})` }} />
        <div className="hero-wash" />
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="hero-content page-wrap">
          <div className="hero-copy">
            <div className="eyebrow reveal-up">
              <span className="eyebrow-line" />
              <span>SERVER DEVELOPER / BUILDER</span>
              <Sparkles size={14} />
            </div>
            <h1 className="reveal-up delay-one">
              Minecraft server
              <span className="title-accent"> yang terasa hidup.</span>
            </h1>
            <p className="hero-description reveal-up delay-two">
              Saya merancang sistem, gameplay, dan pengalaman multiplayer yang membuat server terasa punya karakter—bukan sekadar kumpulan plugin.
            </p>
            <div className="hero-actions reveal-up delay-three">
              <a className="button button-primary" href="#contact">
                <MessageCircle size={17} />
                Mulai ngobrol
                <ArrowUpRight size={17} />
              </a>
              <a className="button button-ghost" href="#about">
                Kenali saya
                <ChevronRight size={17} />
              </a>
            </div>
            <div className="hero-proof reveal-up delay-four">
              <div className="proof-avatars">
                <img src={storage.avatar} alt="Avatar developer" />
                <span><Users size={14} /></span>
              </div>
              <p><strong>Built with care.</strong><br />Untuk server yang ingin diingat.</p>
            </div>
          </div>

          <div className="hero-console reveal-scale">
            <div className="console-glow" />
            <div className="console-card">
              <div className="console-topbar">
                <div className="console-dots"><i /><i /><i /></div>
                <span className="console-label"><Terminal size={13} /> live build.log</span>
                <span className="console-status"><span className="status-dot" /> online</span>
              </div>
              <div className="console-body">
                <div className="console-avatar-wrap">
                  <img src={storage.avatar} alt="Developer profile" className="console-avatar" />
                  <span className="avatar-ring" />
                </div>
                <div className="console-intro">
                  <span className="console-kicker">HELLO, I&apos;M</span>
                  <h2>Reiji<span>.</span></h2>
                  <p>building worlds<br />one system at a time</p>
                </div>
                <div className="console-readout">
                  <div><span>focus</span><strong>gameplay</strong></div>
                  <div><span>stack</span><strong>java / paper</strong></div>
                  <div><span>mode</span><strong className="online-text">shipping</strong></div>
                </div>
              </div>
              <div className="console-code">
                <span className="code-muted">01</span><span className="code-key">server</span><span className="code-bracket">.</span><span className="code-fn">makeItFeel</span><span className="code-bracket">(</span><span className="code-string">&quot;alive&quot;</span><span className="code-bracket">)</span>
                <span className="code-cursor" />
              </div>
              <div className="console-footer"><span><Zap size={13} /> low latency mindset</span><span>v.2026</span></div>
            </div>
          </div>
        </div>

        <div className="hero-bottom page-wrap">
          <a className="scroll-cue" href="#services"><ArrowDown size={15} /> scroll to explore</a>
          <div className="hero-side-note"><span>01</span><span className="side-line" /><span>intro</span></div>
        </div>
      </section>

      <section className="signal-section">
        <div className="page-wrap signal-inner">
          <div className="signal-label"><span className="signal-dash" /> WHAT I BRING TO THE TABLE</div>
          <div className="signal-stats">
            <div className="signal-stat"><strong>06<span>+</span></strong><span>systems shipped</span></div>
            <div className="signal-stat"><strong>24<span>/7</span></strong><span>builder mindset</span></div>
            <div className="signal-stat"><strong>100<span>%</span></strong><span>care for details</span></div>
          </div>
        </div>
      </section>

      <section id="services" className="section light-section services-section">
        <div className="page-wrap">
          <div className="section-heading heading-split">
            <div>
              <div className="section-kicker">/ CAPABILITIES</div>
              <h2>Lebih dari sekadar<br /><span>menyalakan server.</span></h2>
            </div>
            <p>Saya membantu mengubah ide server menjadi pengalaman yang solid, seru, dan siap berkembang bersama komunitasnya.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.index}>
                  <div className="service-card-top"><span>{service.index}</span><Icon size={23} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="tag-row">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="service-arrow"><ArrowUpRight size={17} /></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="blueprint-section">
        <div className="blueprint-grid-lines" />
        <div className="page-wrap blueprint-layout">
          <div className="blueprint-intro">
            <div className="section-kicker blueprint-kicker">/ HOW I THINK</div>
            <h2>Server yang bagus<br /><span>punya blueprint.</span></h2>
            <p>Bukan semua server perlu hal yang sama. Pilih layer yang ingin Anda kuatkan—saya mulai dari masalahnya, bukan dari plugin yang sedang tren.</p>
            <div className="blueprint-sign"><span className="status-dot" /> system thinking / player empathy</div>
          </div>

          <div className="blueprint-console">
            <div className="blueprint-tabs" role="tablist" aria-label="Server blueprint focus">
              {buildModes.map((mode) => {
                const Icon = mode.icon;
                return (
                  <button key={mode.id} className={activeMode === mode.id ? "blueprint-tab active" : "blueprint-tab"} type="button" role="tab" aria-selected={activeMode === mode.id} onClick={() => setActiveMode(mode.id)}>
                    <Icon size={15} /> {mode.label}
                  </button>
                );
              })}
            </div>
            {buildModes.map((mode) => {
              const Icon = mode.icon;
              return activeMode === mode.id ? (
                <div className="blueprint-panel" key={mode.id}>
                  <div className="blueprint-panel-top"><span className="blueprint-mode"><Icon size={14} /> {mode.metric}</span><span className="blueprint-live"><span className="status-dot" /> thinking in layers</span></div>
                  <h3>{mode.title}</h3>
                  <p>{mode.description}</p>
                  <div className="blueprint-points">{mode.points.map((point, index) => <div key={point}><span>0{index + 1}</span>{point}<Check size={14} /></div>)}</div>
                  <div className="blueprint-footer"><span>reiji.kurose / build-notes</span><span>●●●</span></div>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="page-wrap about-grid">
          <div className="about-visual">
            <div className="about-image-frame">
              <img src={storage.avatarCasual} alt="Developer duduk santai di dekat laut" />
              <div className="image-label"><span className="status-dot" /> based somewhere by the sea</div>
            </div>
            <div className="about-float-card"><Gamepad2 size={20} /><span>crafting<br /><strong>player-first</strong><br />experiences</span></div>
          </div>
          <div className="about-copy">
            <div className="section-kicker">/ A LITTLE ABOUT ME</div>
            <h2>Teknis saat perlu.<br /><span>Santai saat bisa.</span></h2>
            <p className="about-lead">Saya seorang developer yang senang mengurus hal-hal di balik layar—sistem yang tidak terlihat, tapi terasa ketika semuanya berjalan mulus.</p>
            <div className="benefit-list">
              {benefits.map((benefit) => <div className="benefit-item" key={benefit}><span><Check size={14} /></span>{benefit}</div>)}
            </div>
            <div className="about-signature"><div className="signature-line" /><span>Aqua / Minecraft server developer</span></div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-noise" />
        <div className="page-wrap contact-inner">
          <div className="contact-copy">
            <div className="section-kicker light-kicker">/ HAVE A SERVER IN MIND?</div>
            <h2>Let&apos;s build a world<br /><span>worth staying in.</span></h2>
            <p>Ceritakan sedikit tentang server, mode permainan, atau masalah yang sedang Anda hadapi. Kita mulai dari sana.</p>
            <div className="contact-links">
              <a href="mailto:hello@yourdomain.com"><Mail size={17} /> hello@yourdomain.com <ArrowUpRight size={15} /></a>
              <a href="#contact"><MessageCircle size={17} /> Discord / username <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card-top"><span>START A CONVERSATION</span><span className="card-index">/ 04</span></div>
            <div className="contact-card-icon"><Rocket size={26} /></div>
            <h3>Punya ide yang ingin<br /><span>dibawa online?</span></h3>
            <p>Slot untuk project baru tersedia. Kirim brief singkat, saya akan membalas dengan langkah pertama yang paling masuk akal.</p>
            <a className="button button-dark" href="mailto:hello@yourdomain.com?subject=Project%20Minecraft%20Server"><Mail size={17} /> Kirim brief project <ArrowUpRight size={17} /></a>
            <div className="contact-trust"><CircleCheck size={15} /> No pressure. Just a good first chat.</div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-wrap footer-inner">
          <div className="footer-brand"><LogoMark /><span>REIJI <em>KUROSE / DEV</em></span></div>
          <p>Designed &amp; built with curiosity, caffeine, and clean code.</p>
          <div className="footer-right"><span>© 2026 Aqua</span><a href="#top" aria-label="Kembali ke atas"><ArrowDown size={15} className="rotate-up" /></a></div>
        </div>
      </footer>
    </main>
  );
}
