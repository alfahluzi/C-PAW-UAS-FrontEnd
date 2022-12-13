class KategoriBarang {
  constructor(id, nama) {
    this.id = id;
    this.nama = nama;
  }
}

class JenisBarang {
  constructor(id, jenis, kategori_id) {
    this.id = id;
    this.jenis = jenis;
    this.kategori_id = kategori_id;
  }
}

export default { KategoriBarang, JenisBarang };
