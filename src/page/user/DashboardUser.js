import { Button } from 'bootstrap'
import React from 'react'
import "../../style/Dashboard.css"
import Logo from "../../image/shopping.png";
import search from "../../image/search-zoom.png";


export default function DashboardUser() {
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
      <img src={Logo} alt="" className='shop' />
      </div>
    </div>
    <main className="content">
      <section className="container-content">
          <div className="card">
            <img src="https://media-asia-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F138427%2FID%2F138427.png%3Fversion%3D1611214200&w=389&bc=%23f5f5f5&ib=%23f5f5f5&h=389&q=90" />
            <div class="card-konten">
                        <div class="text-konten">
                            <h5>Thinkplus Lenovo TH10 Headphone Bluetooth</h5>
                            <div className="tambah">
                              <button className="btn-tambah">Tambah</button>
                            </div>
                        </div>

                    </div>
          </div>
          <div className="card">
          <img src="https://siplahtelkom.com/public/products/5464/3947384/5905.a4fbf25f-a378-4f49-95eb-c16954d5feb5.de.jpg" />
          <div class="card-konten">
                        <div class="text-konten">
                            <h5>Thinkplus Lenovo TH10 Headphone Bluetooth</h5>
                            <div className="tambah">
                              <button className="btn-tambah">Tambah</button>
                            </div>
                        </div>

                    </div>
          </div>
          <div className="card">
          <img src="https://www.bhinneka.com/_next/image?url=https%3A%2F%2Fstatic.bmdstatic.com%2Fpk%2Fproduct%2Fmedium%2F5af92f61946b3.jpg&w=640&q=75" />
          <div class="card-konten">
                        <div class="text-konten">
                            <h5>Thinkplus Lenovo TH10 Headphone Bluetooth</h5>
                            <div className="tambah">
                              <button className="btn-tambah">Tambah</button>
                            </div>
                        </div>

                    </div></div>
          <div className="card">
          <img src="https://www.asus.com/media/Odin/websites/global/ProductLine/20200805112054/P_setting_xxx_0_90_end_185.png?webp" />      
          <div class="card-konten">
                        <div class="text-konten">
                            <h5>Thinkplus Lenovo TH10 Headphone Bluetooth</h5>
                            <div className="tambah">
                              <button className="btn-tambah">Tambah</button>
                            </div>
                        </div>

                    </div>
                    </div>
      </section>
      <section className="container-content">
          <div className="card">
            <img src="https://media-asia-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F138427%2FID%2F138427.png%3Fversion%3D1611214200&w=389&bc=%23f5f5f5&ib=%23f5f5f5&h=389&q=90" />
            <div class="card-konten">
                        <div class="text-konten">
                            <h5>Thinkplus Lenovo TH10 Headphone Bluetooth</h5>
                            <div className="tambah">
                              <button className="btn-tambah">Tambah</button>
                            </div>
                        </div>

                    </div>
          </div>
          <div className="card">
          <img src="https://siplahtelkom.com/public/products/5464/3947384/5905.a4fbf25f-a378-4f49-95eb-c16954d5feb5.de.jpg" />
          <div class="card-konten">
                        <div class="text-konten">
                            <h5>Thinkplus Lenovo TH10 Headphone Bluetooth</h5>
                            <div className="tambah">
                              <button className="btn-tambah">Tambah</button>
                            </div>
                        </div>

                    </div>
          </div>
          <div className="card">
          <img src="https://www.bhinneka.com/_next/image?url=https%3A%2F%2Fstatic.bmdstatic.com%2Fpk%2Fproduct%2Fmedium%2F5af92f61946b3.jpg&w=640&q=75" />
          <div class="card-konten">
                        <div class="text-konten">
                            <h5>Thinkplus Lenovo TH10 Headphone Bluetooth</h5>
                            <div className="tambah">
                              <button className="btn-tambah">Tambah</button>
                            </div>
                        </div>

                    </div></div>
          <div className="card">
          <img src="https://www.asus.com/media/Odin/websites/global/ProductLine/20200805112054/P_setting_xxx_0_90_end_185.png?webp" />      
          <div class="card-konten">
                        <div class="text-konten">
                            <h5>Thinkplus Lenovo TH10 Headphone Bluetooth</h5>
                            <div className="tambah">
                              <button className="btn-tambah">Tambah</button>
                            </div>
                        </div>

                    </div>
                    </div>
      </section>
    </main>
   </main>
  )
}