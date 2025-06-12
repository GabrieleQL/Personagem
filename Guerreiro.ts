import { Personagem } from "./Personagem";
import { Util } from "./Util";
import { Priest } from "./Priest";

export class Guerreiro extends Personagem{
    private _vidaAtual: number = 0;
    private _vidaMax: number = 40000;
    private _alvo: Priest
    constructor(nome:string,forca:number,habMental:number,poderAtq:number,
        esquiva:number,resistencia:number,vidaAtual:number,vidaMax:number,alvo:Priest)
        {
            super(nome,forca,habMental,poderAtq,esquiva,resistencia,vidaAtual)
            this._vidaAtual = vidaAtual;
            this._vidaMax = vidaMax;
            this._alvo = alvo
        }
    public get alvo():Priest{
        return this._alvo
    }
    public set alvo(alvo:Priest){
        this._alvo = alvo
    }
    public get vidaAtuaDoAlvo():number{
        return this._alvo.vidaAtual
    }

    public get nome():string{
        return this._nome
    }
    public set nome(nome:string){
      
        this._nome = nome + "Warrior"

    }
    public get forca():number{
        return this._forca
    }
    public set forca(forca:number){
        forca = Util.randomizar(0, 1000)
        this._forca = forca
    }
    public get habMental():number{
        return this._habMental
    }
    public set habMental(habMental:number){
        habMental = 0
        this._habMental = habMental
    }
    public get poderAtq():number{
        return this._poderAtq
    }
    public set poderAtq(poderAtq:number){
        poderAtq = this._forca * 10
        this._poderAtq = poderAtq
    }
    public get esquiva():number{
        return this._esquiva
    }
    public set esquiva(esquiva:number){
        esquiva = Util.randomizar(0, 50)
        this._esquiva = esquiva
    }
    public get resistencia():number{
        return this._resistencia
    }
    public set resistencia(resistencia:number){
        resistencia = Util.randomizar(0, 90)
        this._resistencia = resistencia
    }
    public get vidaMax():number{
        return this._vidaMax
    }
    public set vidaMax(vidaMax:number){
        vidaMax = Util.randomizar(1, 40000)
        this._vidaMax = vidaMax
    }
    public get vidaAtual():number{
        return this._vidaAtual
    }
    public set vidaAtual(vidaAtual:number){
        this._vidaAtual = vidaAtual
    }
    public atacar(alvo: Personagem):void{
        const chance = Util.randomizar(0, 100)
        if(chance < alvo.esquiva){
            console.log(`${alvo.nome} desviou do ataque de ${this.nome}!`)
        }else{
            const dano = this.poderAtq * (1 - (alvo.resistencia/100))
            alvo.vidaAtual = Math.max(0, alvo.vidaAtual - dano)
            console.log(`${this.nome} atacou ${alvo.nome} causando ${dano.toFixed(2)} de dano!`)
        }
        if(typeof alvo.contraAtacar === "function"){
            alvo.contraAtacar(this.nome)
        }
    }
    public contraAtacar(alvo: Personagem):void{
        const chance = Util.randomizar(0, 100)
        if(chance < alvo.esquiva){
            console.log(`${alvo.nome} desviou do ataque de ${this.nome}`)
        }else{
            const dano = this._poderAtq * (1 - (alvo.resistencia/100))
            
        }

    }
    public aprimorarHabEspecial():void{
        console.log("Comportamento: Desconhecido")

    }
    public regenerarVida():void{
        console.log("Comportamento: Desconhecido")

    }
}