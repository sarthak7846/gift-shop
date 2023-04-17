import Signup from "./components/Auth/Signup/Signup";

import "./App.css";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout/>,
//     children: [
//       {path: 'users',
//       element: <HoamePage/>,
//       children: []
//       }
//     ]
//   }
// ]);

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Signup />
      {/* <HoamePage /> */}
    </div>
  );
}

export default App;
