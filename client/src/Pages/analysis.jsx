import React, { useState } from "react";
import axios from "axios";
import Magnify from "../Components/magnify";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import "jspdf-autotable";
import { jsPDF } from "jspdf";


export default function Analysis() {
  const [file, setFile] = useState(null);
  const [responseData, setResponseData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDescribe = () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:4000/file/upload", formData, {
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

  const handleDownloadPDF = () => {
    if (Object.keys(responseData).length === 0) {
      console.error("No data available to download");
      return;
    }

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Descriptive Statistics", 105, 15, { align: "center" });

    Object.keys(responseData).forEach((key, index) => {
      if (index > 0 && index % 3 === 0) {
        doc.addPage();
      }

      doc.setFontSize(16);
      doc.text(10, 25 + (index % 3) * 80, key);
      console.log(key);
      const data = Object.entries(responseData[key]).map(([subKey, value]) => [
        subKey,
        value,
      ]);
    console.log(data);
      doc.autoTable({
        startY: 35 + (index % 3) * 80,
        head: [["Field", "Value"]],
        body: data,
        theme: "striped",
        styles: { fontSize: 12 },
        columnStyles: {
          0: { cellWidth: 50 },
          1: { cellWidth: 100 },
        },
      });
    });
    doc.save("Descriptive_data.pdf");
  };

  return (
    <div className="flex flex-col items-center justify-center h-max m-3">
      <div className="p-4 container text-center rounded-lg bg-slate-950">
        <div className="m-4 flex flex-col relative">
          <label className="block text-sm font-Quicksand text-slate-300 m-2">
            Upload any CSV file
          </label>
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-blue-950 text-white font-normal transition-all py-2 px-4 rounded-md hover:bg-slate-900 focus:outline-none focus:bg-blue-600"
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
        <div className="flex flex-row w-full flex-grow-0 justify-evenly mx-2 px-2">
          <button
            className="bg-slate-800 text-white font-Quicksand p-2 rounded-md transition-all hover:bg-blue-900 focus:outline-none focus:bg-blue-600 mb-4"
            onClick={handleDescribe}
          >
            Describe
          </button>
        </div>
      </div>
      {loading ? (
        <div className="flex items-center justify-center py-8">
          <Magnify />
        </div>
      ) : (
        <Grid container spacing={3} justifyContent="center" className="m-2">
          {Object.keys(responseData).map((key, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: "#0000" }}>
                <CardContent>
                  <Typography
                    spacing={1}
                    variant="h5"
                    align="center"
                    component="h2"
                    className="text-white"
                  >
                    <div className=" font-Quicksand">{key}</div>
                  </Typography>
                  <br />
                  <Grid container spacing={1}>
                    {Object.entries(responseData[key]).map(
                      ([subKey, value], subIndex) => (
                        <Grid item xs={6} key={subIndex}>
                          <Typography variant="body2" className="text-white">
                            <div className="text-center font-Quicksand p-2 bg-slate-900">{subKey}</div> 
                            <div className="text-center font-Quicksand p-2">{value}</div>
                          </Typography>
                        </Grid>
                      )
                    )}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <button
        variant="outlined"
        onClick={handleDownloadPDF}
        className="mt-4 p-4 rounded-lg bg-blue-950 text-white"
      >
        Download PDF
      </button>
    </div>
  );
}
