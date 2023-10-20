import { useState } from "react";

const Certificates = () => {
  const [certificate, setCertificate] = useState(1);
  
  return (
    <div id="navigate-certificate" className="group">
      <div className="container mx-auto md:p-20 p-5">
        <div className="w-full h-auto">
          <div className="flex justify-center">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">Certificates</h1>
              <hr className="w-50 my-10" />
            </div>
          </div>
        </div>

        <div className="md:w-6/12 w-full mx-auto">
          <div className="text-center">
            <button
              onClick={() => {
                setCertificate(1);
              }}
              className={`rounded-full w-26 py-2 px-4 mx-2 ${
                certificate === 1
                  ? "bg-gray-200 shadow-lg"
                  : "bg-none border text-white"
              }`}
            >
              Progate
            </button>
            <button
              onClick={() => {
                setCertificate(2);
              }}
              className={`rounded-full w-26 py-2 px-4 mx-2 ${
                certificate === 2
                  ? "bg-gray-200 shadow-lg"
                  : "bg-none border text-white"
              }`}
            >
              Udemy
            </button>
          </div>
        </div>

        <div className="show xl:w-9/12 lg:w-full md:w-full mx-auto mt-10">
          <div className="flex flex-wrap justify-center">
            <div
              className={`${
                certificate === 1
                  ? "transition-opacity opacity-1 block"
                  : "opacity-0 hidden"
              }`}
            >
              <div className="flex flex-wrap items-center justify-center">
                <img
                  className="md:w-1/3 w-full p-2"
                  src="/img/sertifikat/progate/HTMLCSS.png"
                  alt=""
                />
                <img
                  className="md:w-1/3 w-full p-2"
                  src="/img/sertifikat/progate/JavaScript.png"
                  alt=""
                />
                <img
                  className="md:w-1/3 w-full p-2"
                  src="/img/sertifikat/progate/PHP.png"
                  alt=""
                />
                <img
                  className="md:w-1/3 w-full p-2"
                  src="/img/sertifikat/progate/SQL.png"
                  alt=""
                />
              </div>
            </div>
            <div
              className={`${
                certificate === 2
                  ? "transition-opacity opacity-1 block"
                  : "opacity-0 hidden"
              }`}
            >
              <div className="flex flex-wrap items-center justify-center">
                <img
                  className="md:w-1/2 w-full p-2"
                  src="/img/sertifikat/udemy/JavaScript-Bootstrap-PHP.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
