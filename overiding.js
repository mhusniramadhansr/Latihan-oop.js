class Transportasi {
    bergerak() {
        console.log("Transfortasi bergerak");

    }
}

class SepedaMotor extends Transportasi {
    constructor(jenis, warna) {
        super();
        this.jenis = jenis;
        this.warna = warna;
    }

    bergerak() {
        console.log(`${this.jenis} ${this.warna} bergerak`);
    
    }
}

const sepedaMotor = new SepedaMotor("Kawasaki", "Hijau");
sepedaMotor.bergerak(); // Output: Kawasaki Hijau Bergerak