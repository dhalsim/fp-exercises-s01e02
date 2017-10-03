export interface Option<A> {
    map<B>(fn: (a: A) => B): Option<B>;
}

export class Some<A> implements Option<A> {
    value: A

    constructor(value: A) {
        this.value = value;
    }

    map<B>(fn: (a: A) => B): Option<B> {
        return new Some(fn(this.value));
    }

    static of(value){
        return new Some(value);
    }
}

class NoneClass implements Option<any> {
    map<B>(fn: (a: any) => B): Option<B> {
        return None;
    }
}

export const None = new NoneClass();

export const Maybe = function OptionObject<T>(value: T): Option<T> {
  return (value !== null && value !== undefined) ? Some.of(value) : None
}
