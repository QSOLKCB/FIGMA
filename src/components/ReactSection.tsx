export default function ReactSection() {
  return (
    <section className="react-track-section">
      <style>{`
        .react-track-section {
          background: #16161f;
          border: 1px solid #61dafb;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(97, 218, 251, 0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .react-track-section:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(97, 218, 251, 0.2);
        }

        .react-track-title {
          background: rgba(97, 218, 251, 0.1);
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(97, 218, 251, 0.3);
        }

        .react-track-title h2 {
          color: #61dafb;
          font-size: 1.2rem;
          letter-spacing: 0.03em;
          margin: 0;
        }

        .react-subtitle {
          color: #a8e6ff;
          font-size: 0.85rem;
          margin-top: 0.25rem;
          font-style: italic;
        }

        .react-track-content {
          padding: 1.5rem;
        }

        .react-stats {
          background: #0b0b12;
          border: 1px solid rgba(97, 218, 251, 0.2);
          border-radius: 4px;
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .react-stat-bar {
          margin-bottom: 0.75rem;
        }

        .react-stat-label {
          color: #61dafb;
          font-size: 0.8rem;
          margin-bottom: 0.25rem;
          display: flex;
          justify-content: space-between;
        }

        .react-stat-fill {
          height: 8px;
          background: rgba(97, 218, 251, 0.2);
          border-radius: 4px;
          overflow: hidden;
        }

        .react-stat-inner {
          height: 100%;
          background: linear-gradient(90deg, #61dafb, #3a9dbf);
          transition: width 0.3s;
        }

        .react-run-button {
          width: 100%;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #61dafb 0%, #3a9dbf 100%);
          border: none;
          border-radius: 4px;
          color: #0b0b12;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .react-run-button:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 15px rgba(97, 218, 251, 0.4);
        }
      `}</style>

      <div className="react-track-title">
        <h2>⚛️ REACT</h2>
        <div className="react-subtitle">"Sorry, no .html for you!"</div>
      </div>
      <div className="react-track-content">
        <div className="react-stats">
          <div className="react-stat-bar">
            <div className="react-stat-label">
              <span>Enforcing .tsx</span>
              <span>100%</span>
            </div>
            <div className="react-stat-fill">
              <div className="react-stat-inner" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="react-stat-bar">
            <div className="react-stat-label">
              <span>useEffect Footguns</span>
              <span>88%</span>
            </div>
            <div className="react-stat-fill">
              <div className="react-stat-inner" style={{ width: '88%' }}></div>
            </div>
          </div>

          <div className="react-stat-bar">
            <div className="react-stat-label">
              <span>Unnecessary Re-renders</span>
              <span>93%</span>
            </div>
            <div className="react-stat-fill">
              <div className="react-stat-inner" style={{ width: '93%' }}></div>
            </div>
          </div>

          <div className="react-stat-bar">
            <div className="react-stat-label">
              <span>Pretending to be Simple</span>
              <span>76%</span>
            </div>
            <div className="react-stat-fill">
              <div className="react-stat-inner" style={{ width: '76%' }}></div>
            </div>
          </div>
        </div>
        <button className="react-run-button">It's .tsx or nothing 😈</button>
      </div>
    </section>
  );
}
