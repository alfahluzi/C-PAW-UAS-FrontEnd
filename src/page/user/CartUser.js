import { Button } from 'bootstrap'
import React, { useState }  from 'react'
import "../../style/Dashboard.css"
import "../../style/Cart.css"
import Logo from "../../image/shopping.png";
import search from "../../image/search-zoom.png";
import axios from "axios";

function CartUser() {
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
       <img src={Logo} alt="" className='shop' />
       </div>
     </div>
     <main className="content">
       <section className="container-content">
            <div class="shopping-cart">
                
                <div class="title">
                    Shopping Bag
                </div>
                
                <div class="item">
                    <div class="buttons">
                    <span class="delete-btn"></span>
                    <span class="like-btn"></span>
                    </div>
                
                    <div class="image">
                    <img src="item-1.png" alt="" />
                    </div>
                
                    <div class="description">
                    <span>Common Projects</span>
                    <span>Bball High</span>
                    <span>White</span>
                    </div>
                
                    <div class="quantity">
                    <button class="plus-btn" type="button" name="button">
                        <img src="https://w7.pngwing.com/pngs/202/389/png-transparent-computer-icons-icon-design-plus-photography-logo-plus.png" alt="" />
                    </button>
                    <input type="text" name="name" value="1"/>
                    <button class="minus-btn" type="button" name="button">
                        <img src="https://cdn-icons-png.flaticon.com/512/659/659892.png" alt="" />
                    </button>
                    </div>
                
                    <div class="total-price">$549</div>
                </div>
                
                <div class="item">
                    <div class="buttons">
                    <span class="delete-btn"></span>
                    <span class="like-btn"></span>
                    </div>
                
                    <div class="image">
                    <img src="item-2.png" alt=""/>
                    </div>
                
                    <div class="description">
                    <span>Maison Margiela</span>
                    <span>Future Sneakers</span>
                    <span>White</span>
                    </div>
                
                    <div class="quantity">
                    <button class="plus-btn" type="button" name="button">
                        <img src="https://w7.pngwing.com/pngs/202/389/png-transparent-computer-icons-icon-design-plus-photography-logo-plus.png" alt="" />
                    </button>
                    <input type="text" name="name" value="1"/>
                    <button class="minus-btn" type="button" name="button">
                        <img src="https://cdn-icons-png.flaticon.com/512/659/659892.png" alt="" />
                    </button>
                    </div>
                
                    <div class="total-price">$870</div>
                </div>
                
                <div class="item">
                    <div class="buttons">
                    <span class="delete-btn"></span>
                    <span class="like-btn"></span>
                    </div>
                
                    <div class="image">
                    <img src="item-3.png" alt="" />
                    </div>
                
                    <div class="description">
                    <span>Our Legacy</span>
                    <span>Brushed Scarf</span>
                    <span>Brown</span>
                    </div>
                
                    <div class="quantity">
                    <button class="plus-btn" type="button" name="button">
                        <img src="https://w7.pngwing.com/pngs/202/389/png-transparent-computer-icons-icon-design-plus-photography-logo-plus.png" alt="" />
                    </button>
                    <input type="text" name="name" value="1"/>
                    <button class="minus-btn" type="button" name="button">
                        <img src="https://cdn-icons-png.flaticon.com/512/659/659892.png" alt="" />
                    </button>
                    </div>
                
                    <div class="total-price">$349</div>
                </div>
                </div>
       </section>
       <center> <button class="btn-primary" type="button" onClick={()=>{ alert('Pembayaran Berhasil!'); }}>Bayar Sekarang</button></center>
     </main>
    </main>
   )
}
export default CartUser