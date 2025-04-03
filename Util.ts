export class Util{
    static randomizar(base: number, limite: number) {
        return Math.floor(base + Math.random() * limite - base);
    }
}