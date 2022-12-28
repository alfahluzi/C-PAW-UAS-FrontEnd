import axios from "axios";
import React, { useState } from "react";
import StateContainer from "../helper/StateContainer";
import Alert from "./Alert";
function AdminProductCard({
  id,
  nama,
  detail,
  kuantitas,
  harga,
  foto = "default.jpg",
}) {
  let modal = "";
  const [modalStatus, setmodalStatus] = useState(false);
  const jenisBarang = StateContainer((state) => state.jenisBarang[0]);
  const [alert, setAlert] = useState({
    status: false,
    message: "",
    positive: () => {},
    negative: () => {},
  });
  const [editProductFile, setEditProductFile] = useState();
  const [editProduct, setEditProduct] = useState({
    nama: nama,
    detail: detail,
    kuantitas: kuantitas,
    harga: harga,
    id_jenis: 0,
    filename: "",
  });
  console.log(editProduct);
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
                Edit Produk
              </h3>
              <form
                className="space-y-6"
                onSubmit={(event) => {
                  event.preventDefault();
                  var formdata = new FormData();
                  formdata.append("id", id);
                  formdata.append("nama", editProduct.nama);
                  formdata.append("detail", editProduct.detail);
                  formdata.append("kuantitas", editProduct.kuantitas);
                  formdata.append("harga", editProduct.harga);
                  formdata.append("id_jenis", editProduct.id_jenis);
                  formdata.append("filename", editProduct.filename);
                  formdata.append("file", editProductFile);
                  axios
                    .post(`http://localhost:4000/edit-produk`, formdata)
                    .then((response) => {
                      console.log(response);
                      window.location.reload();
                    });
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
                      setEditProduct({
                        nama: val,
                        detail: editProduct.detail,
                        kuantitas: editProduct.kuantitas,
                        harga: editProduct.harga,
                        id_jenis: editProduct.id_jenis,
                        filename: editProduct.filename,
                      });
                    }}
                    type="text"
                    name="nama-produk"
                    id="nama-produk"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"
                    defaultValue={nama}
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
                      setEditProduct({
                        nama: editProduct.nama,
                        detail: val,
                        kuantitas: editProduct.kuantitas,
                        harga: editProduct.harga,
                        id_jenis: editProduct.id_jenis,
                        filename: editProduct.filename,
                      });
                    }}
                    type="text"
                    name="detail-produk"
                    id="detail-produk"
                    defaultValue={detail}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"
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
                        setEditProduct({
                          nama: editProduct.nama,
                          detail: editProduct.detail,
                          kuantitas: val,
                          harga: editProduct.harga,
                          id_jenis: editProduct.id_jenis,
                          filename: editProduct.filename,
                        });
                      }}
                      type="number"
                      name="kuantitas-produk"
                      id="kuantitas-produk"
                      defaultValue={kuantitas}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"
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
                        setEditProduct({
                          nama: editProduct.nama,
                          detail: editProduct.detail,
                          kuantitas: editProduct.kuantitas,
                          harga: val,
                          id_jenis: editProduct.id_jenis,
                          filename: editProduct.filename,
                        });
                      }}
                      type="number"
                      name="harga-produk"
                      id="harga-produk"
                      defaultValue={harga}
                      className="bg-gray-50 border border-gray-300 
                      text-gray-900 text-sm rounded-lg 
                      focus:ring-blue-500 focus:border-blue-500 
                      block w-full p-2.5 
                      dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"
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
                        setEditProduct({
                          nama: editProduct.nama,
                          detail: editProduct.detail,
                          kuantitas: editProduct.kuantitas,
                          harga: editProduct.harga,
                          id_jenis: val,
                          filename: editProduct.filename,
                        });
                      }}
                      id="jenis-produk"
                      className="bg-gray-50 border border-gray-300 
                      text-gray-900 text-sm rounded-lg block w-full p-2.5 
                      focus:ring-blue-500 focus:border-blue-500 
                      dark:bg-gray-700 dark:border-gray-600 dark:value-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        setEditProductFile(val);
                        setEditProduct({
                          nama: editProduct.nama,
                          detail: editProduct.detail,
                          kuantitas: editProduct.kuantitas,
                          harga: editProduct.harga,
                          id_jenis: editProduct.id_jenis,
                          filename: val.name,
                        });
                      }}
                      id="file_input"
                      type="file"
                      className="block w-full text-sm text-gray-900 border border-gray-300 
                      rounded-lg cursor-pointer bg-gray-50 p-2
                      dark:text-gray-400 focus:outline-none dark:bg-gray-700 
                      dark:border-gray-600 dark:value-gray-400"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setAlert({
                        status: true,
                        message: "Yakin ingin Hapus?",
                        positive: () => {
                          axios
                            .post("http://localhost:4000/hapus-produk", {
                              id: id,
                            })
                            .then((response) => {
                              window.location.reload();
                            });
                        },
                        negative: () => {
                          setAlert({
                            status: false,
                            message: "",
                            positive: () => {},
                            negative: () => {},
                          });
                        },
                      });
                    }}
                    className="w-[48%] text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    Hapus
                  </button>
                  <button
                    type="submit"
                    className="w-[48%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-[19vw] h-80 m-2 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      {modal}
      {alert.status ? (
        <Alert
          key={1}
          alertMessage={alert.message}
          positiveCallBack={alert.positive}
          negativeCallBack={alert.negative}
        />
      ) : (
        ""
      )}
      <a href="#">
        <img
          className="object-cover p-4 rounded-t-lg w-[100%] h-44"
          src={`http://localhost:4000/images/${foto}`}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <div className="h-[54px] container">
          <a href="#">
            <h5 className="text-base lg:text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              {nama}
            </h5>
          </a>
        </div>
        <div className="flex items-center mt-2.5 mb-3">
          <span className="text-sm lg:text-base  text-gray-900 dark:text-white">
            Stok {kuantitas}
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            5.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-base lg:text-lg font-bold text-gray-900 dark:text-white">
            Rp{harga}
          </span>

          <button
            type="button"
            onClick={() => setmodalStatus(true)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
export default AdminProductCard;
