import React, { useState } from "react";
import axios from "axios";
import UserTopbar from "../../component/UserTopbar";
function Pembayaran() {
  const [listProduk, setlistProduk] = useState({ first: true, data: [] });
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();

  if (listProduk.first) {
    axios
      .post("http://localhost:4000/keranjang", { akun_id: 1 })
      .then((response) => {
        setlistProduk({ first: false, data: response.data });
      });
  }
  let totalHarga = 0;
  listProduk.data.map((produk) => {
    totalHarga += produk.harga * produk.kuantitas;
  });
  return (
    <div>
      <UserTopbar />
      <center className="text-xl font-bold my-3">Pembayaran</center>
      <div className="flex p-5">
        <div className="w-[45vw] mx-auto">
          <div className="flex">
            <p className=" text-xl font-semibold">List barang</p>
            <div className="w-fit ml-auto mr-5 text-xl font-semibold">
              Total : Rp{totalHarga}
            </div>
          </div>
          {listProduk.data.map((produk, index) => {
            return (
              <div className="my-3 px-2 border-b-2 rounded-2">
                <div className="flex">
                  <img
                    alt=""
                    className="max-w-[150px] p-2"
                    src={`http://localhost:4000/images/${produk.foto}`}
                  />
                  <div className="">
                    <p>{produk.nama}</p>
                    <p>{produk.detail}</p>
                  </div>
                  <div className="ml-auto mr-2">{produk.kuantitas}</div>
                  <div className=" mr-2">x Rp{produk.harga}</div>
                  <div className=" mr-5">
                    = Rp{produk.harga * produk.kuantitas}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="p-5 w-[25vw] mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              var formdata = new FormData();
              let random =
                Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111;
              formdata.append("id", 1);
              formdata.append("resi", random);
              formdata.append("fileName", fileName);
              formdata.append("totalTransaksi", totalHarga);
              formdata.append("file", file);
              axios
                .post(`http://localhost:4000/bayar`, formdata)
                .then((response) => {
                  console.log(response);
                  window.location.reload();
                });
            }}
          >
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              for="file_input"
            >
              Upload bukti pembayaran
            </label>
            <input
              onChange={(event) => {
                setFile(event.target.files[0]);
                setFileName(event.target.files[0].name);
              }}
              className="block w-full text-sm text-red-900 border border-red-300 rounded-lg cursor-pointer bg-red-50 "
              id="file_input"
              type="file"
              required
            />
            <button
              type="submit"
              className="my-5 text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Pembayaran;
