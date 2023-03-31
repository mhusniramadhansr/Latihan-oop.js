class Jaket {

    constructor(merek, jenis) {
        this.merek = merek;
        this.jenis = jenis;
    }

    showInfo() {
        console.log(`merek: ${this.merek}`);
        console.log(`jenis: ${this.jenis}`);
    }
}

class levis extends Jaket {
    constructor(merek) {
        super(merek, "levis");
    }

    tampilKeren() {
        console.log(`${this.jenis} tampil lebih keren`);
    
    }
}


class sweater extends Jaket {
    constructor(merek) {
        super(merek, "sweater");
    }

    menghangatkan() {
        console.log(`${this.jenis} menghangatkan tubuh`);
    
    }
}

class crewneck extends Jaket {
    constructor(merek) {
        super(merek, "crewneck");
    }

    cocokDiKombinasikan() {
        console.log(`${this.jenis} cocok di kombinasikan dengan kemeja atau seragam`);
    
    }
}

class bomber extends Jaket {
    constructor(merek) {
        super(merek, "bomber");
    }

    casualDanSerbaguna() {
        console.log(`${this.jenis} casual dan serbaguna`);
    
    }
}

class biker extends Jaket {
    constructor(merek) {
        super(merek, "biker");
    }

    gayaStylishYangMasklin() {
        console.log(`${this.jenis} untuk gaya stylish yang maskulin`);
    
    }
}

class parka extends Jaket {
    constructor(merek) {
        super(merek, "parka");
    }

    gayaStylishDiTengahHujan() {
        console.log(`${this.jenis} untuk gaya stylish di tengah hujan`);
    
    }
}

const Fallproject = new levis ("Fallproject");
    Fallproject.showInfo();
    Fallproject.tampilKeren();

const Screamous = new sweater ("Screamous");
    Screamous.showInfo();
    Screamous.menghangatkan();

const Reclays = new crewneck ("Reclays");
    Reclays.showInfo();
    Reclays.cocokDiKombinasikan();

const BGSR = new bomber ("BGSR");
    BGSR.showInfo();
    BGSR.casualDanSerbaguna();

const TheNorthFace = new biker ("TheNorthFace");
    TheNorthFace.showInfo();
    TheNorthFace.gayaStylishYangMasklin();

const BlackTag= new parka ("BlackTag");
    BlackTag.showInfo();
    BlackTag.gayaStylishDiTengahHujan();