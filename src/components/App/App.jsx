//Global
import { useState } from "react";

//Components
import Button from "../../elements/Button/Button";
import Modal from "../Modal/Modal";

//Styles
import "./app.css";

const App = () => {
  const [modal, setModal] = useState(false);

  const changeModalStatus = () => {
    setModal(!modal);
  };

  return (
    <div className="app">
      <Button
        type={"button"}
        title={"Регистрация"}
        className={"button"}
        onClick={changeModalStatus}
      />

      <Modal modal={modal} changeModalStatus={changeModalStatus} />
    </div>
  );
};

export default App;
