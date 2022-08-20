import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Route, Routes } from "react-router";
import { Landing } from "../pages/Landing";
import { FileUploader } from "react-drag-drop-files";
import axios from "axios";

const fileTypes = ["MP4", "MOV", "WMV", "FLV", "AVI", "AVCHD", "WebM", "MKV"];

// create form object with "videos" as a key

export const Main = () => {
  const [file, setFile] = useState(null);
  const handleChange = async (file) => {
    setFile(file);
    console.log(file);
    await axios.post("http://localhost:8080/api/v1/upload", file, {
      headers: {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    });
  };

  return (
    <main className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/upload"
          element={
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
          }
        ></Route>
      </Routes>
    </main>
  );
};
