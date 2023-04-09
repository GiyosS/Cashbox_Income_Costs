import React from "react";

import { useSelector } from "react-redux";

function Foydalanuvchi(props) {
  const { kirimlar, chiqimlar } = useSelector((store) => store.kassaSlice);

  const Mark_Kassa1_Kirim = kirimlar
    .filter((item) => item.foydalanuvchi_id.id === 1 && item.kassa_id.id === 1)
    .reduce((item, index) => item + index.miqdori, 0);
  const Mark_Kassa1_Chiqim = chiqimlar
    .filter((item) => item.foydalanuvchi_id.id === 1 && item.kassa_id.id === 1)
    .reduce((item, index) => item + index.miqdori, 0);
  const Mark_Kassa1_Balans = Mark_Kassa1_Kirim - Mark_Kassa1_Chiqim;

  const Mark_Kassa2_Kirim = kirimlar
    .filter((item) => item.foydalanuvchi_id.id === 1 && item.kassa_id.id === 2)
    .reduce((item, index) => item + index.miqdori, 0);
  const Mark_Kassa2_Chiqim = chiqimlar
    .filter((item) => item.foydalanuvchi_id.id === 1 && item.kassa_id.id === 2)
    .reduce((item, index) => item + index.miqdori, 0);
  const Mark_Kassa2_Balans = Mark_Kassa2_Kirim - Mark_Kassa2_Chiqim;

  const Mark_Kassa3_Kirim = kirimlar
    .filter((item) => item.foydalanuvchi_id.id === 1 && item.kassa_id.id === 3)
    .reduce((item, index) => item + index.miqdori, 0);
  const Mark_Kassa3_Chiqim = chiqimlar
    .filter((item) => item.foydalanuvchi_id.id === 1 && item.kassa_id.id === 3)
    .reduce((item, index) => item + index.miqdori, 0);
  const Mark_Kassa3_Balans = Mark_Kassa3_Kirim - Mark_Kassa3_Chiqim;

  const Jacob_Kassa1_Kirim = kirimlar
    .filter((item) => item.foydalanuvchi_id.id === 2 && item.kassa_id.id === 1)
    .reduce((item, index) => item + index.miqdori, 0);
  const Jacob_Kassa1_Chiqim = chiqimlar
    .filter((item) => item.foydalanuvchi_id.id === 2 && item.kassa_id.id === 1)
    .reduce((item, index) => item + index.miqdori, 0);
  const Jacob_Kassa1_Balans = Jacob_Kassa1_Kirim - Jacob_Kassa1_Chiqim;

  const Jacob_Kassa2_Kirim = kirimlar
    .filter((item) => item.foydalanuvchi_id.id === 2 && item.kassa_id.id === 2)
    .reduce((item, index) => item + index.miqdori, 0);
  const Jacob_Kassa2_Chiqim = chiqimlar
    .filter((item) => item.foydalanuvchi_id.id === 2 && item.kassa_id.id === 2)
    .reduce((item, index) => item + index.miqdori, 0);
  const Jacob_Kassa2_Balans = Jacob_Kassa2_Kirim - Jacob_Kassa2_Chiqim;

  const Jacob_Kassa3_Kirim = kirimlar
    .filter((item) => item.foydalanuvchi_id.id === 2 && item.kassa_id.id === 3)
    .reduce((item, index) => item + index.miqdori, 0);
  const Jacob_Kassa3_Chiqim = chiqimlar
    .filter((item) => item.foydalanuvchi_id.id === 2 && item.kassa_id.id === 3)
    .reduce((item, index) => item + index.miqdori, 0);
  const Jacob_Kassa3_Balans = Jacob_Kassa3_Kirim - Jacob_Kassa3_Chiqim;

  const Ottp_Kassa1_Kirim = kirimlar
    .filter((item) => item.foydalanuvchi_id.id === 3 && item.kassa_id.id === 1)
    .reduce((item, index) => item + index.miqdori, 0);
  const Otto_Kassa1_Chiqim = chiqimlar
    .filter((item) => item.foydalanuvchi_id.id === 3 && item.kassa_id.id === 1)
    .reduce((item, index) => item + index.miqdori, 0);
  const Otto_Kassa1_Balans = Ottp_Kassa1_Kirim - Otto_Kassa1_Chiqim;

  const Ottp_Kassa2_Kirim = kirimlar
    .filter((item) => item.foydalanuvchi_id.id === 3 && item.kassa_id.id === 2)
    .reduce((item, index) => item + index.miqdori, 0);
  const Otto_Kassa2_Chiqim = chiqimlar
    .filter((item) => item.foydalanuvchi_id.id === 3 && item.kassa_id.id === 2)
    .reduce((item, index) => item + index.miqdori, 0);
  const Otto_Kassa2_Balans = Ottp_Kassa2_Kirim - Otto_Kassa2_Chiqim;

  const Ottp_Kassa3_Kirim = kirimlar
    .filter((item) => item.foydalanuvchi_id.id === 3 && item.kassa_id.id === 3)
    .reduce((item, index) => item + index.miqdori, 0);
  const Otto_Kassa3_Chiqim = chiqimlar
    .filter((item) => item.foydalanuvchi_id.id === 3 && item.kassa_id.id === 3)
    .reduce((item, index) => item + index.miqdori, 0);
  const Otto_Kassa3_Balans = Ottp_Kassa3_Kirim - Otto_Kassa3_Chiqim;

  return (
    <div className="row">
      <h2>Balance</h2>
      <h3>Mark-Cashbox1-Balance----- {Mark_Kassa1_Balans}</h3>
      <h3>Mark-Cashbox2-Balance----- {Mark_Kassa2_Balans}</h3>
      <h3>Mark-Cashbox3-Balance----- {Mark_Kassa3_Balans}</h3>
      <br />
      <br />
      <br />
      <h3>Jacob_Cashbox1_Balance ----- {Jacob_Kassa1_Balans}</h3>
      <h3>Jacob_Cashbox2_Balance ----- {Jacob_Kassa2_Balans}</h3>
      <h3>Jacob_Cashbox3_Balance ----- {Jacob_Kassa3_Balans}</h3>
      <br />
      <br />
      <br />
      <h3>Otto_Cashbox1_Balance ----- {Otto_Kassa1_Balans}</h3>
      <h3>Otto_Cashbox2_Balance ----- {Otto_Kassa2_Balans}</h3>
      <h3>Otto_Cashbox3_Balance ----- {Otto_Kassa3_Balans}</h3>

      <br />
      <br />
      <br />
      <h2>User Income</h2>

      <div className="col-md-8">
        <table className="table border-1">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Cashbox</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {kirimlar
              .filter((item) => item.foydalanuvchi_id.id === 1)
              .map((value, index) => (
                <tr key={index}>
                  <td>{value.foydalanuvchi_id.name}</td>
                  <td>{value.kassa_id.name}</td>
                  <td>{value.miqdori}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="col-md-8">
        <table className="table border-1">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Cashbox</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {kirimlar
              .filter((item) => item.foydalanuvchi_id.id === 2)
              .map((value, index) => (
                <tr key={index}>
                  <td>{value.foydalanuvchi_id.name}</td>
                  <td>{value.kassa_id.name}</td>
                  <td>{value.miqdori}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="col-md-8">
        <table className="table border-1">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Cashbox</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {kirimlar
              .filter((item) => item.foydalanuvchi_id.id === 3)
              .map((value, index) => (
                <tr key={index}>
                  <td>{value.foydalanuvchi_id.name}</td>
                  <td>{value.kassa_id.name}</td>
                  <td>{value.miqdori}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />

      <h2>User Costs</h2>
      <div className="col-md-8">
        <table className="table border-1">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Cashbox</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {chiqimlar
              .filter((item) => item.foydalanuvchi_id.id === 1)
              .map((value, index) => (
                <tr key={index}>
                  <td>{value.foydalanuvchi_id.name}</td>
                  <td>{value.kassa_id.name}</td>
                  <td>{value.miqdori}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="col-md-8">
        <table className="table border-1">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Cashbox</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {chiqimlar
              .filter((item) => item.foydalanuvchi_id.id === 2)
              .map((value, index) => (
                <tr key={index}>
                  <td>{value.foydalanuvchi_id.name}</td>
                  <td>{value.kassa_id.name}</td>
                  <td>{value.miqdori}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="col-md-8">
        <table className="table border-1">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Cashbox</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {chiqimlar
              .filter((item) => item.foydalanuvchi_id.id === 3)
              .map((value, index) => (
                <tr key={index}>
                  <td>{value.foydalanuvchi_id.name}</td>
                  <td>{value.kassa_id.name}</td>
                  <td>{value.miqdori}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Foydalanuvchi;
