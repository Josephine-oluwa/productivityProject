import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./router/mainRoute";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./global/Store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const App = () => {

  const persistor = persistStore(store);
  let client = new QueryClient()
  return (
    <div className="font-Poppins">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <QueryClientProvider client={client}>
          <RouterProvider router={mainRoute} />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
