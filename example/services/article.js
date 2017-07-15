const rawArticles = {};

rawArticles['1'] = {
    id: '1',
    content: {
        title: 'Some book A',
        subTitle: 'Sub title A',
        text: 'Some book text A',
        references: [],
        year: 1882
    }
};

rawArticles['178'] = {
    id: '178',
    content: {
        title: 'Some book B',
        subTitle: 'Sub title B',
        text: 'Some book text B',
        references: ['1'],
        year: 1963
    }
};

rawArticles['255'] = {
    id: '255',
    content: {
        title: 'Some book C',
        subTitle: 'Sub title C',
        text: 'Some book text C',
        references: ['1', '178'],
        year: 1979
    }
};

export default class ArticleService {
    static get(id) {
        return Promise.resolve(rawArticles[id]);
    }
}