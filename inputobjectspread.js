import { LightningElement } from 'lwc';

export default class Inputobjectspread extends LightningElement {

    inputs={
        PrimeiroNome: '',
        Sobrenome: '',
        Email: '',
        Website: '',
        Empresa: '',
        Receitaanual: '',

            };
        
            //objeto ele tem uma relação muito proxima arrays
            array = [1,2,3];
            new = [];
        
        handleInputChange(event){
            this.nome = event.detail.value;
            console.log("valor do campo: " + event.detail.value);
            console.log("valor do atributo name do campo: " + event.target.name);
            //acessar a variavel e mostrar o escopo da classe que
            //está sendo digitado no sistema
            
            let nameinput = event.target.name;
            let value = event.detail.value;
        
            //montando o objeto input com valores
            this.inputs ={
                ...this.inputs, [nameinput]:value
            };
        
            console.log(this.inputs);
        
        }
        
        
        onSpread(){
            this.new = [4,5,6, this.array];
            console.log(this.new)
        
            this.new = [...this.array];
            console.log(this.new)
        
        }
        
        //template string > é uma forma misturar string com variaveis
        
        
        //On Spread --- espalhamento de informações
        // expandir valores de um array para dentro de outro array
        //ou um objeto
        
        
        
}