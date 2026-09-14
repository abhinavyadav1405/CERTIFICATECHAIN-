function Certificates() {

  const certificates = [
    {
      id: "CERT-8F29K2",
      name: "Demo Student",
      course: "B.Tech CSE",
      status: "VALID"
    },
    {
      id: "CERT-4X82P9",
      name: "Demo User",
      course: "Web Development",
      status: "VALID"
    }
  ];

  return (
    <div className="page">

      <div className="page-header">
        <span>RECORDS</span>
        <h1>Certificate Records</h1>
        <p>
          View certificates registered in the ledger.
        </p>
      </div>

      <div className="certificate-list">

        {certificates.map(cert => (
          <div className="record-card" key={cert.id}>

            <div>
              <small>{cert.id}</small>
              <h3>{cert.name}</h3>
              <p>{cert.course}</p>
            </div>

            <span className="status">
              ✓ {cert.status}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Certificates;
