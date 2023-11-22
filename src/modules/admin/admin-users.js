import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { findAllAdminActin } from "../../redux/action/adminAction";
import DynamicTable from "../../components/table/dynamicTable";
import Pagination from "../../components/pagination/pagination";

const AdminUsers = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [adminData, setAdminData] = useState([]);

  let tableArray = [
    {
      label: "First Name",
      value: "firstName",
      search: "",
    },
    {
      label: "Last Name",
      value: "lastName",
      search: "",
    },
    {
      label: "User Name",
      value: "userName",
      search: "",
    },
    {
      label: "Email",
      value: "emailAdress",
      search: "",
    },
    {
      label: "Phone No",
      value: "phoneNumber",
      search: "",
    },
    {
      label: "Job Title",
      value: "jobTitle",
      search: "",
    },
    {
      label: "Office Location",
      value: "officeLocation",
      search: "",
    },
    {
      label: "Created At",
      value: "createdAt",
      type: "date",
      search: "",
    },

    {
      label: "View",
      value: "view",
      button: true,
    },
    {
      label: "Edit",
      value: "edit",
      button: true,
    },
  ];

  const [tableData, setTableData] = useState(tableArray);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [sortName, setSortName] = useState("");
  useEffect(() => {
    setLoading(true);
    dispatch(
      findAllAdminActin(searchQuery, page, sortName, onSuccess, onError)
    );
  }, [searchQuery, page, sortName]);

  const onSuccess = (data) => {
    setLoading(false);
    setAdminData(data);
    console.log(data);
  };
  const onError = (data) => {
    setLoading(false);
    console.log(data);
  };

  const viewButtonFn = (data) => {
    console.log(data, "viiiiiiiiiiiiiiiiiewwwwwwwwwwwwww");
  };

  const editButtonFn = (data) => {
    console.log("edddddddddiiiiiiiiiiittttttttttt");
  };

  return (
    <>
      <div className="d-flex justify-content-between mx-3 pt-3">
        <span className="fs_24 primary_color fw_500">Admin Users</span>
        <span>Add admin</span>
      </div>
      <div className="mx-3">
        <DynamicTable
          TableData={tableData}
          search={true}
          setTableData={setTableData}
          currentData={adminData?.data}
          setSearchQuery={setSearchQuery}
          viewButtonFn={viewButtonFn}
          editButtonFn={editButtonFn}
          sortName={sortName}
          setSortName={setSortName}
        />
        <Pagination
          page={page}
          totalPage={adminData?.totalCount / 2}
          setPage={setPage}
        />
      </div>
    </>
  );
};

export default AdminUsers;
