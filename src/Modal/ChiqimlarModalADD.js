import React, { useState } from "react";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";

import { MoneyTransferContext } from "../context/context";
import { ToggleModalADD, ADD_CHIQIM, ADD_KIRIM } from "../features/Card_Slice";

function ChiqimlarModalADD(props) {
  const { foydalanuvchi, modalVisibleADD, kirimlar, kassa } = useSelector(
    (store) => store.kassaSlice
  );
  const dispatch = useDispatch();

  const data = React.useContext(MoneyTransferContext);
  const {
    inputValue,
    setInputValue,
    time,
    setTime,
    selectedKassa,
    setSelectedKassa,
    kassaItem,
    selectedUser,
    setSelectedUser,
    userItem,
  } = data;

  const onClickSave = (event) => {
    event.preventDefault();
    if (!userItem || !kassaItem || !inputValue || !time) {
      alert("Please fill out all fields");
      return;
    }
    dispatch(
      ADD_CHIQIM({
        id: kirimlar.length + 1,
        foydalanuvchi_id: {
          id: userItem.id,
          name: userItem.name,
        },
        miqdori: parseInt(inputValue),

        kassa_id: {
          id: kassaItem.id,
          name: kassaItem.name,
        },
        vaqti: time,
      })
    );
    setInputValue("");
    setSelectedUser("");
    setSelectedKassa("");
    dispatch(ToggleModalADD());
  };
  return (
    <div>
      <Modal isOpen={modalVisibleADD} toggle={ToggleModalADD}>
        <ModalHeader>Add Costs</ModalHeader>
        <ModalBody>
          <form className={"form"}>
            <select
              className="form-select"
              aria-label="Default select example"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              <option>Choose the User</option>
              {foydalanuvchi.map((item, index) => (
                <option key={item.id} value={index}>
                  {item.name}
                </option>
              ))}
            </select>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="number"
              placeholder={"Amount"}
              className={"form-control"}
            />{" "}
            <br />
            <select
              className="form-select"
              aria-label="Default select example"
              value={selectedKassa}
              onChange={(e) => setSelectedKassa(e.target.value)}
            >
              <option>Choose Cashbox</option>
              {kassa.map((item, index) => {
                const { name } = item;
                return (
                  <option key={item.id} value={index}>
                    {name}
                  </option>
                );
              })}
            </select>
            <input
              type="date"
              className={" form-control  my-3"}
              placeholder={"date"}
              onChange={(e) => setTime(e.target.value)}
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <button type={"submit"} onClick={onClickSave}>
            {" "}
            save
          </button>
          <button type={"button"} onClick={() => dispatch(ToggleModalADD())}>
            {" "}
            cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default ChiqimlarModalADD;
