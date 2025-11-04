export default function EQCSection() {
  return (
    <section className="eqc-track-section">
      <style>{`
        .eqc-track-section {
          background: #16161f;
          border: 1px solid #4ef0f8;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(78, 240, 248, 0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .eqc-track-section:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(78, 240, 248, 0.2);
        }

        .eqc-track-title {
          background: rgba(78, 240, 248, 0.1);
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(78, 240, 248, 0.3);
        }

        .eqc-track-title h2 {
          color: #4ef0f8;
          font-size: 1.2rem;
          letter-spacing: 0.03em;
          margin: 0;
        }

        .eqc-subtitle {
          color: #8fb4b8;
          font-size: 0.85rem;
          margin-top: 0.25rem;
          font-style: italic;
        }

        .eqc-track-content {
          padding: 1.5rem;
        }

        .eqc-stats {
          background: #0b0b12;
          border: 1px solid rgba(78, 240, 248, 0.2);
          border-radius: 4px;
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .eqc-stat-bar {
          margin-bottom: 0.75rem;
        }

        .eqc-stat-label {
          color: #4ef0f8;
          font-size: 0.8rem;
          margin-bottom: 0.25rem;
          display: flex;
          justify-content: space-between;
        }

        .eqc-stat-fill {
          height: 8px;
          background: rgba(78, 240, 248, 0.2);
          border-radius: 4px;
          overflow: hidden;
        }

        .eqc-stat-inner {
          height: 100%;
          background: linear-gradient(90deg, #4ef0f8, #2d9da8);
          transition: width 0.3s;
        }

        .eqc-run-button {
          width: 100%;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #4ef0f8 0%, #2d9da8 100%);
          border: none;
          border-radius: 4px;
          color: #0b0b12;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .eqc-run-button:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 15px rgba(78, 240, 248, 0.4);
        }
      `}</style>

      <div className="eqc-track-title">
        <h2>🐍 PYTHON</h2>
        <div className="eqc-subtitle">"It works, but why is it so slow?"</div>
      </div>
      <div className="eqc-track-content">
        <div className="eqc-stats">
          <div className="eqc-stat-bar">
            <div className="eqc-stat-label">
              <span>Readability</span>
              <span>95%</span>
            </div>
            <div className="eqc-stat-fill">
              <div className="eqc-stat-inner" style={{ width: '95%' }}></div>
            </div>
          </div>

          <div className="eqc-stat-bar">
            <div className="eqc-stat-label">
              <span>Speed</span>
              <span>12%</span>
            </div>
            <div className="eqc-stat-fill">
              <div className="eqc-stat-inner" style={{ width: '12%' }}></div>
            </div>
          </div>

          <div className="eqc-stat-bar">
            <div className="eqc-stat-label">
              <span>Library Ecosystem</span>
              <span>99%</span>
            </div>
            <div className="eqc-stat-fill">
              <div className="eqc-stat-inner" style={{ width: '99%' }}></div>
            </div>
          </div>

          <div className="eqc-stat-bar">
            <div className="eqc-stat-label">
              <span>Whitespace Anxiety</span>
              <span>88%</span>
            </div>
            <div className="eqc-stat-fill">
              <div className="eqc-stat-inner" style={{ width: '88%' }}></div>
            </div>
          </div>
        </div>
        <button className="eqc-run-button">pip install everything</button>
      </div>
    </section>
  );
}
