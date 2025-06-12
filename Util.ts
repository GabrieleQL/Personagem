import { Personagem } from "./Personagem"

export class Util extends Personagem{
    static randomizar(base: number, limite: number) {
        return Math.floor(base + Math.random() * limite - base)
    }

    static sufixo(nome: string, sufixo: string) {
        return nome = nome + sufixo;
    }

}


