export default function QROMQutritSection() {
  return (
    <section className="qrom-track-section">
      <style>{`
        .qrom-track-section {
          background: #16161f;
          border: 1px solid #b16cff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(177, 108, 255, 0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .qrom-track-section:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(177, 108, 255, 0.2);
        }

        .qrom-track-title {
          background: rgba(177, 108, 255, 0.1);
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(177, 108, 255, 0.3);
        }

        .qrom-track-title h2 {
          color: #b16cff;
          font-size: 1.2rem;
          letter-spacing: 0.03em;
          margin: 0;
        }

        .qrom-subtitle {
          color: #c9a3ff;
          font-size: 0.85rem;
          margin-top: 0.25rem;
          font-style: italic;
        }

        .qrom-track-content {
          padding: 1.5rem;
        }

        .qrom-stats {
          background: #0b0b12;
          border: 1px solid rgba(177, 108, 255, 0.2);
          border-radius: 4px;
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .qrom-stat-bar {
          margin-bottom: 0.75rem;
        }

        .qrom-stat-label {
          color: #b16cff;
          font-size: 0.8rem;
          margin-bottom: 0.25rem;
          display: flex;
          justify-content: space-between;
        }

        .qrom-stat-fill {
          height: 8px;
          background: rgba(177, 108, 255, 0.2);
          border-radius: 4px;
          overflow: hidden;
        }

        .qrom-stat-inner {
          height: 100%;
          background: linear-gradient(90deg, #b16cff, #7d3cb8);
          transition: width 0.3s;
        }

        .qrom-run-button {
          width: 100%;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #b16cff 0%, #7d3cb8 100%);
          border: none;
          border-radius: 4px;
          color: #0b0b12;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .qrom-run-button:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 15px rgba(177, 108, 255, 0.4);
        }
      `}</style>

      <div className="qrom-track-title">
        <h2>🟨 JAVASCRIPT</h2>
        <div className="qrom-subtitle">"undefined is not a function (at life:42)"</div>
      </div>
      <div className="qrom-track-content">
        <div className="qrom-stats">
          <div className="qrom-stat-bar">
            <div className="qrom-stat-label">
              <span>Chaos Level</span>
              <span>97%</span>
            </div>
            <div className="qrom-stat-fill">
              <div className="qrom-stat-inner" style={{ width: '97%' }}></div>
            </div>
          </div>

          <div className="qrom-stat-bar">
            <div className="qrom-stat-label">
              <span>Type Safety</span>
              <span>0%</span>
            </div>
            <div className="qrom-stat-fill">
              <div className="qrom-stat-inner" style={{ width: '0%' }}></div>
            </div>
          </div>

          <div className="qrom-stat-bar">
            <div className="qrom-stat-label">
              <span>Framework Fatigue</span>
              <span>∞%</span>
            </div>
            <div className="qrom-stat-fill">
              <div className="qrom-stat-inner" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="qrom-stat-bar">
            <div className="qrom-stat-label">
              <span>Array Methods You Forgot</span>
              <span>73%</span>
            </div>
            <div className="qrom-stat-fill">
              <div className="qrom-stat-inner" style={{ width: '73%' }}></div>
            </div>
          </div>
        </div>
        <button className="qrom-run-button">npm install node_modules</button>
      </div>
    </section>
  );
}
