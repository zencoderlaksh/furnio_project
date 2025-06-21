import React from "react";
import AppRoutes from "./routes/AppRoutes";
// Removed useLoader and Loader imports as Layout.jsx handles its own loader

function App() {
  // const { loading } = useLoader(); // No longer needed here

  return (
    <>
      {/* {loading && <Loader />} */} {/* Loader rendering removed, handled by Layout.jsx */}
      <AppRoutes />
    </>
  );
}

export default App;
