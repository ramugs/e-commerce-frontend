import logo from "./logo.svg";
import "./App.css";
import Index from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import 'remixicon/fonts/remixicon.css'

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
