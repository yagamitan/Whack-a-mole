export default function Hole({ hasMole, onHit }) {
  return (
    <div className="hole">
      {hasMole && <button className="mole" onClick={onHit}></button>}
    </div>
  );
}
