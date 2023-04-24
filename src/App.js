import "./App.css";
import Header from "./components/Header";
import AppForm from "./components/AppForm";

function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column my-head">
      <Header />
      <AppForm />
    </div>
  );
}

export default App;
