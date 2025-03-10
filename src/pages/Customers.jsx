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
  Edit,
  Selection,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title={"Customers"} category={"Page"} />
      <GridComponent
        allowSorting
        allowSelection
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }} 
        dataSource={customersData}
        allowPaging
        width={"auto"}
      >
        <ColumnsDirective>
          {customersGrid.map((order, i) => (
            <ColumnDirective key={i} {...order} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Edit, Selection]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
