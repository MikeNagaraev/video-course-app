export abstract class Initializable<T> {
    constructor(init?: T) {
        this.initialize(init);
    }

    protected initialize?(init?: T) {
        if (init) {
            Object.assign(this, init);
        }
    }
}
