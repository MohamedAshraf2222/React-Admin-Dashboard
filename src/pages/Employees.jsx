import React from "react";
import "@syncfusion/ej2-react-grids/styles/material.css";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import {  contextMenuItems, employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title={"Employees"} category={"Page"} />
      <GridComponent
        allowSorting
        dataSource={employeesData}
        allowPaging
        toolbar={["Search"]}
        width={"auto"}
      >
        <ColumnsDirective>
          {employeesGrid.map((order, i) => (
            <ColumnDirective key={i} {...order} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page,Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
