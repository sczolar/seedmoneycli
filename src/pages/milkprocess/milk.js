import "./milk.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CreateMilk } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Milk = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { INFO, MILK } = useSelector((state) => state.data);
  const [data, setdata] = React.useState({
    dairyform: "",
    snf: "",
    fat: "",
    packed_date: "",
  });

  useEffect(() => {
    if (MILK.tid) {
      navigate("/barcode");
    }
  }, [MILK, navigate]);

  const handler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);
  const submit = (e) => {
    e.preventDefault();
    if (data.dairyform && data.snf && data.fat && data.packed_date) {
      dispatch(
        CreateMilk({
          farmerid: INFO.farmerid,
          farmer_name: INFO.farmer_name,
          cane: INFO.cane,
          quality_li: INFO.quality_li,
          quality: INFO.quality,
          date: INFO.date,
          place: INFO.place,
          dairyform: data.dairyform,
          snf: data.snf,
          fat: data.fat,
          packed_date: data.packed_date,
          tid: sessionStorage.getItem("tid"),
        })
      );
      setdata({ dairyform: "", snf: "", fat: "", packed_date: "" });
    } else {
      console.log("plese enter the value");
    }
  };
  return (
    <React.Fragment>
      <div className="info">
        <form onSubmit={submit}>
          {/*dairyform*/}
          <div className="mb-3">
            <label htmlFor="dairyform" className="form-label">
              Dairy Form
            </label>
            <input
              type="text"
              className="form-control"
              id="dairyform"
              name="dairyform"
              onChange={handler}
              value={data.dairyform}
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
          {/*packed_date*/}
          <div className="mb-3">
            <label htmlFor="packed_date" className="form-label">
              Packed Date
            </label>
            <input
              type="text"
              className="form-control"
              id="packed_date"
              name="packed_date"
              onChange={handler}
              value={data.packed_date}
            />
          </div>
          <div className="d-flex">
            <button type="submit" className="btn btn-primary mr-3">
              verify
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

const MilkProcess = () => {
  return <Milk />;
};

export default MilkProcess;
