import { Blocks, Link2 } from "lucide-react";

function BlockCard({ block }) {

  return (
    <div className="block-card">

      <div className="block-number">
        <Blocks size={20} />
        Block #{block.index}
      </div>

      <div className="block-info">

        <div>
          <small>CERTIFICATE</small>
          <strong>{block.certificate}</strong>
        </div>

        <div>
          <small>HASH</small>
          <code>{block.hash}</code>
        </div>

        <div>
          <small>PREVIOUS HASH</small>
          <code>{block.previous}</code>
        </div>

      </div>

      {block.index > 0 && (
        <div className="chain-connection">
          <Link2 size={18} />
          Linked to previous block
        </div>
      )}

    </div>
  );
}

export default BlockCard;
