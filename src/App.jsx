import Header from "./Header";
import data from "./data";
import Card from "./Card";

function App() {
  const cards = data.map((place) => {
    return <Card key={place.id} place={place} />;
  });
  console.log(cards);

  return (
    <>
      <Header />
      <div className="cards-container">{cards}</div>
    </>
  );
}

export default App;
