const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else callback(new Error("sorry Data Not Found"), []);
  }, 4000);
};

function showMonth(err, arr) {
  if (err) {
    console.log(err.message);
  } else {
    const bulan = arr.map((value) => value);
    console.log(bulan);
  }
}

getMonth(showMonth);
