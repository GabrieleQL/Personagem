export abstract class Personagem{
    protected _nome:string
    protected _forca:number
    protected _habMental:number
    protected _poderAtq:number
    protected _esquiva:number
    protected _resistencia:number
    protected _vidaAtual: number
    
    
    constructor(nome:string,forca:number,habMental:number,poderAtq:number,
        esquiva:number,resistencia:number,vidaAtual:number
    )
    {
        this._nome = nome
        this._forca = forca
        this._habMental = habMental
        this._poderAtq = poderAtq
        this._esquiva = esquiva
        this._resistencia = resistencia
        this._vidaAtual = vidaAtual
    }
    public get nome():string{
        return this._nome
    }
    public set nome(nome:string){
        this._nome = nome
    }
    public get forca():number{
        return this._forca
    }
    public set forca(forca:number){
        this._forca = forca
    }
    public get habMental():number{
        return this._habMental
    }
    public set habMental(habMental:number){
        this._habMental = habMental
    }
    public get poderAtq():number{
        return this._poderAtq
    }
    public set poderAtq(poderAtq:number){
        this._poderAtq = poderAtq
    }
    public get esquiva():number{
        return this._esquiva
    }
    public set esquiva(esquiva:number){
        this._esquiva = esquiva
    }
    public get resistencia():number{
        return this._resistencia
    }
    public set resistencia(resistencia:number){
        this._resistencia = resistencia
    }
    public atacar(alvo: Personagem):void{
        console.log("Comportamento: Desconhecido")

    }
    public contraAtacar(alvo: Personagem):void{
        console.log("Comportamento: Desconhecido")

    }
    public aprimorarHabEspecial():void{
        console.log("Comportamento: Desconhecido")

    }
    public regenerarVida():void{
        console.log("Comportamento: Desconhecido")

    }
}