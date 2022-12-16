import React, { useState, useEffect } from "react";
import AdminSidebar from "../../component/AdminSidebar";
import StateContainer from "../../helper/StateContainer";
import axios from "axios";
import Alert from "../../component/Alert";
class KategoriBarang {
  constructor(id, nama) {
    this.id = id;
    this.nama = nama;
  }
}
class JenisBarang {
  constructor(id, jenis, kategori_id) {
    this.id = id;
    this.jenis = jenis;
    this.kategori_id = kategori_id;
  }
}

function ManageCategory() {
  const [editJenisModalStatus, setEditJenisModalStatus] = useState({
    status: false,
    jenis: new JenisBarang(null, null, ""),
  });
  const [editKategoriModalStatus, setEditKategoriModalStatus] = useState({
    status: false,
    kategori: new KategoriBarang(null, ""),
  });
  const [tambahJenisModalStatus, setTambahJenisModalStatus] = useState({
    status: false,
    newJenis: "",
    kategoriId: null,
  });
  const [tambahKategoriModalStatus, setTambahKategoriModalStatus] = useState({
    status: false,
    newKategori: "",
  });
  const [alert, setAlert] = useState({
    isActive: false,
    message: "",
    positiveCallBack: () => {},
    negativeCallBack: () => {},
  });
  const addJenisBarang = StateContainer((state) => state.addJenisBarang);
  const addKategoriBarang = StateContainer((state) => state.addKategoriBarang);
  let jenis = StateContainer((state) => state.jenisBarang[0]);
  let kategori = StateContainer((state) => state.kategoriBarang[0]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/jenis-barang")
      .then((response) => {
        addJenisBarang(response.data);
      })
      .then(() => {
        axios.get("http://localhost:4000/kategori-barang").then((response) => {
          addKategoriBarang(response.data);
        });
      });
  }, []);

  if (jenis == undefined || kategori == undefined) return;
  let editJenisModal = "";
  let editKategoriModal = "";
  let tambahJenisModal = "";
  let tambahKategoriModal = "";
  if (editJenisModalStatus.status && !alert.isActive) {
    editJenisModal = (
      <div
        tabIndex="-1"
        className="fixed bg-black bg-opacity-80 mx-auto top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="absolute right-0 left-0 mx-auto top-[10%] max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              onClick={() =>
                setEditJenisModalStatus({
                  status: false,
                  name: "",
                  category: "",
                })
              }
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
                Edit Jenis
              </h3>
              <form
                onSubmit={() => {
                  console.log("submitting");
                  axios.get(
                    `http://localhost:4000/edit-jenis/${editJenisModalStatus.jenis.jenis}/${editJenisModalStatus.jenis.kategori_id}/${editJenisModalStatus.jenis.id}`
                  );
                }}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="nama"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama Jenis
                  </label>
                  <input
                    onChange={(event) => {
                      let val = event.target.value;
                      setEditJenisModalStatus({
                        status: editJenisModalStatus.status,
                        jenis: new JenisBarang(
                          editJenisModalStatus.jenis.id,
                          val,
                          editJenisModalStatus.jenis.kategori_id
                        ),
                      });
                    }}
                    type="text"
                    name="nama"
                    id="nama"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder={editJenisModalStatus.jenis.jenis}
                    required
                  />
                </div>
                <div className="mr-3">
                  <label
                    htmlFor="jenis-produk"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Kategori
                  </label>
                  <select
                    onChange={(event) => {
                      let val = event.target.value;

                      setEditJenisModalStatus({
                        status: editJenisModalStatus.status,
                        jenis: new JenisBarang(
                          editJenisModalStatus.jenis.id,
                          editJenisModalStatus.jenis.jenis,
                          val
                        ),
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
                    {kategori.map((kat, index) => {
                      return <option value={kat.id}>{kat.kategori}</option>;
                    })}
                  </select>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      setAlert({
                        isActive: true,
                        message: "yakin ingin hapus? ",
                        positiveCallBack: () => {
                          axios
                            .get(
                              `http://localhost:4000/delete-jenis/${editJenisModalStatus.jenis.id}`
                            )
                            .then(() => {
                              window.location.reload();
                            });
                        },
                        negativeCallBack: () => {
                          setAlert({
                            isActive: false,
                            message: "",
                            positiveCallBack: () => {},
                            negativeCallBack: () => {},
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
  if (editKategoriModalStatus.status && !alert.isActive) {
    editKategoriModal = (
      <div
        tabIndex="-1"
        className="fixed bg-black bg-opacity-80 mx-auto top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="absolute right-0 left-0 mx-auto top-[10%] max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              onClick={() =>
                setEditKategoriModalStatus({
                  status: false,
                  kategori: new KategoriBarang(null, ""),
                })
              }
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
                Edit Kategori
              </h3>
              <form
                className="space-y-6"
                onSubmit={() => {
                  console.log("submitting");
                  axios.get(
                    `http://localhost:4000/edit-kategori/${editKategoriModalStatus.kategori.nama}/${editKategoriModalStatus.kategori.id}`
                  );
                }}
              >
                <div>
                  <label
                    htmlFor="nama-kategori"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama Kategori
                  </label>
                  <input
                    onChange={(event) => {
                      let val = event.target.value;

                      setEditKategoriModalStatus({
                        status: editKategoriModalStatus.status,
                        kategori: new KategoriBarang(
                          editKategoriModalStatus.kategori.id,
                          val
                        ),
                      });
                    }}
                    type="text"
                    name="nama-kategori"
                    id="nama-kategori"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder={
                      editKategoriModalStatus.kategori.id +
                      "/ " +
                      editKategoriModalStatus.kategori.nama
                    }
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <a
                    onClick={() => {
                      setAlert({
                        isActive: true,
                        message: "yakin ingin hapus? ",
                        positiveCallBack: () => {
                          axios
                            .get(
                              `http://localhost:4000/delete-kategori/${editKategoriModalStatus.kategori.id}`
                            )
                            .then(() => {
                              window.location.reload();
                            });
                        },
                        negativeCallBack: () => {
                          setAlert({
                            isActive: false,
                            message: "",
                            positiveCallBack: () => {},
                            negativeCallBack: () => {},
                          });
                        },
                      });
                    }}
                    className="w-[48%] text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    Hapus
                  </a>
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
  if (tambahJenisModalStatus.status && !alert.isActive) {
    tambahJenisModal = (
      <div
        tabIndex="-1"
        className="fixed bg-black bg-opacity-80 mx-auto top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="absolute right-0 left-0 mx-auto top-[10%] max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              onClick={() =>
                setTambahJenisModalStatus({
                  status: false,
                  newJenis: "",
                  kategoriId: null,
                })
              }
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
                Tambah Jenis
              </h3>
              <form
                className="space-y-6"
                onSubmit={() => {
                  axios.get(
                    `http://localhost:4000/tambah-jenis/${tambahJenisModalStatus.newJenis}/${tambahJenisModalStatus.kategoriId}`
                  );
                }}
              >
                <div>
                  <label
                    htmlFor="nama-tambah-jenis"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama Jenis
                  </label>
                  <input
                    onChange={(event) => {
                      let val = event.target.value;
                      setTambahJenisModalStatus({
                        status: tambahJenisModalStatus.status,
                        newJenis: val,
                        kategoriId: tambahJenisModalStatus.kategoriId,
                      });
                    }}
                    type="text"
                    name="nama-tambah-jenis"
                    id="nama-tambah-jenis"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="apa kek terserah"
                    required
                  />
                </div>
                <div className="mr-3">
                  <label
                    htmlFor="jenis-produk"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Kategori
                  </label>
                  <select
                    onChange={(event) => {
                      let val = event.target.value;
                      setTambahJenisModalStatus({
                        status: tambahJenisModalStatus.status,
                        newJenis: tambahJenisModalStatus.newJenis,
                        kategoriId: val,
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
                    {kategori.map((kat, index) => {
                      return <option value={kat.id}>{kat.kategori}</option>;
                    })}
                  </select>
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
  if (tambahKategoriModalStatus.status && !alert.isActive) {
    tambahKategoriModal = (
      <div
        tabIndex="-1"
        className="fixed bg-black bg-opacity-80 mx-auto top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="absolute right-0 left-0 mx-auto top-[10%] max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              onClick={() =>
                setTambahKategoriModalStatus({
                  status: false,
                  newKategori: "",
                })
              }
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
                Tambah Kategori
              </h3>
              <form
                className="space-y-6"
                onSubmit={() => {
                  axios.get(
                    `http://localhost:4000/tambah-kategori/${tambahKategoriModalStatus.newKategori}`
                  );
                }}
              >
                <div>
                  <label
                    htmlFor="nama-tambah-kategori"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama Kategori
                  </label>
                  <input
                    onChange={(event) => {
                      let val = event.target.value;

                      setTambahKategoriModalStatus({
                        status: tambahKategoriModalStatus.status,
                        newKategori: val,
                      });
                    }}
                    type="text"
                    name="nama-tambah-kategori"
                    id="nama-tambah-kategori"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="apakek yang keren"
                    required
                  />
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
    <div className="flex flex-row">
      <AdminSidebar key={1} />
      <div className="w-full ml-64 ">
        {editJenisModal}
        {editKategoriModal}
        {tambahJenisModal}
        {tambahKategoriModal}
        {alert.isActive ? (
          <Alert
            alertMessage={alert.message}
            positiveCallBack={alert.positiveCallBack}
            negativeCallBack={alert.negativeCallBack}
          />
        ) : (
          ""
        )}
        <div className="m-3 flex">
          <a
            href="/administration-product"
            className="text-black hover:text-white border border-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-1 text-center mr-2 my-auto "
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="m43.932 74.467c-.295 0-.59-.087-.844-.26l-33.755-22.967c-.41-.279-.656-.743-.656-1.24s.246-.961.656-1.24l33.755-22.967c.459-.313 1.054-.346 1.545-.085.491.26.798.77.798 1.326v16.232h44.391c.829 0 1.5.671 1.5 1.5v10.469c0 .829-.671 1.5-1.5 1.5h-44.39v16.232c0 .556-.307 1.066-.798 1.326-.22.116-.462.174-.702.174zm-31.088-24.467 29.588 20.132v-14.898c0-.829.671-1.5 1.5-1.5h44.391v-7.469h-44.391c-.829 0-1.5-.671-1.5-1.5v-14.897z" />
              </g>
            </svg>
          </a>

          <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-black">
            Category Manager
          </h5>
        </div>
        <div className="xl:flex flex-row m-3">
          <div className="mx-auto">
            <div className="flex mb-1">
              <h5 className="flex-auto text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                Jenis
              </h5>
              <div className="inline-flex rounded-md shadow-sm">
                <a
                  onClick={() =>
                    setTambahJenisModalStatus({
                      status: true,
                      newJenis: "",
                      kategoriId: null,
                    })
                  }
                  className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  Tambah Jenis
                </a>
              </div>
            </div>
            <div className=" h-fit mb-3 relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="xl:w-[38vw] w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      No.
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Nama
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Category
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Jumlah Barang
                    </th>
                    <th scope="col" className="py-3 px-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jenis.map((jen, i) => {
                    return (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {i + 1}
                        </th>
                        <td className="py-4 px-6">{jen.jenis}</td>
                        <td className="py-4 px-6">{jen.kategori}</td>
                        <td className="py-4 px-6">{jen.jumlah}</td>
                        <td className="py-4 px-6 text-right">
                          <a
                            href="#"
                            onClick={() =>
                              setEditJenisModalStatus({
                                status: true,
                                jenis: new JenisBarang(
                                  jen.id,
                                  jen.jenis,
                                  jen.kategori
                                ),
                              })
                            }
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className=" mx-auto">
            <div className="flex mb-1">
              <h5 className="flex-auto text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                Kategori
              </h5>
              <div className="inline-flex rounded-md shadow-sm">
                <a
                  onClick={() =>
                    setTambahKategoriModalStatus({
                      status: true,
                      newKategori: "",
                    })
                  }
                  className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  Tambah Kategori
                </a>
              </div>
            </div>
            <div className=" h-fit relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="xl:w-[38vw] w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      No.
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Nama
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Jumlah Jenis
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Jumlah Barang
                    </th>
                    <th scope="col" className="py-3 px-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {kategori.map((kat, i) => {
                    return (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {i + 1}
                        </th>
                        <td className="py-4 px-6">{kat.kategori}</td>
                        <td className="py-4 px-6">{kat.jumlah_jenis}</td>
                        <td className="py-4 px-6">{kat.jumlah_produk}</td>
                        <td className="py-4 px-6 text-right">
                          <a
                            href="#"
                            onClick={() =>
                              setEditKategoriModalStatus({
                                status: true,
                                kategori: new KategoriBarang(
                                  kat.id,
                                  kat.kategori
                                ),
                              })
                            }
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageCategory;
