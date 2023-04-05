function biodata(nama, umur, pekerjaan) {
    if (typeof pekerjaan === "undefined") {
        console.log(`halo, nama saya ${nama}, saya berumur ${umur} tahun,`); // fungsi 2 argumen
    } else {
        console.log(`halo, nama saya ${nama}, saya berumur ${umur} tahun dan bekerja sebagai ${pekerjaan},`)
    }
}
biodata ("Husni", 21, "Android Developer");
biodata ("Muslim", 23, "WEB Developer");