const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// a.then catch
// melakukan pemanggilan function cekHariKerja dan memberikan parameter
cekHariKerja("senin")
  // jika return promise yang dikirimkan tidak error maka akan menjalankan perintah then
  .then((hari) => {
    console.log(hari);
  })
  // jika return promise yang dikirimkan error maka akan manjalankan perintah catch dan menampilkan error yang sudah ditentukan (jika terjadi error)
  .catch((err) => {
    console.log(err);
  });

// b. try catch
// membuat function yang di depannya di beri tanda async untuk menandakan bahwa function digunakan untuk asynchronous,
// dengan nama function main
async function main() {
  // jika return promise yang dikirimkan tidak error maka akan menjalankan perintah try
  try {
    // membuat variabel penampung yang value nya di ambil dari  function cekHariKerja yang berisikan parameter,dan di dahului dengan kata await
    // pengunaan await untuk menunggu proses asynchronous yang ada dalam function cekHariKerja
    const result = await cekHariKerja("selasa");
    console.log(result);
  } catch (err) {
    // jika return promise yang dikirimkan error maka akan manjalankan perintah catch dan menampilkan error yang sudah ditentukan (jika terjadi error)
    console.log(err);
  }
}

main();
