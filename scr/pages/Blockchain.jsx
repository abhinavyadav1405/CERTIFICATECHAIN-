import BlockCard from "../components/BlockCard";

function Blockchain() {

  const blocks = [
    {
      index: 0,
      hash: "0000GENESIS8F92A",
      previous: "NULL",
      certificate: "Genesis Block"
    },
    {
      index: 1,
      hash: "0000A72BC91F4D8",
      previous: "0000GENESIS8F92A",
      certificate: "CERT-8F29K2"
    },
    {
      index: 2,
      hash: "0000C91DA82E71B",
      previous: "0000A72BC91F4D8",
      certificate: "CERT-4X82P9"
    }
  ];

  return (
    <div className="page">

      <div className="page-header">
        <span>LEDGER</span>
        <h1>Blockchain Explorer</h1>

        <p>
          Explore certificate blocks and their cryptographic
          relationships.
        </p>
      </div>

      <div className="blockchain">

        {blocks.map(block => (
          <BlockCard
            key={block.index}
            block={block}
          />
        ))}

      </div>

    </div>
  );
}

export default Blockchain;
