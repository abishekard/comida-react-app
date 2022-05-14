import classes from "./ProfileHome.module.css";
import { useContext, useEffect, useState } from "react";
import LoginContext from "../../store/LoginContex";
import Modal from "./../../ui/Modal";
import ChangeDP from "./ChangeDP";

const ProfileHome = () => {
  const loginContext = useContext(LoginContext);
  const [ChangeDp, setChangeDp] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    profileImage: "",
    address: "",
  });

  useEffect(() => {
    console.log("customer-id : " + loginContext.userId);
    fetch(
      `http://comida-node-api.herokuapp.com/api/user/profile/show/${loginContext.userId}`,
      {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setUserData({
          name: response.message.name,
          email: response.message.email,
          mobile: response.message.mobile,
          profileImage: response.message.profile_image,
          address: "NA",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onCloseHandler = () => {
    setChangeDp(false);
  };
  const onShowHandler = () => {
    setChangeDp(true);
    console.log("show");
  };

  return (
    <div className={classes.container}>
      {ChangeDp && (
        <Modal>
          <ChangeDP onClose={onCloseHandler} />
        </Modal>
      )}
      <div className={classes["form-container"]}>
        <h2>Hi {userData.name}</h2>
        <img
          className={classes.profile_image}
          src={userData.profileImage}
          alt="profile_image"
        />
        <button type="button" onClick={onShowHandler}>
          Change profile picture
        </button>
        <div className={classes.data_container}>
          <p>{userData.name}</p>
          <p>{userData.email}</p>
          <p>{userData.mobile}</p>
          {/*  <p>{userData.address}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileHome;
