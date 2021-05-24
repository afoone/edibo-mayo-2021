import Header from "./components/Header";
import MemoryGame from "./components/MemoryGame";
import { Provider } from "react-redux";
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <MemoryGame />
      </div>
    </Provider>
  );
}

export default App;
