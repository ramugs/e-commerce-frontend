import React from "react";

const Pagination = ({ page, totalPage, setPage }) => {
  const paginationFn = (sign) => {
    if (sign === "+") {
      setPage((perv) => perv + 1);
    } else if (sign === "-") {
      setPage((perv) => perv - 1);
    }
  };
  return (
    <div className="d-flex justify-content-end me-3">
      <div className="d-flex gap-2">
        <span className="primary_color fs_16 fw_500">
          {page + " / " + totalPage}
        </span>
        <button
          className="border_none background_none fs_16 fw_500"
          disabled={page <= 1}
          onClick={() => {
            paginationFn("-");
          }}
        >
          {"<"}
        </button>
        <button
          className="border_none background_none fs_16 fw_500"
          disabled={page >= totalPage}
          onClick={() => {
            paginationFn("+");
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
