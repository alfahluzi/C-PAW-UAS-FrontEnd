import React from "react";
import AdminSidebar from "../../component/AdminSidebar";

function Dashboard() {
  let kategori = [
    { nama: "Konsumsi", jumlah_jenis: "3", jumlah_barang: "14" },
    { nama: "Koleksi", jumlah_jenis: "5", jumlah_barang: "12" },
    { nama: "Koleksi", jumlah_jenis: "5", jumlah_barang: "12" },
    { nama: "Koleksi", jumlah_jenis: "5", jumlah_barang: "12" },
    { nama: "Konsumsi", jumlah_jenis: "3", jumlah_barang: "14" },
    { nama: "Koleksi", jumlah_jenis: "5", jumlah_barang: "12" },
    { nama: "Koleksi", jumlah_jenis: "5", jumlah_barang: "12" },
    { nama: "Koleksi", jumlah_jenis: "5", jumlah_barang: "12" },
    { nama: "Konsumsi", jumlah_jenis: "3", jumlah_barang: "14" },
    { nama: "Koleksi", jumlah_jenis: "5", jumlah_barang: "12" },
    { nama: "Koleksi", jumlah_jenis: "5", jumlah_barang: "12" },
    { nama: "Koleksi", jumlah_jenis: "5", jumlah_barang: "12" },
    { nama: "Konsumsi", jumlah_jenis: "3", jumlah_barang: "14" },
    { nama: "Koleksi", jumlah_jenis: "5", jumlah_barang: "12" },
    { nama: "Koleksi", jumlah_jenis: "5", jumlah_barang: "12" },
    { nama: "Koleksi", jumlah_jenis: "5", jumlah_barang: "12" },
  ];
  let jenis = [
    { nama: "Makanan", kategori: "Konsumsi", jumlah_barang: "5" },
    { nama: "Minuman", kategori: "Konsumsi", jumlah_barang: "7" },
    { nama: "Minuman", kategori: "Konsumsi", jumlah_barang: "7" },
    { nama: "Makanan", kategori: "Konsumsi", jumlah_barang: "5" },
    { nama: "Minuman", kategori: "Konsumsi", jumlah_barang: "7" },
    { nama: "Minuman", kategori: "Konsumsi", jumlah_barang: "7" },
    { nama: "Makanan", kategori: "Konsumsi", jumlah_barang: "5" },
    { nama: "Minuman", kategori: "Konsumsi", jumlah_barang: "7" },
    { nama: "Minuman", kategori: "Konsumsi", jumlah_barang: "7" },
    { nama: "Makanan", kategori: "Konsumsi", jumlah_barang: "5" },
    { nama: "Minuman", kategori: "Konsumsi", jumlah_barang: "7" },
    { nama: "Minuman", kategori: "Konsumsi", jumlah_barang: "7" },
    { nama: "Makanan", kategori: "Konsumsi", jumlah_barang: "5" },
    { nama: "Minuman", kategori: "Konsumsi", jumlah_barang: "7" },
    { nama: "Minuman", kategori: "Konsumsi", jumlah_barang: "7" },
    { nama: "Makanan", kategori: "Konsumsi", jumlah_barang: "5" },
    { nama: "Minuman", kategori: "Konsumsi", jumlah_barang: "7" },
    { nama: "Minuman", kategori: "Konsumsi", jumlah_barang: "7" },
  ];
  return (
    <div className="flex flex-row">
      <AdminSidebar />
      <div className="w-full ml-64 ">
        <div className="m-3">
          <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-black">
            Dashboard
          </h5>
        </div>
        <div className="flex flex-row m-3">
          <div class="mx-auto h-fit relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    No.
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Nama
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Category
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Jumlah Barang
                  </th>
                  <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {jenis.map((jen, i) => {
                  return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {i + 1}
                      </th>
                      <td class="py-4 px-6">{jen.nama}</td>
                      <td class="py-4 px-6">{jen.kategori}</td>
                      <td class="py-4 px-6">{jen.jumlah_barang}</td>
                      <td class="py-4 px-6 text-right">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
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
          <div class=" mx-auto h-fit relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    No.
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Nama
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Jumlah Jenis
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Jumlah Barang
                  </th>
                  <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {kategori.map((kat, i) => {
                  return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {i + 1}
                      </th>
                      <td class="py-4 px-6">{kat.nama}</td>
                      <td class="py-4 px-6">{kat.jumlah_jenis}</td>
                      <td class="py-4 px-6">{kat.jumlah_barang}</td>
                      <td class="py-4 px-6 text-right">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
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
  );
}

export default Dashboard;
