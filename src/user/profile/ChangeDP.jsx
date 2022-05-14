import { useState, useContext } from "react";
import classes from "./ChangeDP.module.css";
import LoginContext from "../../store/LoginContex";
const ChangeDP = (props) => {
  const [file, setFile] = useState();
  const [filePath, setFilePath] = useState();
  const loginContext = useContext(LoginContext);

  function handleChange(event) {
    setFile(event.target.files[0]);
    setFilePath(URL.createObjectURL(event.target.files[0]));
  }
  const onCloseHandler = () => {
    props.onClose();
  };

  const onSubmiHandler = (event) => {
    event.preventDefault();

    var data = new FormData();
    data.append("image", file);

    fetch(
      `http://comida-node-api.herokuapp.com/api/user/edit/profile_image/${loginContext.userId}`,
      {
        mode: "cors",
        method: "POST",
        headers: {},
        body: data,
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        alert("profile image updated");

        props.onClose();
      })
      .catch((error) => {
        console.log(error);
        alert("api error");
      });
  };
  return (
    <div className={classes.container}>
      <button className={classes.close_button} onClick={onCloseHandler}>
        close
      </button>
      <div className={classes.form_container}>
        <form id="form" onSubmit={onSubmiHandler} className={classes.form}>
          <img height="100px" width="100px" src={filePath} />
          <input type="file" required={true} onChange={handleChange} />
          <button type="submit">Done</button>
        </form>
      </div>
    </div>
  );
};

export default ChangeDP;
