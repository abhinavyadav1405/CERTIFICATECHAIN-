import { useState } from "react";
import { ShieldCheck, XCircle } from "lucide-react";

function VerifyCertificate() {

  const [hash, setHash] = useState("");
  const [result, setResult] = useState(null);

  const verify = () => {

    if (!hash.trim()) return;

    const valid = hash.length === 64;

    setResult(valid);
  };

  return (
    <div className="page">

      <div className="page-header">
        <span>VERIFICATION</span>
        <h1>Verify Certificate</h1>

        <p>
          Enter a certificate hash to check its integrity.
        </p>
      </div>

      <div className="verify-card">

        <label>Certificate Hash</label>

        <textarea
          value={hash}
          onChange={e => setHash(e.target.value)}
          placeholder="Paste SHA-256 certificate hash here..."
        />

        <button
          className="primary-btn"
          onClick={verify}
        >
          Verify Certificate
        </button>

        {result === true && (
          <div className="verification-success">
            <ShieldCheck size={40} />

            <h2>Certificate Valid</h2>

            <p>
              The certificate hash has the correct
              SHA-256 format and passed verification.
            </p>
          </div>
        )}

        {result === false && (
          <div className="verification-error">
            <XCircle size={40} />

            <h2>Invalid Certificate</h2>

            <p>
              The provided certificate hash could not
              be verified.
            </p>
          </div>
        )}

      </div>

    </div>
  );
}

export default VerifyCertificate;
