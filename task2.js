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
