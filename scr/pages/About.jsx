function About() {

  return (
    <div className="page">

      <div className="page-header">
        <span>ABOUT</span>
        <h1>How CertificateChain Works</h1>

        <p>
          A blockchain-inspired certificate verification
          platform designed to detect certificate tampering.
        </p>
      </div>

      <div className="about-grid">

        <div className="about-card">
          <span>01</span>
          <h2>Certificate Created</h2>
          <p>
            Certificate information is converted into a
            digital record.
          </p>
        </div>

        <div className="about-card">
          <span>02</span>
          <h2>Unique Hash Generated</h2>
          <p>
            SHA-256 creates a unique cryptographic
            fingerprint for the record.
          </p>
        </div>

        <div className="about-card">
          <span>03</span>
          <h2>Block Created</h2>
          <p>
            The certificate record is stored inside a
            blockchain-style block.
          </p>
        </div>

        <div className="about-card">
          <span>04</span>
          <h2>Tamper Detection</h2>
          <p>
            Even a small change in the certificate data
            produces a different hash.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;
