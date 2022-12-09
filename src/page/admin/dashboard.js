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
    </div>
  );
}

export default Dashboard;
