import { useState } from "react";

function CreateCertificate() {

  const [form, setForm] = useState({
    name: "",
    course: "",
    organization: "",
    date: ""
  });

  const [certificate, setCertificate] = useState(null);

  const generateHash = async () => {

    const data =
      form.name +
      form.course +
      form.organization +
      form.date +
      Date.now();

    const encoded = new TextEncoder().encode(data);

    const hashBuffer = await crypto.subtle.digest(
      "SHA-256",
      encoded
    );

    const hashArray = Array.from(
      new Uint8Array(hashBuffer)
    );

    const hash = hashArray
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");

    setCertificate({
      ...form,
      id: "CERT-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
      hash
    });
  };

  return (
    <div className="page">

      <div className="page-header">
        <span>CREATE</span>
        <h1>Create Certificate Record</h1>
        <p>
          Generate a certificate record and its unique
          cryptographic hash.
        </p>
      </div>

      <div className="form-card">

        <input
          placeholder="Student Name"
          value={form.name}
          onChange={e =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Course / Degree"
          value={form.course}
          onChange={e =>
            setForm({ ...form, course: e.target.value })
          }
        />

        <input
          placeholder="Issuing Organization"
          value={form.organization}
          onChange={e =>
            setForm({
              ...form,
              organization: e.target.value
            })
          }
        />

        <input
          type="date"
          value={form.date}
          onChange={e =>
            setForm({ ...form, date: e.target.value })
          }
        />

        <button
          className="primary-btn"
          onClick={generateHash}
        >
          Generate Certificate Hash
        </button>

      </div>

      {certificate && (
        <div className="certificate-result">

          <div className="success-badge">
            ✓ RECORD CREATED
          </div>

          <h2>{certificate.name}</h2>

          <p>
            <strong>Certificate ID:</strong>{" "}
            {certificate.id}
          </p>

          <p>
            <strong>Course:</strong>{" "}
            {certificate.course}
          </p>

          <div className="hash-box">
            <small>SHA-256 HASH</small>
            <code>{certificate.hash}</code>
          </div>

        </div>
      )}

    </div>
  );
}

export default CreateCertificate;
