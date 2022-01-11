import "./information.css";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { CreateInfo } from "../../redux/action";
// import { useDispatch } from "react-redux";

//information
const Information = (props) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [active, setactive] = React.useState(false);
  const [data, setdata] = React.useState({
    date: "",
    batch: "",
    farmerid: "",
    farmer_name: "",
    cane: "",
    quality_li: "",
    quality: "",
    snf: "",
    fat: "",
  });

  const handler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);
  console.log(active);

  const submit = (e) => {
    e.preventDefault();
    if (
      data.farmerid &&
      data.farmer_name &&
      data.cane &&
      data.quality_li &&
      data.quality &&
      data.date &&
      data.batch &&
      data.snf &&
      data.fat
    ) {
      navigate("/success");
      // dispatch(CreateInfo(data));
      // setactive(true);
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
          {/*farmer date*/}
          {!active && (
            <>
              <div className="mb-3">
                <label htmlFor="farmerid" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  onChange={handler}
                  value={data.date}
                />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="batch" className="form-label">
                  Batch
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="batch"
                  name="batch"
                  onChange={handler}
                  value={data.batch}
                />
              </div> */}
              <div class="mb-3">
                <label for="disabledSelect" class="form-label">
                  Batch
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  name="batch"
                  id="batch"
                  onChange={handler}
                  value={data.batch}
                >
                  <option value="0">Choose...</option>
                  <option value="morning">Morning</option>
                  <option value="evening">Evening</option>
                </select>
              </div>

              <button
                onClick={() => {
                  if (data.date && data.batch !== "0") {
                    setactive(true);
                  }
                }}
                type="button"
                className="btn btn-primary mr-3"
              >
                Add
              </button>
            </>
          )}
          {/*farmer id*/}
          {active ? (
            <>
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
              <div className="mb-3">
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
                  type="number"
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
              {/*snf*/}
              <div class="mb-3">
                <label htmlFor="snf" className="form-label">
                  SNF
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="snf"
                  name="snf"
                  onChange={handler}
                  value={data.snf}
                />
              </div>
              {/*fat*/}
              <div className="mb-3">
                <label htmlFor="fat" className="form-label">
                  FAT
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fat"
                  name="fat"
                  onChange={handler}
                  value={data.fat}
                />
              </div>
              {/* date
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
                </div> */}
              {/*place*/}
              {/* <div className="mb-3">
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
              </div> */}
              <div className="d-flex">
                <button type="submit" className="btn btn-primary mr-3">
                  Add Data
                </button>
                {/* <Link to={active ? "/milkprocess" : ""} className="link">
                  <button
                    className={
                      active
                        ? "btn btn-primary ml-3"
                        : "btn btn-primary ml-3 disable"
                    }
                  >
                    Add Block
                  </button>
                </Link> */}
              </div>
            </>
          ) : (
            ""
          )}
        </form>
      </div>
    </React.Fragment>
  );
};

const Infomain = () => {
  return <Information />;
};
export default Infomain;
