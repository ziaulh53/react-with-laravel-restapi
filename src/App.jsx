import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { AppRouter } from "./routes/MainRouter";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppRouter/>
      </PersistGate>
    </Provider>
  );
}

export default App;
