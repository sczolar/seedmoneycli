import "./information.css";
import React from "react";
import { Link } from "react-router-dom";
import { CreateInfo } from "../../redux/action";
import { useDispatch } from "react-redux";

//information
const Information = (props) => {
  const dispatch = useDispatch();
  const [active, setactive] = React.useState(false);
  const [data, setdata] = React.useState({
    farmerid: "",
    farmer_name: "",
    cane: "",
    quality_li: "",
    quality: "",
    date: "",
    place: "",
  });

  const handler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);

  const submit = (e) => {
    e.preventDefault();
    if (
      data.farmerid &&
      data.farmer_name &&
      data.cane &&
      data.quality_li &&
      data.quality &&
      data.date &&
      data.place
    ) {
      dispatch(CreateInfo(data));
      setactive(true);
      // setdata({
      //   farmerid: "",
      //   farmer_name: "",
      //   cane: "",
      //   quality_li: "",
      //   quality: "",
      //   date: "",
      //   place: "",
      // });
    } else {
      console.log("plese enter the value for all the field");
    }
  };
  return (
    <React.Fragment>
      <div className="info">
        <form onSubmit={submit}>
          {/*farmer id*/}
          <div className="mb-3">
            <label htmlFor="farmerid" className="form-label">
              Farmer ID
            </label>
            <input
              type="text"
              className="form-control"
              id="farmerid"
              name="farmerid"
              onChange={handler}
              value={data.farmerid}
            />
          </div>
          {/*farmer name*/}
          <div class="mb-3">
            <label htmlFor="farmer_name" className="form-label">
              Farmer Name
            </label>
            <input
              type="farmer_name"
              className="form-control"
              id="farmer_name"
              name="farmer_name"
              onChange={handler}
              value={data.farmer_name}
            />
          </div>
          {/*cane*/}
          <div className="mb-3">
            <label htmlFor="cane" className="form-label">
              Cane
            </label>
            <input
              type="text"
              className="form-control"
              id="cane"
              name="cane"
              onChange={handler}
              value={data.cane}
            />
          </div>
          {/*quality_li*/}
          <div className="mb-3">
            <label htmlFor="quality_li" className="form-label">
              Quality Liter
            </label>
            <input
              type="text"
              className="form-control"
              id="quality_li"
              name="quality_li"
              onChange={handler}
              value={data.quality_li}
            />
          </div>
          {/*quality*/}
          <div className="mb-3">
            <label htmlFor="quality" className="form-label">
              Quality
            </label>
            <input
              type="text"
              className="form-control"
              id="quality"
              name="quality"
              onChange={handler}
              value={data.quality}
            />
          </div>
          {/*date*/}
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="text"
              className="form-control"
              id="date"
              name="date"
              onChange={handler}
              value={data.date}
            />
          </div>
          {/*place*/}
          <div className="mb-3">
            <label htmlFor="place" className="form-label">
              Place
            </label>
            <input
              type="text"
              className="form-control"
              id="place"
              name="place"
              onChange={handler}
              value={data.place}
            />
          </div>
          <div className="d-flex">
            <button type="submit" className="btn btn-primary mr-3">
              Verify
            </button>
            <Link to={active ? "/milkprocess" : ""} className="link">
              <button
                className={
                  active
                    ? "btn btn-primary ml-3"
                    : "btn btn-primary ml-3 disable"
                }
              >
                Add Block
              </button>
            </Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

const Infomain = () => {
  return <Information />;
};
export default Infomain;
