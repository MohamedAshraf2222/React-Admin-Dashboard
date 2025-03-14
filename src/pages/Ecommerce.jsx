import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import product9 from "../data/product9.jpg";

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200
        h-44 rounded-xl w-full lg:w-80 p-8 m-3 bg-hero-pattern
        bg-no-repeat bg-cover bg-center"
        >
          <div className="flex justify-between items-center">
            <div className="">
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$61,445.00</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex justify-center flex-wrap m-3 gap-1 items-center">
          {earningData.map((item, i) => (
            <div
              className="flex flex-col justify-center items-center bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
              key={i}
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div
          className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200
        m-3 p-4 rounded-2xl md:w-780"
        >
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-10 gap-10 justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div className="">
                <p>
                  <span className="text-3xl font-semibold">$93,456</span>
                  <span
                    className="p-1.5 hover:drop-shadow-xl cursor-pointer
                  rounded-full text-white bg-green-400 ml-3"
                  >
                    23%
                  </span>
                  <p className="text-gray-500 mt-1">Budget</p>
                </p>
              </div>
              <div className="">
                <p>
                  <span className="text-3xl font-semibold">$43,035</span>
                  <p className="text-gray-500 mt-1">Expense</p>
                </p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor="blue"
                  color="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                />
              </div>
              <div className="mt-10">
                <Button
                  bgColor={currentColor}
                  text={"Download Report"}
                  borderRadius={"10px"}
                  color={"white"}
                />
              </div>
            </div>
            <div className="">
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
