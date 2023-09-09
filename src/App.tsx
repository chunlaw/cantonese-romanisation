import "./App.css";
import { Container, SxProps, Theme } from "@mui/material";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./layouts/Home";
import Doc from "./layouts/Doc";
import { Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Container maxWidth="lg" fixed sx={rootSx}>
            <Header />
            <Outlet />
            <Footer />
          </Container>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/doc" element={<Doc />} />
      </Route>
    </Routes>
  );
}

export default App;

const rootSx: SxProps<Theme> = {
  display: "flex",
  height: "100vh",
  overflow: "scroll",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  gap: 1,
  py: 2,
};
