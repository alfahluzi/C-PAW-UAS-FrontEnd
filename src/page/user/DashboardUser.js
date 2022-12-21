import { Button } from 'bootstrap'
import React, { useState }  from 'react'
import "../../style/Dashboard.css"
import Logo from "../../image/shopping.png";
import search from "../../image/search-zoom.png";
import axios from "axios";

function DashboardUser() {
  const [listProduk, setlistProduk] = useState({ first: true, data: [] });
  
  if (listProduk.first) {
    axios.get("http://localhost:4000/barang").then((response) => {
      setlistProduk({ first: false, data: response.data });
    });
  }

  return (
    <main>
     <div className="header-top">
       <div className="logo">
       <h1 className="logo-left">Dash<span>board</span></h1>
       </div>
       <div className="table-search">
       <input type="text" placeholder="Daftar dan Dapat Voucher Gratis" className="search" />
       <img src={search} alt="" className='search-icon' />
       </div>
       <div className="btn-shop">
        <a
          href="/cart"
        >
       <img src={Logo} alt="" className='shop' />
       </a>
       </div>
     </div>
     <main className="content">
       <section className="container-content">
           {listProduk.data &&
            listProduk.data.map((produk, index) => {
              return (
                <div className="card">
                  <img src="{produk.foto}" />
                  <div class="card-konten">
                              <div class="text-konten">
                                  <h5>{produk.nama}</h5>
                                  <div className="tambah">
                                    <button className="btn-tambah">Tambah</button>
                                  </div>
                              </div>
      
                          </div>
                </div>
              );
            })}
       </section>
     </main>
    </main>
   )
}
export default DashboardUser