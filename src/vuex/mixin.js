import { mapActions, mapMutations } from 'vuex';

export function mutate(name, ...args) {
    return mapMutations([name])[name].call(this, args);
}

export function act(name, ...args) {
    if (args.length === 0) {
        return mapActions([name])[name].call(this);
    } else if(args.length) {
        return mapActions([name])[name].call(this, args);
    }
}