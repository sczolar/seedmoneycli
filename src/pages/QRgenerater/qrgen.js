import React from "react";
import QRCode from "react-qr-code";
import "./qr.css";
import { useSelector } from "react-redux";

const QRgen = () => {
  const { MILK } = useSelector((state) => state.data);
  return (
    <div className="qrcode">
      <QRCode value={MILK.tid} bgColor="transparent" fgColor="#ccc" />
    </div>
  );
};

export default QRgen;
