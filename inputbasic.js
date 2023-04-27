import { LightningElement} from 'lwc';

export default class Inputbasic extends LightningElement {

    nome;
    peso;
    altura;
    imc;

    handleNomeChange(event) {
        this.nome = event.target.value;
    }

    handlePesoChange(event) {
        this.peso = event.target.value;
    }

    handleAlturaChange(event) {
        this.altura = event.target.value;
    }

    OnClick(){
        const imc = this.peso / (this.altura * this.altura);
            this.imc = imc.toFixed(2);


    }
}
