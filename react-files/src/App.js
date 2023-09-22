import Costs from "./components/Costs/Costs"

function App() {
  const costs = [
    {
      date: new Date(2023, 9, 21),
      description: "Холодильник",
      amount: 500,
    },
  ];
  return (
    <div>
      <h1>Изучение React</h1>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
