import React, { useState } from "react";
import "../../style/Dashboard.css";
import "../../style/Cart.css";
import axios from "axios";
import UserTopbar from "../../component/UserTopbar";
import { Navigate } from "react-router-dom";
function CartUser() {
  const [listProduk, setlistProduk] = useState({ first: true, data: [] });

  if (listProduk.first) {
    axios
      .post("http://localhost:4000/keranjang", { akun_id: 1 })
      .then((response) => {
        setlistProduk({ first: false, data: response.data });
      });
  }
  console.log(listProduk);
  let totalHarga = 0;
  listProduk.data.map((produk) => {
    totalHarga += produk.harga * produk.kuantitas;
  });
  console.log(alert);
  return (
    <main>
      <UserTopbar />
      <main className="content">
        <section className="container-content">
          <div className="w-[60vw] mx-auto">
            <div className="text-xl title ">Keranjang</div>
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
                    <button
                      onClick={() => {
                        axios
                          .post("http://localhost:4000/edit-keranjang", {
                            akun_id: 1,
                            barang_id: produk.Barang_id,
                            action: "tambah",
                          })
                          .then(() => {
                            window.location.reload();
                          });
                      }}
                      type="button"
                      className="text-white h-fit w-fit bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 text-lg rounded-md px-2  mx-1 mb-4 "
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        let act = "kurang";
                        if (produk.kuantitas <= 1) act = "hapus";
                        axios
                          .post("http://localhost:4000/edit-keranjang", {
                            akun_id: 1,
                            barang_id: produk.Barang_id,
                            action: act,
                          })
                          .then(() => {
                            window.location.reload();
                          });
                      }}
                      type="button"
                      className="text-white h-fit w-fit bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 text-lg rounded-md px-2  mx-1 mb-4 "
                    >
                      -
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="w-fit ml-auto mr-5 text-xl font-semibold">
              Total : Rp{totalHarga}
            </div>
          </div>
        </section>
        <center>
          <a
            className="py-2 px-[50px] text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 "
            type="button"
            href="/pembayaran"
          >
            Bayar
          </a>
        </center>
      </main>
    </main>
  );
}
export default CartUser;
