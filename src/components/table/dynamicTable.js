import React, { useEffect, useState } from "react";
import "./table.css";
import moment from "moment";

const DynamicTable = ({
  TableData,
  currentData,
  setTableData,
  search = true,
  sort = true,
  setSearchQuery,
  viewButtonFn = () => {},
  editButtonFn = () => {},
  setSortName,
  sortName,
}) => {
  const [searchShow, setSearchShow] = useState(null);

  const toggleFn = (index) => {
    if (searchShow === index) {
      setSearchShow(null);
    } else {
      setSearchShow(index);
    }
  };

  const handleInputChange = (index, value) => {
    const updatedTableData = [...TableData];
    updatedTableData[index].search = value;
    setTableData(updatedTableData);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      let string = TableData.filter((item) => item.search && item.search !== "")
        .map((item) => `${item.value}=${item.search}`)
        .join("&");
      setSearchQuery(string);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [TableData]);

  return (
    <div className="table_container mt-4">
      <table className="w-100 text-nowrap">
        <thead className="table_heading">
          <tr className=" white_color fw_500 fs_16">
            <td className="table_left ps-3">
              <input type="checkbox" className="" />
            </td>
            {TableData?.map((item, index) => (
              <td
                className={`p-2 position-relative ${
                  index === TableData.length - 1 ? "table_right" : ""
                }`}
                key={index}
              >
                {search && item.value !== "view" && item.value !== "edit" && (
                  <i
                    className={`ri-search-2-line px-1 cursor_pointer ${item?.search ? "primary_color":"white_color"}`}
                    onClick={() => toggleFn(index)}
                  />
                )}
                {item.value !== "view" && item.value !== "edit" && item?.label}
                {sort && item.value !== "view" && item.value !== "edit" && (
                  <>
                    <i
                      className={`ri-arrow-up-s-fill position-absolute top-0   cursor_pointer ${
                        sortName === item.value
                          ? "primary_color"
                          : "white_color"
                      }`}
                      onClick={() => setSortName(item.value)}
                    />
                    <i
                      className={`ri-arrow-down-s-fill position-absolute bottom-0 cursor_pointer ${
                        sortName === `-${item.value}`
                          ? "primary_color"
                          : "white_color"
                      }`}
                      onClick={() => setSortName(`-${item.value}`)}
                    />
                  </>
                )}

                {searchShow === index && (
                  <input
                    type="search"
                    className="position-absolute search_input border_radius outline_none border_none ps-2 p-1"
                    value={item?.search}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    placeholder="Search"
                  />
                )}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="table_body primary_color">
          {currentData?.map((item, rowIndex) => (
            <tr key={item?._id}>
              <td
                className={`ps-3 fs_16 ${
                  rowIndex === currentData?.length - 1 ? "table_left_bot" : ""
                }`}
              >
                <input type="checkbox" />
              </td>
              {TableData?.map((tableItem, index) => (
                <td
                  key={index}
                  className={`p-2 px-3 ${
                    rowIndex === currentData?.length - 1 &&
                    index === TableData?.length - 1
                      ? "table_right_bot pe-3"
                      : ""
                  }`}
                >
                  {tableItem.value === "view" || tableItem.value === "edit" ? (
                    tableItem.button ? (
                      <button
                        className={`border_radius border_none px-3 fs_14 fw_500 ${
                          tableItem.value === "view"
                            ? "table_view_button"
                            : tableItem.value === "edit"
                            ? "table_edit_button"
                            : ""
                        }`}
                        onClick={() => {
                          if (tableItem.value === "view") {
                            viewButtonFn(item);
                          } else if (tableItem.value === "edit") {
                            editButtonFn(item);
                          }
                        }}
                      >
                        {tableItem.label}
                      </button>
                    ) : null
                  ) : tableItem.type === "date" ? (
                    moment(item[tableItem.value]).format("DD-MM-YYYY, HH:mm")
                  ) : (
                    item[tableItem.value]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
