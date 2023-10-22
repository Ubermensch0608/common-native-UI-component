import { useState } from "react";
import { useForm } from "react-hook-form";

import "./App.css";
import { Switch } from "./components/ui/(Switch)/Switch";
import { OriginalSwitch } from "./components/ui/(Switch)/OriginalSwitch";

function App() {
  const [checked2, setChecked2] = useState(false);
  const [checked, setChecked] = useState(false);
  const { watch, register } = useForm();

  console.log(watch("hi"));

  return (
    <>
      <OriginalSwitch
        label="레이블"
        checked={checked2}
        onClick={() => setChecked2((prevC) => !prevC)}
      />

      <Switch {...register("hi")}>
        <Switch.Label>hi</Switch.Label>
        <Switch.Toggle
          onClick={() => setChecked((prevC) => !prevC)}
          checked={checked}
        />
      </Switch>
      <input type="checkbox" />
    </>
  );
}

export default App;
