import { useState } from "react";
import classes from "./AddMenu.module.css";

const AddMenu = () => {
  const [file, setFile] = useState();
  const [filePath, setFilePath] = useState();
  const [foodName, setFoodName] = useState();
  const [price, setPrice] = useState();
  const [veg_non_veg, setVegNonVeg] = useState();
  function handleChange(event) {
    setFile(event.target.files[0]);
    setFilePath(URL.createObjectURL(event.target.files[0]));
  }
  const nameChangeHandler = (event) => {
    setFoodName(event.target.value);
  };
  const priceChangehandler = (event) => {
    setPrice(event.target.value);
  };
  const vegChangehandler = (event) => {
    setVegNonVeg(event.target.value);
  };
  const onSubmiHandler = (event) => {
    event.preventDefault();

    var data = new FormData();
    data.append("image", file);
    data.append("item_name", foodName);
    data.append("item_price", price);
    data.append("veg_non_veg", veg_non_veg);

    fetch("http://comida-node-api.herokuapp.com/api/partner/product/create", {
      mode: "cors",
      method: "POST",
      headers: {},
      body: data,
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        alert("food created");
        setFoodName("");
        setPrice("");
        setVegNonVeg("");
        setFile(null);
        setFilePath("");
      })
      .catch((error) => {
        console.log(error);
        alert("api error");
      });
  };
  return (
    <div className={classes.container}>
      <div className={classes.form_container}>
        <form id="form" onSubmit={onSubmiHandler} className={classes.form}>
          <img height="100px" width="100px" src={filePath} />
          <input type="file" required={true} onChange={handleChange} />
          <input
            type="text"
            placeholder="Food Name "
            defaultValue=""
            id="name"
            name="name"
            required={true}
            onChange={nameChangeHandler}
            value={foodName}
          />
          <input
            type="number"
            placeholder="Price "
            defaultValue=""
            id="price"
            name="price"
            required={true}
            onChange={priceChangehandler}
            value={price}
          />
          <input
            type="text"
            placeholder="Veg/Non-Veg"
            defaultValue=""
            id="veg"
            name="veg"
            required={true}
            onChange={vegChangehandler}
            value={veg_non_veg}
          />
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
