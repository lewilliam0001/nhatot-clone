import ReactDOM from "react-dom";
import { Provider as ReactReduxProvider } from "react-redux";
import App from "./App";

import MUIStyledEngineProvider from "./providers/MUIStyledEngineProvider";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from "./app/store";


// disable logging in production
if (process.env.NODE_ENV?.includes('prod')) {
  console.log = () => {}
  console.error = () => {}
  console.debug = () => {}
}

ReactDOM.render(
  <MUIStyledEngineProvider>
    
    <ReactReduxProvider store={store}>

      {/* delay the rendering of our app’s UI until the persisted data is available in the Redux store */}
      {/* <PersistGate loading={null} persistor={persistor}></PersistGate> */}
      <App />
    </ReactReduxProvider>

  </MUIStyledEngineProvider>,

  document.getElementById("root")
);
