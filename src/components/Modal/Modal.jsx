//Styles
import "./modal.css";

//Components
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";

const Modal = ({ changeModalStatus, modal }) => {
  let modalStyles = "modal",
    contentStyles = "modal-content";

  if (modal) {
    modalStyles += " show-modal";
    contentStyles += " show-content";
  } else {
    modalStyles += " hide-modal";
    contentStyles += " hide-content";
  }

  return (
    <div className={modalStyles}>
      <form className={contentStyles}>
        <h1>Зарегистрируйтесь</h1>
        <Input
          width={"100%"}
          height={"50px"}
          iconWidth={"10%"}
          placeholder={"Придумайте учетную запись..."}
          className={"modal-input"}
          type={"email"}
        />
        <Input
          width={"100%"}
          height={"50px"}
          iconWidth={"10%"}
          placeholder={"Придумайте пароль..."}
          className={"modal-input"}
          type={"password"}
        />
        <div className="block-buttons">
          <Button
            width={"150px"}
            height={"40px"}
            type={"submit"}
            title={"Регистрация"}
            className={"modal-button"}
          />
          <Button
            width={"150px"}
            height={"40px"}
            type={"button"}
            onClick={changeModalStatus}
            title={"Отмена"}
            className={"modal-button"}
          />
        </div>
      </form>
    </div>
  );
};

export default Modal;
