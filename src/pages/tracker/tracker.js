import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EtoE } from "../../redux/action";
import "./tracker.css";

const Tracker = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ETE } = useSelector((state) => state.data);
  const tid = sessionStorage.getItem("tid");
  React.useEffect(() => {
    if (!tid) {
      navigate("/");
    } else {
      dispatch(EtoE({ tid }));
    }
  }, [tid, navigate, dispatch]);
  return (
    <div className="tracker">
      {ETE.map((a) => {
        return (
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://media.istockphoto.com/vectors/avatar-person-user-icon-deep-blue-vector-id1216255427?k=20&m=1216255427&s=170667a&w=0&h=kZDxS9PLFnwACzUeyjiQj064gwsuAkHVA8bcFpTvy3c="
                  className="img-fluid rounded-start"
                  alt="user pic"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="cartitle">
                    <h5 className="card-title">Farmer ID {a.farmerid}</h5>
                    <small>ID:{a.tid}</small>
                  </div>
                  <hr />
                  <div>
                    <div className="tr">
                      <div className="td">Farmer Name</div>
                      <div className="td">{a.farmer_name}</div>
                    </div>
                    <div className="tr">
                      <div className="td">cane</div>
                      <div className="td">{a.cane}</div>
                    </div>
                    <div className="tr">
                      <div className="td">liters</div>
                      <div className="td"> {a.quality_li}</div>
                    </div>
                    <div className="tr">
                      <div className="td">SNF</div>
                      <div className="td">{a.snf}</div>
                    </div>
                    <div className="tr">
                      <div className="td">Fat</div>
                      <div className="td"> {a.fat}</div>
                    </div>
                    <div className="tr">
                      <div className="td">place</div>
                      <div className="td"> {a.place}</div>
                    </div>
                  </div>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated on {a.date}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tracker;
