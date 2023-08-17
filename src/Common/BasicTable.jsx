import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function BasicTable({ columns, rows }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns?.map((column, i) => (
              <TableCell key={i} align="left">
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row, i) => (
            <TableRow key={i}>
              <TableCell align="left">
                <Link to={`http://localhost:3000/books/${row._id}`}>
                  {row.name}
                </Link>
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.author}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">
                {row.available ? "Available" : "Not available"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
