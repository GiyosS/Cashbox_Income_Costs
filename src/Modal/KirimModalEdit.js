import React, { useState } from "react";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";

import { MoneyTransferContext } from "../context/context";
import {
  ToggleModalEdit,
  EDIT_KIRIM,
  ToggleModalADD,
} from "../features/Card_Slice";

function KirimModalEdit() {
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

  const { modalVisibleEDIT, kassa, foydalanuvchi } = useSelector(
    (store) => store.kassaSlice
  );
  const dispatch = useDispatch();

  const onClickSave = (event) => {
    event.preventDefault();
    if (!userItem || !kassaItem || !time || !inputValue) {
      alert("Please fill out all fields");
      return;
    }
    event.preventDefault();
    dispatch(
      EDIT_KIRIM({
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
    dispatch(ToggleModalEdit());
  };
  return (
    <div>
      <Modal isOpen={modalVisibleEDIT} toggle={ToggleModalEdit}>
        <ModalHeader>Edit</ModalHeader>
        <ModalBody>
          <form className={"form"}>
            <select
              className="form-select"
              aria-label="Default select example"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              <option>Choose the User </option>
              {foydalanuvchi.map((item, index) => (
                <option key={item.id} value={index}>
                  {item.name}
                </option>
              ))}
            </select>
            <input
              type={"number"}
              className={" form-control  my-3"}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={"Amount"}
            />
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
              onChange={(e) => setTime(e.target.value)}
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <button type={"submit"} onClick={onClickSave}>
            {" "}
            save
          </button>
          <button type={"button"} onClick={() => dispatch(ToggleModalEdit())}>
            {" "}
            cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default KirimModalEdit;
