import { useDispatch, useSelector } from "react-redux";

function Pul(props) {
  const { kirimlar, chiqimlar } = useSelector((store) => store.kassaSlice);
  const dispatch = useDispatch();

  const kirimKassa1 = kirimlar
    .filter((item) => item.kassa_id.id === 1)
    .reduce((item, index) => item + index.miqdori, 0);
  const chiqimKassa1 = chiqimlar
    .filter((item) => item.kassa_id.id === 1)
    .reduce((item, index) => item + index.miqdori, 0);
  const kassa1 = kirimKassa1 - chiqimKassa1;

  const kirimKassa2 = kirimlar
    .filter((item) => item.kassa_id.id === 2)
    .reduce((item, index) => item + index.miqdori, 0);
  const chiqimKassa2 = chiqimlar
    .filter((item) => item.kassa_id.id === 2)
    .reduce((item, index) => item + index.miqdori, 0);
  const kassa2 = kirimKassa2 - chiqimKassa2;
  const kirimKassa3 = kirimlar
    .filter((item) => item.kassa_id.id === 3)
    .reduce((item, index) => item + index.miqdori, 0);
  const chiqimKassa3 = chiqimlar
    .filter((item) => item.kassa_id.id === 3)
    .reduce((item, index) => item + index.miqdori, 0);
  const kassa3 = kirimKassa3 - chiqimKassa3;
  return (
    <div>
      {/*<button onChange={Count}>count</button>*/}
      <div className="row">
        <h3>Money in Cashbox1 {kassa1}</h3>
        <h3>Money in Cashbox2 {kassa2}</h3>
        <h3>Money in Cashbox3 {kassa3}</h3>

        <br />
        <br />
        <br />

        <div className="col-md-10">
          <h2>Cashbox 1 </h2>
          <div className="row">
            <div className="col-md-6">
              <table className="table border-1">
                <thead>
                  <tr>
                    <th scope="col">Income</th>
                  </tr>
                </thead>
                <tbody>
                  {kirimlar
                    .filter((item) => item.kassa_id.id === 1)
                    .map((value, index) => (
                      <tr key={index}>
                        <td>{value.miqdori}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <table className="table border-1">
                <thead>
                  <tr>
                    <th scope="col">Costs</th>
                  </tr>
                </thead>
                <tbody>
                  {chiqimlar
                    .filter((item) => item.kassa_id.id === 1)
                    .map((value, index) => (
                      <tr key={index}>
                        <td>{value.miqdori}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-10">
          <h2>Cashbox 2 </h2>
          <div className="row">
            <div className="col-md-6">
              <table className="table border-1">
                <thead>
                  <tr>
                    <th scope="col">Income</th>
                  </tr>
                </thead>
                <tbody>
                  {kirimlar
                    .filter((item) => item.kassa_id.id === 2)
                    .map((value, index) => (
                      <tr key={index}>
                        <td>{value.miqdori}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <table className="table border-1">
                <thead>
                  <tr>
                    <th scope="col">Costs</th>
                  </tr>
                </thead>
                <tbody>
                  {chiqimlar
                    .filter((item) => item.kassa_id.id === 2)
                    .map((value, index) => (
                      <tr key={index}>
                        <td>{value.miqdori}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-10">
          <h2>Cashbox 3 </h2>
          <div className="row">
            <div className="col-md-6">
              <table className="table border-1">
                <thead>
                  <tr>
                    <th scope="col">Income</th>
                  </tr>
                </thead>
                <tbody>
                  {kirimlar
                    .filter((item) => item.kassa_id.id === 3)
                    .map((value, index) => (
                      <tr key={index}>
                        <td>{value.miqdori}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <table className="table border-1">
                <thead>
                  <tr>
                    <th scope="col">Costs</th>
                  </tr>
                </thead>
                <tbody>
                  {chiqimlar
                    .filter((item) => item.kassa_id.id === 3)
                    .map((value, index) => (
                      <tr key={index}>
                        <td>{value.miqdori}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Pul;
