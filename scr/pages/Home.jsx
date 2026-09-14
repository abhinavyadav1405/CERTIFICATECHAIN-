import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  Blocks,
  Search,
  ArrowRight
} from "lucide-react";

function Home() {
  return (
    <div className="page">

      <section className="hero">
        <div className="hero-content">

          <div className="badge">
            🔗 BLOCKCHAIN POWERED
          </div>

          <h1>
            Verify Certificates
            <span> With Confidence.</span>
          </h1>

          <p>
            CertificateChain uses cryptographic hashing and
            blockchain-style technology to detect fake,
            modified and tampered certificates.
          </p>

          <div className="hero-buttons">
            <Link to="/verify" className="primary-btn">
              Verify Certificate
              <ArrowRight size={18} />
            </Link>

            <Link to="/create" className="secondary-btn">
              Create Certificate
            </Link>
          </div>

        </div>

        <div className="hero-card">

          <div className="chain-animation">
            <div className="chain-node">CERT</div>
            <div className="chain-line"></div>
            <div className="chain-node">HASH</div>
            <div className="chain-line"></div>
            <div className="chain-node">BLOCK</div>
          </div>

          <div className="verified">
            <ShieldCheck size={24} />
            <div>
              <strong>Certificate Verified</strong>
              <small>Integrity confirmed</small>
            </div>
          </div>

        </div>
      </section>

      <section className="features">

        <div className="section-title">
          <span>CORE FEATURES</span>
          <h2>Everything you need for certificate security</h2>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <ShieldCheck />
            <h3>Certificate Verification</h3>
            <p>
              Verify whether a certificate is genuine,
              modified or invalid.
            </p>
          </div>

          <div className="feature-card">
            <Lock />
            <h3>Unique Hash</h3>
            <p>
              Every certificate receives a unique
              cryptographic fingerprint.
            </p>
          </div>

          <div className="feature-card">
            <Blocks />
            <h3>Blockchain Ledger</h3>
            <p>
              Certificate records are connected through
              blockchain-style blocks.
            </p>
          </div>

          <div className="feature-card">
            <Search />
            <h3>Tamper Detection</h3>
            <p>
              Any modification to certificate data can
              be detected through hash comparison.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
