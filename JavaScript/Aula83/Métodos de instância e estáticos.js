class ControleRemoto{
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2
    }
    diminuirVolume() {
        this.volume -= 2
    }

    static trocarPilha() {
        console.log('OK, vou trocar!');
    }

}
const c1 = new ControleRemoto('LG');
c1.aumentarVolume(); //Método de instância
c1.aumentarVolume();
c1.diminuirVolume();
console.log(c1);
ControleRemoto.trocarPilha();

