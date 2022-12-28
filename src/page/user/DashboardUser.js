import React, { useState } from "react";
import "../../style/Dashboard.css";
import axios from "axios";
import UserTopbar from "../../component/UserTopbar";
function DashboardUser() {
  const [listProduk, setlistProduk] = useState({ first: true, data: [] });

  if (listProduk.first) {
    axios.get("http://localhost:4000/barang").then((response) => {
      setlistProduk({ first: false, data: response.data });
    });
  }

  return (
    <main>
      <UserTopbar />
      <div className="w-[60vw] p-1 my-3 mx-auto border-2 border-dark rounded-lg">
        <input
          type="text"
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
              axios.get(`http://localhost:4000/barang/`).then((response) => {
                setlistProduk({
                  first: listProduk.first,
                  data: response.data,
                });
              });
            }
          }}
          placeholder="Tulis nama produk ....."
          className=""
        />
      </div>
      <main className="content">
        <section className="container-content">
          {listProduk.data &&
            listProduk.data.map((produk, index) => {
              console.log(produk);
              return (
                <div className="card rounded-lg">
                  <img
                    alt="foto produk"
                    className="rounded-t-lg "
                    src={`http://localhost:4000/images/${produk.foto}`}
                  />
                  <div className="card-konten">
                    <div className="text-konten mx-4">
                      <h4 className="text-lg font-semibold">{produk.nama}</h4>
                      <p>{produk.detail}</p>
                      <span className="font-bold text-lg">
                        Rp{produk.harga}, Sisa {produk.kuantitas}
                      </span>
                      <div className="tambah">
                        <button
                          onClick={() => {
                            axios.post(
                              "http://localhost:4000/tambah-keranjang",
                              {
                                akun_id: 1,
                                barang_id: produk.Barang_id,
                              }
                            );
                          }}
                          className="btn-tambah  my-2"
                        >
                          Tambah
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </section>
      </main>
    </main>
  );
}
export default DashboardUser;
