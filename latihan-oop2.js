/**
 * Nama : M. Husni Ramadhan
 * NIM  : 217200034
 **/

//membuat class
class Handphone_Samsung_A51 {
    
    //mendeklarasikan variabel dengan membuat constructor function
    constructor(memory, storage, proci) {
        this.memory = memory;
        this.storage = storage;
        this.proci = proci;
        this.isActive = false;
    }
    
    //membuat method
    getInfoHandphone_Samsung_A51() {
        console.log(`Spesifikasi Handphone_Samsung_A51
    memory    : ${this.memory}
    storage   : ${this.storage}
    processor : ${this.proci}`);
    }

    turnOnHandphone_Samsung_A51() {
        this.isActive = true;
        console.log(`this Handphone_Samsung_A51 is on`);
    }

}

//instansiasi objek
let comp1 = new Handphone_Samsung_A51 (6, 128, "Exynos 9611");
//memanggil method
comp1.turnOnHandphone_Samsung_A51();
comp1.getInfoHandphone_Samsung_A51();