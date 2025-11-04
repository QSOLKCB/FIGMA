import EQCSection from "./components/EQCSection";
import QROMQutritSection from "./components/QROMQutritSection";
import QDSPSection from "./components/QDSPSection";
import QVSPSection from "./components/QVSPSection";
import ReactSection from "./components/ReactSection";

export default function App() {
  return (
    <div className="qsol-emulator">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .qsol-emulator {
          min-height: 100vh;
          background: #0b0b12;
          color: #e0e0e0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          display: flex;
          flex-direction: column;
        }

        .qsol-header {
          background: linear-gradient(135deg, #1a1a2e 0%, #16161f 100%);
          border-bottom: 2px solid #4ef0f8;
          padding: 1.5rem 2rem;
          text-align: center;
        }

        .qsol-header h1 {
          color: #4ef0f8;
          font-size: 1.8rem;
          letter-spacing: 0.05em;
          text-shadow: 0 0 10px rgba(78, 240, 248, 0.3);
        }

        .qsol-main {
          flex: 1;
          padding: 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
          max-width: 2000px;
          margin: 0 auto;
          width: 100%;
        }



        .qsol-footer {
          background: #16161f;
          border-top: 2px solid #4ef0f8;
          padding: 1.5rem 2rem;
          text-align: center;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
          justify-content: center;
          align-items: center;
        }

        .footer-links a {
          color: #4ef0f8;
          text-decoration: none;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-links a:hover {
          color: #b16cff;
          text-shadow: 0 0 10px rgba(177, 108, 255, 0.5);
        }

        @media (max-width: 900px) {
          .qsol-main {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header className="qsol-header">
        <h1>⚔️ CHOOSE YOUR FIGHTER ⚔️</h1>
        <p style={{ marginTop: '0.5rem', color: '#8fb4b8', fontSize: '0.9rem' }}>
          Programming Language Battle Royale
        </p>
      </header>

      <main className="qsol-main">
        <EQCSection />
        <QROMQutritSection />
        <QDSPSection />
        <ReactSection />
        <QVSPSection />
      </main>

      <footer className="qsol-footer">
        <div className="footer-links">
          <a href="https://github.com/QSOLKCB/QEC" target="_blank" rel="noopener noreferrer">
            <span>→</span> Made with questionable choices
          </a>
          <a href="https://github.com/QSOLKCB/QDSP" target="_blank" rel="noopener noreferrer">
            <span>→</span> Powered by caffeine & regret
          </a>
        </div>
      </footer>
    </div>
  );
}
