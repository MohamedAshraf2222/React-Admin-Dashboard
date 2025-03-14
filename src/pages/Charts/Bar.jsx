import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  ColumnSeries,
  Tooltip,
  Category,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";

const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category={"Chart"} title={"Bar Chart"} />
      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        className="cursor-pointer"
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        style={{ color: currentMode === "dark" ? "white" : "" }}
        background={currentMode === "dark" ? "#33373E" : "#fff"}
        legendSettings={{
          background: currentMode === "dark" ? "#33373E" : "white",
          textStyle: { color: currentMode === "dark" ? "white" : "" },
        }}
      >
        <Inject
          services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
