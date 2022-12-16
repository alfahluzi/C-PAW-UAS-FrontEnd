import create from "zustand";

const StateContainer = create((set) => ({
  jenisBarang: [], //////////////////////////////////
  addJenisBarang: (data) =>
    set((state) => ({
      jenisBarang: [data, ...state.jenisBarang],
    })),
  resetJenisBarang: () =>
    set((state) => ({
      jenisBarang: [],
    })),
  kategoriBarang: [], //////////////////////////////////
  addKategoriBarang: (data) =>
    set((state) => ({
      kategoriBarang: [data, ...state.kategoriBarang],
    })),
  resetKategoriBarang: () =>
    set((state) => ({
      kategoriBarang: [],
    })),
  log: [], //////////////////////////////////
  addLog: (data) =>
    set((state) => ({
      log: [data, ...state.log],
    })),
  resetLog: () =>
    set((state) => ({
      log: [],
    })),
}));
export default StateContainer;
