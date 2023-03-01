//Membuat Class
class Mobil {
    //constructor class
    constructor(merek, tahun, warna) {
        //property
        this.merek = merek;
        this.tahun = tahun;
        this.warna = warna;
        this.kecepatan = 0;
        this.mesinHidup = false;
    }
    
    //method
    startMesin() {
        this.mesinHidup = true;
        console.log(`Mesin mobil merek ${this.merek} telah dinyalakan`);
    }

    stopMobil() {
        this.kecepatan = 0;
        console.log(`Mobil merek ${this.merek} telah dihentikan`)
    }

    getInfoMobil() {
        console.log(`Mobil merek ${this.merek} tahun ${this.tahun} dengan warna ${this.warna}, kecepatan saat ini ${this.kecepatan} km/jam. Mesin hidup: ${this.mesinHidup ? 'Ya' : 'Tidak'}`);
    }
}

//instance object
let mobil1 = new Mobil('Toyota Avanza', 2021, 'Putih');

//call method
mobil1.startMesin();

//change property
mobil1.kecepatan = 20;
mobil1.getInfoMobil();

mobil1.stopMobil();
mobil1.getInfoMobil();

/**
 * 1. Class
 *  Class adalah cetak biru atau blueprint dari object. 
 *  Class digunakan hanya untuk membuat kerangka dasar. Yang akan kita pakai nanti adalah hasil cetakan dari class, yakni object.
 * 
 * 2. Constructor Class
 *  Constructor adalah method khusus yang akan dieksekusi pada saat pembuatan objek (instance)
 * 
 * 3. Method
 *  Method pada dasarnya adalah function yang berada di dalam class
 * 
 * 4. Instance 
 *  Instance bisa diartikan sebagai wujud dari class. 
 *  Class berisi definisi variabel dan fungsi yang menggambarkan sebuah objek
 */