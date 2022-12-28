import React, { useState, useEffect } from "react";
import AdminSidebar from "../../component/AdminSidebar";
import axios from "axios";
import Alert from "../../component/Alert";
class ObjectData {
  constructor(id, nama, kontak, waktu, resi, item, total, action, bukti) {
    return {
      id: id,
      kustomer: {
        nama: nama,
        kontak: kontak,
      },
      waktu: waktu,
      resi: resi,
      item: item,
      total: total,
      action: action,
      bukti: bukti,
    };
  }
}
class Item {
  constructor(nama, detail, kuantitas) {
    return { nama: nama, detail: detail, kuantitas: kuantitas };
  }
}
function Transaction() {
  const [resi, setResi] = useState("");
  const [tab, setTab] = useState("konfirmasi");
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState({
    isActive: false,
    message: "default",
    positiveCallBack: () => {},
    negativeCallBack: () => {},
  });
  useEffect(() => {
    setData([]);
    switch (tab) {
      case "konfirmasi":
        axios
          .get("http://localhost:4000/data-konfirmasi-pembayaran")
          .then((response) => {
            console.log("res");
            console.log(response);
            let newData = [];
            response.data.map((dat) => {
              let arrItem = [];
              dat.item.map((ite) => {
                arrItem.push(new Item(ite.nama, ite.detail, ite.kuantitas));
              });
              newData.push(
                new ObjectData(
                  dat.id,
                  dat.kustomer.nama,
                  dat.kustomer.kontak,
                  dat.waktu,
                  dat.resi,
                  arrItem,
                  dat.total,
                  "Konfirmasi",
                  dat.bukti
                )
              );
            });
            setData(newData);
            console.log(newData);
          });
        break;

      case "disiapkan":
        axios.get("http://localhost:4000/data-disiapkan").then((response) => {
          let newData = [];
          response.data.map((dat) => {
            let arrItem = [];
            dat.item.map((ite) => {
              arrItem.push(new Item(ite.nama, ite.detail, ite.kuantitas));
            });
            newData.push(
              new ObjectData(
                dat.id,
                dat.kustomer.nama,
                dat.kustomer.kontak,
                dat.waktu,
                dat.resi,
                arrItem,
                dat.total,
                "Lanjutkan",
                ""
              )
            );
          });
          setData(newData);
          console.log(newData);
        });
        break;

      case "pengambilan":
        axios.get("http://localhost:4000/data-pengambilan").then((response) => {
          let newData = [];
          response.data.map((dat) => {
            let arrItem = [];
            dat.item.map((ite) => {
              arrItem.push(new Item(ite.nama, ite.detail, ite.kuantitas));
            });
            newData.push(
              new ObjectData(
                dat.id,
                dat.kustomer.nama,
                dat.kustomer.kontak,
                dat.waktu,
                dat.resi,
                arrItem,
                dat.total,
                "",
                ""
              )
            );
          });
          setData(newData);
          console.log(newData);
        });
        break;

      case "selesai":
        axios.get("http://localhost:4000/data-selesai").then((response) => {
          let newData = [];
          response.data.map((dat) => {
            let arrItem = [];
            dat.item.map((ite) => {
              arrItem.push(new Item(ite.nama, ite.detail, ite.kuantitas));
            });
            newData.push(
              new ObjectData(
                dat.id,
                dat.kustomer.nama,
                dat.kustomer.kontak,
                dat.waktu,
                dat.resi,
                arrItem,
                dat.total,
                "",
                ""
              )
            );
          });
          setData(newData);
          console.log(newData);
        });
        break;

      default:
        break;
    }
  }, [tab]);

  console.log("Data");
  console.log(data);

  function setMessage(action, resi, foto) {
    console.log(action);
    if (action == "Konfirmasi") {
      return (
        <div>
          Konfirmasi pesanan {resi}?
          <img src={`http://localhost:4000/images/${foto}`} />
        </div>
      );
    } else if (action == "Lanjutkan") {
      return `Pesanan ${resi} siap diambil?`;
    }
    return "default";
  }

  return (
    <div className="flex flex-row">
      <AdminSidebar key={1} />
      <div className="w-full ml-64 ">
        {alert.isActive ? (
          <Alert
            alertMessage={alert.message}
            positiveCallBack={alert.positiveCallBack}
            negativeCallBack={alert.negativeCallBack}
          />
        ) : (
          ""
        )}
        <div className="m-3 flex justify-between">
          <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-black">
            Transaksi
          </h5>
          <form
            className="flex"
            onSubmit={() => {
              axios
                .post(`http://localhost:4000/konfirmasi-pengambilan`, {
                  resi: resi,
                  action: "cari",
                })
                .then((response) => {
                  if (response.data) {
                    console.log(response.data);
                    setAlert({
                      isActive: true,
                      message: `Konfirmasi pengambilan ${response.data[0].kode_resi} atas nama ${response.data[0].nama}`,
                      positiveCallBack: () => {
                        axios
                          .post(
                            `http://localhost:4000/konfirmasi-pengambilan`,
                            { resi: resi, action: "konfirmasi" }
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
                  }
                });
            }}
          >
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
                  setResi(val);
                }}
                type="search"
                id="resi-search"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-l-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukan nomor resi"
                required
              />
            </div>
            <button
              type="submit"
              onClick={() => {}}
              className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Konfirmasi Pengambilan
            </button>
          </form>
        </div>
        <div className="flex-row m-3">
          <div className="mx-auto">
            <div className="text-sm font-medium text-center text-gray-500 mb-1 dark:text-gray-400 dark:border-gray-700">
              <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                <li className="w-full">
                  <a
                    onClick={() => {
                      setTab("konfirmasi");
                    }}
                    className={`inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 focus:outline-none ${
                      tab == "konfirmasi"
                        ? "dark:bg-gray-700"
                        : "dark:bg-gray-800"
                    } dark:text-white`}
                  >
                    Konfirmasi Pembayaran
                  </a>
                </li>
                <li className="w-full">
                  <a
                    onClick={() => {
                      setTab("disiapkan");
                    }}
                    className={`inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white ${
                      tab == "disiapkan"
                        ? "dark:bg-gray-700"
                        : "dark:bg-gray-800"
                    } dark:hover:bg-gray-700`}
                  >
                    Disiapkan
                  </a>
                </li>
                <li className="w-full">
                  <a
                    onClick={() => {
                      setTab("pengambilan");
                    }}
                    className={`inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white ${
                      tab == "pengambilan"
                        ? "dark:bg-gray-700"
                        : "dark:bg-gray-800"
                    } dark:hover:bg-gray-700`}
                  >
                    Menunggu Pengambilan
                  </a>
                </li>
                <li className="w-full">
                  <a
                    onClick={() => {
                      setTab("selesai");
                    }}
                    className={`inline-block p-4 w-full bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white ${
                      tab == "selesai" ? "dark:bg-gray-700" : "dark:bg-gray-800"
                    } dark:hover:bg-gray-700`}
                  >
                    Selesai
                  </a>
                </li>
              </ul>
            </div>

            <div className=" h-fit mb-3 relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      No.
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Kustomer
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Waktu
                    </th>
                    <th scope="col" className="py-3 px-6">
                      No Resi
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Item
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Total Harga
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Bukti Pembayaran
                    </th>
                    <th scope="col" className="py-3 px-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((dat, i) => {
                    console.log("dat");
                    console.log(dat);
                    return (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {i + 1}
                        </th>
                        <td className="py-4 px-6">
                          <h1>{dat.kustomer.nama}</h1>
                          {dat.kustomer.kontak}
                        </td>
                        <td className="py-4 px-6">{dat.waktu}</td>
                        <td className="py-4 px-6">{dat.resi}</td>
                        <td className="py-4 px-6">
                          <ul className="space-y-1 max-w-md list-none list-inside text-gray-500 dark:text-gray-400">
                            {dat.item.map((itm) => {
                              return (
                                <li className="flex">
                                  <h4 className="font-bold uppercase">
                                    {itm.nama}
                                  </h4>
                                  , {itm.detail}, ({itm.kuantitas} item)
                                </li>
                              );
                            })}
                          </ul>
                        </td>
                        <td className="py-4 px-6">Rp.{dat.total}</td>
                        <td className="p-2 ">
                          <img
                            className="object-cover p-4 rounded-t-lg w-[120px] h-[120px]"
                            src={`http://localhost:4000/images/${dat.bukti}`}
                            alt="product image"
                          />
                        </td>
                        <td className="py-4 px-6 text-right">
                          <a
                            href="#"
                            onClick={() => {
                              setAlert({
                                isActive: true,
                                message: setMessage(
                                  dat.action,
                                  dat.resi,
                                  dat.bukti
                                ),
                                positiveCallBack: () => {
                                  if (dat.action == "Konfirmasi") {
                                    axios
                                      .post(
                                        `http://localhost:4000/update-pembayaran/`,
                                        { id: dat.id, status: "y" }
                                      )
                                      .then(() => {
                                        window.location.reload();
                                      });
                                  }
                                  if (dat.action == "Lanjutkan") {
                                    axios
                                      .post(
                                        `http://localhost:4000/update-pengambilan/`,
                                        { id: dat.id, status: "r" }
                                      )
                                      .then(() => {
                                        window.location.reload();
                                      });
                                  }
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
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            {dat.action}
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

export default Transaction;
