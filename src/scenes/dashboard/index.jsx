import * as React from "react";
import Header from "../../components/Header"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import TablePagination from "@mui/material/TablePagination";
import { rows } from "../../indData";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const Dashboard = ()  => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const history = useNavigate();

    async function onAdd(props) {
        console.log("Button pressed");
        history("/watchlist");
        
    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    return (
        <>
        <Header title="Stock Listings With Symbols" subtitle="Welcome to home page" />
        <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Figi</TableCell>
            <TableCell>MIC</TableCell>
            <TableCell>Add in watch list</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.symbol}</TableCell>
                <TableCell>{row.figi}</TableCell>
                <TableCell>{row.mic}</TableCell>
                <TableCell>
                  <AddCircleOutlineIcon
                    type="submit"
                    value={row}
                    aria-label="fingerprint"
                    onClick={() => onAdd(row)}
                    color="success"
                  >
                    
                  </AddCircleOutlineIcon>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </>

    )
}

export default Dashboard;