export default function QDSPSection() {
  return (
    <section className="qdsp-track-section">
      <style>{`
        .qdsp-track-section {
          background: #16161f;
          border: 1px solid #ff6ec7;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(255, 110, 199, 0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .qdsp-track-section:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(255, 110, 199, 0.2);
        }

        .qdsp-track-title {
          background: rgba(255, 110, 199, 0.1);
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(255, 110, 199, 0.3);
        }

        .qdsp-track-title h2 {
          color: #ff6ec7;
          font-size: 1.2rem;
          letter-spacing: 0.03em;
          margin: 0;
        }

        .qdsp-subtitle {
          color: #ffb3e0;
          font-size: 0.85rem;
          margin-top: 0.25rem;
          font-style: italic;
        }

        .qdsp-track-content {
          padding: 1.5rem;
        }

        .qdsp-stats {
          background: #0b0b12;
          border: 1px solid rgba(255, 110, 199, 0.2);
          border-radius: 4px;
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .qdsp-stat-bar {
          margin-bottom: 0.75rem;
        }

        .qdsp-stat-label {
          color: #ff6ec7;
          font-size: 0.8rem;
          margin-bottom: 0.25rem;
          display: flex;
          justify-content: space-between;
        }

        .qdsp-stat-fill {
          height: 8px;
          background: rgba(255, 110, 199, 0.2);
          border-radius: 4px;
          overflow: hidden;
        }

        .qdsp-stat-inner {
          height: 100%;
          background: linear-gradient(90deg, #ff6ec7, #c8408f);
          transition: width 0.3s;
        }

        .qdsp-run-button {
          width: 100%;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #ff6ec7 0%, #c8408f 100%);
          border: none;
          border-radius: 4px;
          color: #0b0b12;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .qdsp-run-button:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 15px rgba(255, 110, 199, 0.4);
        }
      `}</style>

      <div className="qdsp-track-title">
        <h2>🦀 RUST</h2>
        <div className="qdsp-subtitle">"Fighting the borrow checker at 3 AM"</div>
      </div>
      <div className="qdsp-track-content">
        <div className="qdsp-stats">
          <div className="qdsp-stat-bar">
            <div className="qdsp-stat-label">
              <span>Memory Safety</span>
              <span>100%</span>
            </div>
            <div className="qdsp-stat-fill">
              <div className="qdsp-stat-inner" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="qdsp-stat-bar">
            <div className="qdsp-stat-label">
              <span>Compile Time</span>
              <span>94%</span>
            </div>
            <div className="qdsp-stat-fill">
              <div className="qdsp-stat-inner" style={{ width: '94%' }}></div>
            </div>
          </div>

          <div className="qdsp-stat-bar">
            <div className="qdsp-stat-label">
              <span>Beginner Friendliness</span>
              <span>3%</span>
            </div>
            <div className="qdsp-stat-fill">
              <div className="qdsp-stat-inner" style={{ width: '3%' }}></div>
            </div>
          </div>

          <div className="qdsp-stat-bar">
            <div className="qdsp-stat-label">
              <span>Feeling Superior</span>
              <span>101%</span>
            </div>
            <div className="qdsp-stat-fill">
              <div className="qdsp-stat-inner" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
        <button className="qdsp-run-button">cargo build --release</button>
      </div>
    </section>
  );
}
