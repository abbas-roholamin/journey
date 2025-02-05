import "./App.css";
import BasicForm from "./BasicForm";
import FormWithDefaultValue from "./FormWithDefaultValue";
import FormWithZod from "./FormWithZod";

function App() {
  return (
    <div>
      <BasicForm />
      <hr />
      <FormWithDefaultValue />
      <hr />
      <FormWithZod />
    </div>
  );
}

export default App;
