import { Habit } from "./components/Habit";
import "./styles/global.css";

function App() {
  return (
    <>
      <h1 className="flex justify-center">Hello Word</h1>
      <div className="bg-slate-600 text-fuchsia-400">
        <Habit info={10} />
        <Habit info={20} />
      </div>
    </>
  );
}
export default App;
