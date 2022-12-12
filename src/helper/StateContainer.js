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
}));
export default StateContainer;
