import React from "react";
import AdminSidebar from "../../component/AdminSidebar";

function ManageCategory() {
  let kategori = [
    { nama: "Konsumsi", jumlah_jenis: "3", jumlah_barang: "14" },
    { nama: "Koleksi", jumlah_jenis: "5", jumlah_barang: "12" },
    { nama: "Koleksi", jumlah_jenis: "5", jumlah_barang: "12" },
    { nama: "Koleksi", jumlah_jenis: "5", jumlah_barang: "12" },
  ];
  let jenis = [
    { nama: "Makanan", kategori: "Konsumsi", jumlah_barang: "5" },
    { nama: "Minuman", kategori: "Konsumsi", jumlah_barang: "7" },
  ];
  return (
    <div className="flex flex-row">
      <AdminSidebar />
      <div className="w-full ml-64 ">
        <div className="m-3 flex">
          <a
            href="/administration-product"
            class="text-black hover:text-white border border-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-1 text-center mr-2 my-auto "
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
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
        <div className="flex flex-row m-3">
          <div className="mx-auto">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
              Jenis
            </h5>
            <div class=" h-fit relative overflow-x-auto shadow-md sm:rounded-lg">
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
          </div>
          <div className=" mx-auto">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
              Kategori
            </h5>
            <div class=" h-fit relative overflow-x-auto shadow-md sm:rounded-lg">
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
    </div>
  );
}

export default ManageCategory;
