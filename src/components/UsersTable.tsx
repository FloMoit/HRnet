import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import GlobalFilter from "./GlobalFilter";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import "../css/table.css";

const ColumnsUsers = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "First Name",
    accessor: "firstname",
  },
  {
    Header: "Last Name",
    accessor: "lastname",
  },
  {
    Header: "Start Date",
    accessor: "startdate",
    sortType: (rowA, rowB) => {
      const dateA = new Date(rowA.values.startdate);
      const dateB = new Date(rowB.values.startdate);
      return dateA - dateB;
    },
  },
  {
    Header: "Department",
    accessor: "department",
  },
  {
    Header: "Date of Birth",
    accessor: "birthdate",
    sortType: (rowA, rowB) => {
      const dateA = new Date(rowA.values.birthdate);
      const dateB = new Date(rowB.values.birthdate);
      return dateA - dateB;
    },
  },
  {
    Header: "Street",
    accessor: "street",
  },
  {
    Header: "City",
    accessor: "city",
  },
  {
    Header: "State",
    accessor: "state",
  },
  {
    Header: "Zip Code",
    accessor: "zipcode",
  },
];
export const UsersTable = () => {
  const columns = useMemo(() => ColumnsUsers, []);
  const data = useSelector((state) => state.data).users;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setPageSize,
    setGlobalFilter,
    prepareRow,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

  const { pageIndex, pageSize } = state;
  const { globalFilter } = state;

  return (
    <div className="w-full mt-4">
      <div className="flex items-center justify-between gap-5 p-4 text-lg">
        <div>
          <label htmlFor="size">Show </label>
          <select
            className="p-1 font-bold rounded text-slate-800"
            id="size"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}>
            {[10, 25, 50, 100].map((pageSize) => (
              <option key={pageSize}>{pageSize}</option>
            ))}
          </select>
          <span> Entries </span>
        </div>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FontAwesomeIcon
                          className="ml-1 mr-1"
                          icon={faSortUp}
                        />
                      ) : (
                        <FontAwesomeIcon
                          className="ml-1 mr-1"
                          icon={faSortDown}
                        />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex items-center justify-center p-4 text-lg">
        <button
          className="w-24 px-2 py-1 border-2 rounded bg-slate-200 text-slate-800 border-slate-200"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}>
          Previous
        </button>
        <span className="m-2">
          page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button
          className="w-24 px-2 py-1 border-2 rounded bg-slate-200 text-slate-800 border-slate-200"
          onClick={() => nextPage()}
          disabled={!canNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};
