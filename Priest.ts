import { Personagem } from "./Personagem";
import { Guerreiro } from "./Guerreiro";
import { Util } from "./Util";

export class Priest extends Personagem {
    private _vida: number = 0;
    private _alvo: Guerreiro;

    constructor(nome:string, forca:number, habMental:number, poderAtq:number, esquiva:number, resistencia:number, vida:number, alvo:Guerreiro) {
        super(nome, forca, habMental, poderAtq,esquiva, resistencia);
    }

    public get alvo():Guerreiro {
        return this._alvo
    }
    public set alvo(alvo:Guerreiro){
        this._alvo = alvo;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(nome:string){
        this._nome = nome + "Priest";
    }
    
    public get forca(): number {
        return this._forca;
    }
    public set forca(forca:number){
        forca = 0;
        this._forca = forca;
    }
    
    public get habMental(): number {
        return this._habMental;
    }
    public set habMental(habMental:number){
        habMental = 0;
        this._habMental = habMental;
    }
    
    public get poderAtq(): number {
        return this._poderAtq;
    }
    public set poderAtq(poderAtq:number){
        poderAtq = 0;
        this._poderAtq = poderAtq; 
    }
    
    public get esquiva(): number {
        return this._esquiva;
    }
    public set esquiva(esquiva:number){
        esquiva = 0;
        this._esquiva = esquiva; 
    }
    
    public get resistencia(): number {
        return this._resistencia;
    }
    public set resistencia(resistencia:number){
        resistencia = 0;
        this._resistencia = resistencia; 
    }
    
    public get vida(): number {
        return this._vida;
    }
    public set vida(vida:number){
        vida = Util.randomizar(1, 8000);
        this._vida = vida; 
    }

    public atacar(alvo: Personagem): void {
        if (Math.random() < 0.4) {
            console.log(`${this.nome} converteu ${alvo.nome} a seu favor`);
        } else {
            
        }
    }

    public aprimorarHabEspecial(): void {
        throw new Error(`Este personagem não pode executar esta ação.`)
    }
}