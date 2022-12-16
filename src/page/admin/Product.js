import React, { useState, useEffect } from "react";
import AdminSidebar from "../../component/AdminSidebar";
import AdminProductCard from "../../component/AdminProductCard";
import axios from "axios";
import StateContainer from "../../helper/StateContainer";

function Product() {
  const [modalStatus, setmodalStatus] = useState(false);
  const [listProduk, setlistProduk] = useState({ first: true, data: [] });
  const [newProduct, setNewProduct] = useState({
    nama: "",
    detail: "",
    kuantitas: 0,
    harga: 0,
    id_jenis: 0,
    file: undefined,
  });

  const addJenisBarang = StateContainer((state) => state.addJenisBarang);
  const addKategoriBarang = StateContainer((state) => state.addKategoriBarang);
  const jenisBarang = StateContainer((state) => state.jenisBarang[0]);

  if (listProduk.first) {
    axios.get("http://localhost:4000/barang").then((response) => {
      setlistProduk({ first: false, data: response.data });
    });
  }
  useEffect(() => {
    axios.get("http://localhost:4000/jenis-barang").then((response) => {
      addJenisBarang(response.data);
    });
    axios.get("http://localhost:4000/kategori-barang").then((response) => {
      addKategoriBarang(response.data);
    });
  }, []);
  console.log(newProduct);
  let modal = "";
  if (modalStatus) {
    modal = (
      <div
        tabIndex="-1"
        className="fixed bg-black bg-opacity-80 mx-auto top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="absolute right-0 left-0 mx-auto top-[10%] max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              onClick={() => setmodalStatus(false)}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Tambah Produk
              </h3>
              <form
                className="space-y-6"
                onSubmit={(event) => {
                  const formData = new FormData();
                  formData.append("nama", newProduct.nama);
                  formData.append("detail", newProduct.detail);
                  formData.append("kuantitas", newProduct.kuantitas);
                  formData.append("harga", newProduct.harga);
                  formData.append("id_jenis", newProduct.id_jenis);
                  formData.append("file", newProduct.file);
                  axios.post(`http://localhost:4000/tambah-produk`, formData);

                  let asd = {
                    nama: newProduct.nama,
                    detail: newProduct.detail,
                    kuantitas: newProduct.kuantitas,
                    harga: newProduct.harga,
                    id_jenis: newProduct.id_jenis,
                    file: newProduct.file,
                  };
                }}
              >
                <div>
                  <label
                    htmlFor="nama-produk"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama Produk
                  </label>
                  <input
                    onChange={(event) => {
                      let val = event.target.value;
                      setNewProduct({
                        nama: val,
                        detail: newProduct.detail,
                        kuantitas: newProduct.kuantitas,
                        harga: newProduct.harga,
                        id_jenis: newProduct.id_jenis,
                        file: newProduct.file,
                      });
                    }}
                    type="text"
                    name="nama-produk"
                    id="nama-produk"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="apa kek yang keren"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="detail-produk"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Detail
                  </label>
                  <input
                    onChange={(event) => {
                      let val = event.target.value;
                      setNewProduct({
                        nama: newProduct.nama,
                        detail: val,
                        kuantitas: newProduct.kuantitas,
                        harga: newProduct.harga,
                        id_jenis: newProduct.id_jenis,
                        file: newProduct.file,
                      });
                    }}
                    type="text"
                    name="detail-produk"
                    id="detail-produk"
                    placeholder="seterah jangan panjang panjang"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div>
                    <label
                      htmlFor="kuantitas-produk"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Kuantitas
                    </label>
                    <input
                      onChange={(event) => {
                        let val = event.target.value;
                        setNewProduct({
                          nama: newProduct.nama,
                          detail: newProduct.detail,
                          kuantitas: val,
                          harga: newProduct.harga,
                          id_jenis: newProduct.id_jenis,
                          file: newProduct.file,
                        });
                      }}
                      type="number"
                      name="kuantitas-produk"
                      id="kuantitas-produk"
                      placeholder="jangan kebanyakan"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="harga-produk"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Harga
                    </label>
                    <input
                      onChange={(event) => {
                        let val = event.target.value;
                        setNewProduct({
                          nama: newProduct.nama,
                          detail: newProduct.detail,
                          kuantitas: newProduct.kuantitas,
                          harga: val,
                          id_jenis: newProduct.id_jenis,
                          file: newProduct.file,
                        });
                      }}
                      type="number"
                      name="harga-produk"
                      id="harga-produk"
                      placeholder="jangan kemahalan"
                      className="bg-gray-50 border border-gray-300 
                      text-gray-900 text-sm rounded-lg 
                      focus:ring-blue-500 focus:border-blue-500 
                      block w-full p-2.5 
                      dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="mr-3">
                    <label
                      htmlFor="jenis-produk"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Jenis
                    </label>
                    <select
                      onChange={(event) => {
                        let val = event.target.value;
                        setNewProduct({
                          nama: newProduct.nama,
                          detail: newProduct.detail,
                          kuantitas: newProduct.kuantitas,
                          harga: newProduct.harga,
                          id_jenis: val,
                          file: newProduct.file,
                        });
                      }}
                      id="jenis-produk"
                      className="bg-gray-50 border border-gray-300 
                      text-gray-900 text-sm rounded-lg block w-full p-2.5 
                      focus:ring-blue-500 focus:border-blue-500 
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected disabled>
                        Pilih Jenis
                      </option>
                      {jenisBarang.map((jenis, index) => {
                        return <option value={jenis.id}>{jenis.jenis}</option>;
                      })}
                    </select>
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="file_input"
                    >
                      Foto
                    </label>
                    <input
                      onChange={(event) => {
                        let val = event.target.files[0];
                        console.log(val);
                        setNewProduct({
                          nama: newProduct.nama,
                          detail: newProduct.detail,
                          kuantitas: newProduct.kuantitas,
                          harga: newProduct.harga,
                          id_jenis: newProduct.id_jenis,
                          file: val,
                        });
                      }}
                      id="file_input"
                      type="file"
                      className="block w-full text-sm text-gray-900 border border-gray-300 
                      rounded-lg cursor-pointer bg-gray-50 p-2
                      dark:text-gray-400 focus:outline-none dark:bg-gray-700 
                      dark:border-gray-600 dark:placeholder-gray-400"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row relative">
      <AdminSidebar key={1} />
      {modal}
      <div className="w-full ml-64">
        <div className="m-3 flex">
          <div className="inline-flex rounded-md shadow-sm">
            <a
              href="/administration-product-category"
              aria-current="page"
              className="py-2 px-4 text-sm font-medium text-blue-700 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Manage Category
            </a>
            <a
              onClick={() => setmodalStatus(true)}
              className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Add Product
            </a>
          </div>
          <div className="flex-auto ml-5">
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  onChange={(event) => {
                    let val = event.target.value;
                    if (val) {
                      axios
                        .get(`http://localhost:4000/cari-barang/${val}`)
                        .then((response) => {
                          setlistProduk({
                            first: listProduk.first,
                            data: response.data,
                          });
                        });
                    } else {
                      axios
                        .get(`http://localhost:4000/barang/`)
                        .then((response) => {
                          setlistProduk({
                            first: listProduk.first,
                            data: response.data,
                          });
                        });
                    }
                  }}
                  type="search"
                  id="default-search"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search items..."
                  required
                />
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-wrap ">
          {listProduk.data &&
            listProduk.data.map((produk, index) => {
              return (
                <AdminProductCard
                  key={index}
                  harga={produk.harga}
                  nama={produk.nama}
                  kuantitas={produk.kuantitas}
                  detail={produk.detail}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Product;
