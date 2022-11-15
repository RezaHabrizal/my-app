import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function ModalDetail({ openModal, setOpenModal, data, setData, saveChanges }) {
  return (
    <>
      <Modal show={openModal} onHide={openModal}>
        <Modal.Header>
          <Modal.Title>Customer Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="email"
              className="form-control"
              id="name"
              placeholder={data.name}
              onChange={(e) =>
                setData({
                  ...data,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder={data.email}
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder={data.password}
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Is Married</label>
            <Form.Select
              onChange={(e) => {
                setData({
                  ...data,
                  is_married: e.target.value === "1" ? true : false,
                });
              }}
            >
              <option defaultChecked>{data.is_married ? "Yes" : "No"}</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </Form.Select>
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="email"
              className="form-control"
              id="address"
              placeholder={data.address}
              onChange={(e) =>
                setData({
                  ...data,
                  address: e.target.value,
                })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => saveChanges("edit", data.id)}
          >
            Save Changes
          </Button>
          <Button
            variant="danger"
            onClick={() => saveChanges("delete", data.id)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDetail;
