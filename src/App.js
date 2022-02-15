import "./styles.css";
import { useCallback, useState } from "react";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("App");
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onClickOpen = () => {
    setOpen(!open);
  };
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
