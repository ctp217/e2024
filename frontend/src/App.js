import { Container } from "react-bootstrap";

import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import logo from "../src/assets/logo.png";
import HomeScreen from "./screens/HomeScreen";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
      <Header />
      <main className="py-3">
        <Container>
      <Outlet/>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
