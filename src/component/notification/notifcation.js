import React from "react";
import img from "../../assets/notify.png";
import Image from "next/image";

export default function Notifcation() {
  return (
    <div
      style={{
        marginLeft: "-16.5%",
        marginTop: "1%",
        position: "absolute",
        zIndex: 1,
      }}
    >
      <div
        className="w-64 h-500 position-absolute"
        style={{
          backgroundColor: "#fff",
          height: 305,
          width: 258,
          marginRight: 50,
          borderRadius: 5,
          border: "1px solid",
        }}
      >
        <div className="flex flex-col w-[100%] h-[100%] items-center justify-center">
          <Image src={img} alt="img" className="w-[50%] h=[50%]" />
          <h2 className="text-[#1F2A36] text-sm font-normal">
            {" "}
            Belum ada Notifikasi
          </h2>
        </div>
      </div>
    </div>
  );
}
