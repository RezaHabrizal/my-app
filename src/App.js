import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

import Modal from "./Components/Modal";

const baseURL = process.env.REACT_APP_API_URL_BASE_API;

function App() {
  const [openModal, setOpenModal] = useState(false);
  const tableCol = [
    "name",
    "email",
    "password",
    "gender",
    "is_married",
    "address",
  ];
  const [detailCust, setDetailCust] = useState({});
  const [refetch, setRefetch] = useState(false);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const { data } = await axios({
          url: `${baseURL}/customer`,
          method: "GET",
        });
        setCustomers(data.data);
      } catch (error) {
        console.log("error during get /customers");
      }
    };
    getList();
  }, [refetch]);

  const setModalData = (data) => {
    setDetailCust(data);
    setOpenModal(true);
  };

  const saveChanges = async (type, id) => {
    switch (type) {
      case "edit":
        await axios({
          url: `${baseURL}/customer/${id}'`,
          method: "PUT",
          data: detailCust,
        });
        setRefetch(!refetch);
        setOpenModal(false);
        return;
      case "delete":
        await axios({
          url: `${baseURL}/customer/${id}'`,
          method: "DELETE",
        });
        setRefetch(!refetch);
        setOpenModal(false);
        return;
    }
  };

  return (
    <>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        data={detailCust}
        setData={setDetailCust}
        saveChanges={saveChanges}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            {tableCol.map((el, i) => (
              <th key={i.toString()}>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {customers.map((el) => (
            <tr
              key={el.id.toString()}
              onClick={() => setModalData(el)}
              role="button"
            >
              {tableCol.map((elem, i) => (
                <td key={i.toString()}>
                  {elem !== "is_married" ? el[elem] : el[elem] ? "Yes" : "No"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default App;
