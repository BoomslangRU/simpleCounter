import { CounterFunction } from './components/CounterFunction'
import { CounterContainer } from './components/CounterClass'

export default function App() {
  return (
    <div className="App">
      <CounterContainer initialCount={5} />
      <CounterFunction initialCount={10} />
    </div>
  );
}

