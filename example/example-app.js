import Vue from 'vue';

import Article from 'models/article';
import ArticleService from 'services/article';

export default Vue.component('v-example-app', {
    template: '<div><div>Vuex-Model-Template Example Application</div><div>Article No.{{article && article.id}}</div><div>{{article}}</div></div>',
    data() {
        let data = {
            article: undefined
        };

        ArticleService.get('255').then(rawData => {
            return Article.hydrate({
                ...rawData,
                resolveReferences: true
            });
        }).then(article => {
            data.article = article;
        }).catch(console.error);

        return data;
    }
});