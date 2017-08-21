import VuexModelObject, { TYPE } from 'vuex-model-template';
import ArticleService from 'services/article';

let persistedField = (type, defaultValue) => {
    return {
        type: type,
        defaultValue: defaultValue
    };
};

let transientField = (type, defaultValue) => {
    return {
        type: type,
        defaultValue: defaultValue,
        transient: true
    };
};

let dirtyCorollary = {
    corollary() {
        this.actions.dirty.set(true);
    }
};

const ARTICLE_MODEL = {
    template: {
        id: {
            ...persistedField(TYPE.String),
            ...dirtyCorollary
        },
        content: {
            ...persistedField(TYPE.Complex),
            ...dirtyCorollary,

            properties: {
                title: {
                    ...persistedField(TYPE.String),
                    ...dirtyCorollary
                },
                subTitle: {
                    ...persistedField(TYPE.String),
                    ...dirtyCorollary
                },
                text: {
                    ...persistedField(TYPE.String),
                    ...dirtyCorollary
                },
                references: {
                    ...persistedField(TYPE.Array, []),
                    ...dirtyCorollary,
                    items: {
                        ...persistedField(TYPE.Object),
                        ...dirtyCorollary,
                        serialize(item) {
                            return item.id;
                        },
                        deserialize(id) {
                            if (this.resolveReferences) {
                                return ArticleService.get(id).then(rawData => {
                                    return new Article(rawData).$waitReady;
                                });
                            } else {
                                return { id: id };
                            }
                        }
                    }
                },
                year: {
                    ...persistedField(TYPE.Number),
                    ...dirtyCorollary
                }
            }
        },
        dirty: {
            ...transientField(TYPE.Boolean, false)
        },
        resolveReferences: {
            ...transientField(TYPE.Boolean, false)
        }
    },
    actions: {
        // save() {
        //     return ArticleService.save(this).then(result => {
        //         return this.actions.dirty.set(false).then(() => result);
        //     });
        // }
    },
    properties: {

    }
};

export default class Article extends VuexModelObject {
    constructor(data) {
        super(data, ARTICLE_MODEL);
    }
}