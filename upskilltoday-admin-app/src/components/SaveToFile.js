import React, { useState } from "react";
import { saveAs } from "file-saver";
import XLSX from "xlsx";
import axios from "axios";

const excel = require("xlsx");

function FileSaver() {
  const [fileData, setFileData] = useState("");
  const [fileName, setFileName] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange = (event) => {
    setFileData(event.target.value);
  };

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  const handleSave = () => {
    const file = new Blob([fileData], { type: "text/plain;charset=utf-8" });
    saveAs(file, `${fileName}.${selectedFormat}`);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/data");
      setData(response.data);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  const exportExcel = () => {
    // fetchData();
    const worksheet = excel.utils.json_to_sheet(data);
    const workbook = excel.utils.book_new();
    excel.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelData = excel.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelData], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "data.xlsx");
  };

  return (
    <div>
      <h1>File Saver</h1>
      <div>
        <label htmlFor="fileData">File Data:</label>
        <textarea
          id="fileData"
          value={fileData}
          onChange={handleInputChange}
          rows={10}
          cols={40}
        />
      </div>
      <div>
        <label htmlFor="fileName">File Name:</label>
        <input
          type="text"
          id="fileName"
          value={fileName}
          onChange={handleFileNameChange}
        />
      </div>
      <div>
        <label htmlFor="format">File Format:</label>
        <select
          id="format"
          value={selectedFormat}
          onChange={handleFormatChange}
        >
          <option value="">Select Format</option>
          <option value="txt">Text</option>
          <option value="json">JSON</option>
          <option value="csv">CSV</option>
          <option value="excel">Excel</option>
          {/* Add more format options as needed */}
        </select>
      </div>
      <button
        onClick={handleSave}
        disabled={!fileData || !fileName || !selectedFormat}
      >
        Save File
      </button>
      <button onClick={exportExcel}>Export as Excel</button>
    </div>
  );
}

export default FileSaver;
