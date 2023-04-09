import { useDispatch, useSelector } from "react-redux";

import KirimModalADD from "../Modal/KirimModalADD";
import KirimModalEdit from "../Modal/KirimModalEdit";
import {
  DeleteKirim,
  EDIT_USER,
  ToggleModalADD,
  ToggleModalEdit,
} from "../features/Card_Slice";

function Kirim(props) {
  const { kirimlar } = useSelector((store) => store.kassaSlice);
  const dispatch = useDispatch();

  function Edit(items) {
    dispatch(ToggleModalEdit());
    dispatch(EDIT_USER(items));
  }
  const Delete = (item) => {
    dispatch(DeleteKirim(item.id));
  };

  return (
    <div className={"row"}>
      <div className="col-md-8">
        <h1>Income</h1>
      </div>
      <div className="col-md-4">
        <button
          className={"btn btn-success "}
          onClick={() => dispatch(ToggleModalADD())}
        >
          +ADD
        </button>
      </div>
      <table className="table border-1">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Cashbox</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          {kirimlar.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.foydalanuvchi_id.name}</td>
              <td>{item.miqdori}</td>
              <td>{item.kassa_id.name}</td>
              <td>{item.vaqti}</td>

              <td>
                <button
                  className={"btn btn-warning"}
                  onClick={() => Edit(item)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className={"btn btn-danger"}
                  onClick={() => Delete(item)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <KirimModalADD />
      <KirimModalEdit />
    </div>
  );
}

export default Kirim;
