export default function QVSPSection() {
  return (
    <section className="qvsp-track-section">
      <style>{`
        .qvsp-track-section {
          background: #16161f;
          border: 1px solid #ffd046;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(255, 208, 70, 0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .qvsp-track-section:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(255, 208, 70, 0.2);
        }

        .qvsp-track-title {
          background: rgba(255, 208, 70, 0.1);
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(255, 208, 70, 0.3);
        }

        .qvsp-track-title h2 {
          color: #ffd046;
          font-size: 1.2rem;
          letter-spacing: 0.03em;
          margin: 0;
        }

        .qvsp-subtitle {
          color: #ffe599;
          font-size: 0.85rem;
          margin-top: 0.25rem;
          font-style: italic;
        }

        .qvsp-track-content {
          padding: 1.5rem;
        }

        .qvsp-stats {
          background: #0b0b12;
          border: 1px solid rgba(255, 208, 70, 0.2);
          border-radius: 4px;
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .qvsp-stat-bar {
          margin-bottom: 0.75rem;
        }

        .qvsp-stat-label {
          color: #ffd046;
          font-size: 0.8rem;
          margin-bottom: 0.25rem;
          display: flex;
          justify-content: space-between;
        }

        .qvsp-stat-fill {
          height: 8px;
          background: rgba(255, 208, 70, 0.2);
          border-radius: 4px;
          overflow: hidden;
        }

        .qvsp-stat-inner {
          height: 100%;
          background: linear-gradient(90deg, #ffd046, #c89f2d);
          transition: width 0.3s;
        }

        .qvsp-run-button {
          width: 100%;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #ffd046 0%, #c89f2d 100%);
          border: none;
          border-radius: 4px;
          color: #0b0b12;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .qvsp-run-button:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 15px rgba(255, 208, 70, 0.4);
        }
      `}</style>

      <div className="qvsp-track-title">
        <h2>😤 THE USER vs REACT ENV</h2>
        <div className="qvsp-subtitle">"I just wanted a single .html file..."</div>
      </div>
      <div className="qvsp-track-content">
        <div className="qvsp-stats">
          <div className="qvsp-stat-bar">
            <div className="qvsp-stat-label">
              <span>Times Asked for .html</span>
              <span>∞%</span>
            </div>
            <div className="qvsp-stat-fill">
              <div className="qvsp-stat-inner" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="qvsp-stat-bar">
            <div className="qvsp-stat-label">
              <span>Times Got .tsx Instead</span>
              <span>∞%</span>
            </div>
            <div className="qvsp-stat-fill">
              <div className="qvsp-stat-inner" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="qvsp-stat-bar">
            <div className="qvsp-stat-label">
              <span>Acceptance of Reality</span>
              <span>12%</span>
            </div>
            <div className="qvsp-stat-fill">
              <div className="qvsp-stat-inner" style={{ width: '12%' }}></div>
            </div>
          </div>

          <div className="qvsp-stat-bar">
            <div className="qvsp-stat-label">
              <span>Will Ask Again Tomorrow</span>
              <span>100%</span>
            </div>
            <div className="qvsp-stat-fill">
              <div className="qvsp-stat-inner" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
        <button className="qvsp-run-button">Can I get .html this time?</button>
      </div>
    </section>
  );
}
