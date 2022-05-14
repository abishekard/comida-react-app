import classes from "./ProfileHome.module.css";
import { useContext, useEffect, useState } from "react";
import LoginContext from "../../store/LoginContex";

const ProfileHome = () => {
  const loginContext = useContext(LoginContext);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    profileImage: "",
    address: "",
  });

  useEffect(() => {
    console.log(loginContext.userId);
    fetch(
      `http://comida-node-api.herokuapp.com/api/partner/profile/show/${loginContext.userId}`,
      {
        mode: "cors",
        method: "POST",
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
          name: response.data.name,
          email: response.data.email,
          mobile: response.data.mobile,
          profileImage: response.data.profile_image,
          address: response.data.address,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes["form-container"]}>
        <h2>Hi {userData.name}</h2>
        <img
          className={classes.profile_image}
          src={userData.profileImage}
          alt="profile_image"
        />
        <div className={classes.data_container}>
          <p>{userData.name}</p>
          <p>{userData.email}</p>
          <p>{userData.mobile}</p>
          <p>{userData.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHome;
