import React, { useState, useEffect } from "react";
import { TableContainer, Paper, Button, Container } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../components/Title";
import Pagination from "@mui/material/Pagination";

//import { saveAs } from "file-saver";
const UsersList = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      //  const response = await fetch("http://localhost:5000/api/users");
      const response = await fetch(
        "https://backend-server-theta.vercel.app/api/users"
      );
      const jsonData = await response.json();
      //  console.log("Register Data: ", jsonData);
      setData(jsonData);
      //    setData(response.data);
    } catch (error) {
      console.error("Error retrieving data: ", JSON.stringify(error));
    }
  };

  // Pagination handlers
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the indexes for the items to be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container
      sx={{
        mt: 3,
        ml: 30,
        width: "1200px",
        "@media (max-width:768px)": {
          width: "768px",
          marginLeft: 5,
        },
      }}
    >
      <Title>Users</Title>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ backgroundColor: "black", color: "white" }}>
              <TableCell sx={{ color: "white", fontSize: "1rem" }}>
                Date
              </TableCell>
              <TableCell sx={{ color: "white", fontSize: "1rem" }}>
                First Name
              </TableCell>
              <TableCell sx={{ color: "white", fontSize: "1rem" }}>
                Last Name
              </TableCell>
              <TableCell sx={{ color: "white", fontSize: "1rem" }}>
                Email
              </TableCell>
              {/*     <TableCell sx={{ color: "white", fontSize: "1rem" }}>
                Password
                </TableCell> */}
              <TableCell sx={{ color: "white", fontSize: "1rem" }}>
                Roles
              </TableCell>
              <TableCell sx={{ color: "white", fontSize: "1rem" }}>
                Term & Policy
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.updatedAt.slice(0, 10)}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>
                {/* <TableCell>{row.password}</TableCell> */}
                <TableCell>{row.roles}</TableCell>
                <TableCell>{row.termPolicy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={currentPage}
          onChange={(event, page) => handlePageChange(page)}
          className="pagination"
          color="primary"
          sx={{ mt: 3, mb: 3, display: "flex", justifyContent: "center" }}
        ></Pagination>
      </TableContainer>
    </Container>
  );
};

export default UsersList;
