import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kassa: [
    { id: 1, name: "Cashbox1" },
    { id: 2, name: "Cashbox2" },
    { id: 3, name: "Cashbox3" },
  ],
  foydalanuvchi: [
    { id: 1, name: "Mark", phone: 12234 },
    { id: 2, name: "Jacob", phone: 12234 },
    { id: 3, name: "Otto", phone: 12234 },
  ],
  kirimlar: [
    {
      id: 1,
      foydalanuvchi_id: { id: 1, name: "Mark", phone: 12234 },
      miqdori: 1500,
      kassa_id: { id: 1, name: "Cashbox1" },
      vaqti: "2021-01-14 ",
    },
    {
      id: 2,
      foydalanuvchi_id: { id: 2, name: "Jacob", phone: 12234 },
      miqdori: 2000,
      kassa_id: { id: 3, name: "Cashbox3" },
      vaqti: "2022-01-13 ",
    },
    {
      id: 3,
      foydalanuvchi_id: { id: 3, name: "Otto", phone: 12234 },
      miqdori: 1000,
      kassa_id: { id: 2, name: "Cashbox2" },
      vaqti: "2022-08-18 ",
    },
  ],

  chiqimlar: [
    {
      id: 1,
      foydalanuvchi_id: { id: 1, name: "Mark", phone: 12234 },
      miqdori: 500,
      kassa_id: { id: 1, name: "Cashbox1" },
      vaqti: "2021-01-14 ",
    },
    {
      id: 2,
      foydalanuvchi_id: { id: 2, name: "Jacob", phone: 12234 },
      miqdori: 1000,
      kassa_id: { id: 2, name: "Cashbox2" },
      vaqti: "2022-01-13 ",
    },
    {
      id: 3,
      foydalanuvchi_id: { id: 3, name: "Otto", phone: 12234 },
      miqdori: 500,
      kassa_id: { id: 2, name: "Cashbox2" },
      vaqti: "2022-08-18 ",
    },
  ],
  modalVisibleADD: false,
  modalVisibleEDIT: false,
  items: null,
};

const Card_Slice = createSlice({
  name: "kassa",
  initialState,
  reducers: {
    // DeleteKassa: (state, action) => {
    //     const DeleteID = action.payload
    //         state.kassa = state.kassa.filter((item) => item.id !== DeleteID)
    // },
    DeleteKirim: (state, action) => {
      const DeleteID = action.payload;
      state.kirimlar = state.kirimlar.filter((item) => item.id !== DeleteID);
    },
    DeleteChiqim: (state, action) => {
      const DeleteID = action.payload;
      state.chiqimlar = state.chiqimlar.filter((item) => item.id !== DeleteID);
    },
    ToggleModalADD: (state, action) => {
      state.modalVisibleADD = !state.modalVisibleADD;
      state.kassaAction = !state.kassaAction;
    },
    ToggleModalEdit: (state, action) => {
      state.modalVisibleEDIT = !state.modalVisibleEDIT;
    },
    // ADD_KASSA: (state, action) => {
    //     state.kassa.push(action.payload)
    //     // state.xodimlar.lavozim_id.push(action.payload)
    // },
    ADD_KIRIM: (state, action) => {
      state.kirimlar.push(action.payload);
    },
    ADD_CHIQIM: (state, action) => {
      state.chiqimlar.push(action.payload);
    },
    EDIT_USER: (state, action) => {
      state.items = action.payload.id;
    },
    // EDIT_KASSA: (state, action) => {
    //     const todo = action.payload
    //     state.kassa = state.kassa.map((item) => {
    //         if (item.id === state.EditID) {
    //             return {
    //                 ...item,
    //                 name: todo.name,
    //             }
    //         }
    //         return item
    //     })
    // },
    EDIT_KIRIM: (state, action) => {
      const todo = action.payload;
      state.kirimlar = state.kirimlar.map((item) => {
        if (item.id === state.items) {
          return {
            ...item,
            foydalanuvchi_id: {
              id: todo.foydalanuvchi_id.id,
              name: todo.foydalanuvchi_id.name,
            },
            miqdori: todo.miqdori,
            kassa_id: {
              id: todo.kassa_id.id,
              name: todo.kassa_id.name,
            },
            vaqti: todo.vaqti,
          };
        }
        return item;
      });
    },
    EDIT_CHIQIM: (state, action) => {
      const todo = action.payload;
      state.chiqimlar = state.chiqimlar.map((item) => {
        if (item.id === state.items) {
          return {
            ...item,
            foydalanuvchi_id: {
              id: todo.foydalanuvchi_id.id,
              name: todo.foydalanuvchi_id.name,
            },
            miqdori: todo.miqdori,
            kassa_id: {
              id: todo.kassa_id.id,
              name: todo.kassa_id.name,
            },
            vaqti: todo.vaqti,
          };
        }
        return item;
      });
    },
  },
});

export const {
  DeleteKassa,
  DeleteKirim,
  ToggleModalADD,
  ADD_KASSA,
  ADD_KIRIM,
  ToggleModalEdit,
  EDIT_USER,
  EDIT_KASSA,
  EDIT_KIRIM,
  ADD_CHIQIM,
  DeleteChiqim,
  EDIT_CHIQIM,
} = Card_Slice.actions;
export default Card_Slice.reducer;
