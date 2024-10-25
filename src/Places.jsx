import data from "./data";
import Card from "./Card";

function Places() {
  return (
    <div className="cards-container">
      {data.map((place) => (
        <Card key={place.id} place={place} />
      ))}
    </div>
  );
}

export default Places;
