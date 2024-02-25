import React, { useState } from "react";
import axios from "axios";
import Magnify from "../Components/magnify";

export default function Analysis() {
  const [file, setFile] = useState(null);
  const [responseData, setResponseData] = useState({});
  const [loading, setLoading] = useState(false); // Set loading to false initially

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    setLoading(true); // Set loading to true when uploading file

    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:4000/data-analytics", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setResponseData(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-max w-screen m-3">
      <div className="p-4 rounded-lg bg-slate-950">
        <div className="m-4 flex flex-col relative">
          <label className="block text-sm font-semibold text-slate-300 mb-2">
            Upload Any CSV File
          </label>
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-slate-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-slate-900 focus:outline-none focus:bg-blue-600"
          >
            Choose File
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          {file && (
            <div className="top-0 right-0 mt-2 mr-2 text-gray-400 truncate">
              {file.name}
            </div>
          )}
        </div>

        <button
          className="bg-slate-800  text-white font-semibold p-2 rounded-md hover:bg-slate-900 focus:outline-none focus:bg-blue-600 mb-4"
          onClick={handleFileUpload}
        >
          Submit
        </button>
      </div>
      {loading ? (
        <div className="flex items-center justify-center py-8">
          <Magnify />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-4 m-2">
          {Object.keys(responseData).map((key, index) => (
            <div key={index} className="max-w-max p-4 bg-slate-950 rounded-lg">
              <h2 className="text-xl font-normal mb-2 p-2 text-center text-white">
                {key}
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(responseData[key]).map(([subKey, value], subIndex) => (
                  <div
                    key={subIndex}
                    className="p-2 bg-slate-900 rounded-lg text-white"
                  >
                    <span className="font-light">{subKey}:</span>{" "}
                    {typeof value === "object"
                      ? Object.entries(value).map(
                          ([subSubKey, subValue], subSubIndex) => (
                            <div key={subSubIndex}>
                              {subSubKey}: {subValue}
                            </div>
                          )
                        )
                      : value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
