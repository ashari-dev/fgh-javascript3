// program 1
function namaMenuMakanan(menu) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataMenu = [
        "nasi goreng",
        "ayam bakar",
        "ikan bakar",
        "ikan goreng",
        "ayam goreng",
      ];
      let cek = dataMenu.find((item) => {
        return item === menu;
      });
      if (cek) {
        resolve(`menu : ${cek} tersedia`);
      } else {
        reject(new Error(`menu ${menu} tidak tersedia`));
      }
    }, 2000);
  });
}

namaMenuMakanan("ayam goreng")
  .then((menu) => {
    console.log(menu);
  })
  .catch((err) => {
    console.log(err);
  });

// program 2
function merkLaptop(merk) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataMerkLaptop = [
        "asus",
        "lenovo",
        "sony",
        "xiaomi",
        "acer",
        "appel",
      ];
      let cek = dataMerkLaptop.find((item) => {
        return item === merk;
      });
      if (cek) {
        resolve(`${cek} salah satu merk laptop`);
      } else {
        reject(new Error(`${cek} bukan merk laptop`));
      }
    }, 2500);
  });
}

async function main() {
  try {
    const result = await merkLaptop("asus");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
main();
