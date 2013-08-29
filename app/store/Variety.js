Ext.define('cwlover.store.Variety', {
    extend: 'Ext.data.Store',

    config: {
        model: 'cwlover.model.Variety',
        autoLoad: true,
        sorters: 'category',
        grouper: {
            groupFn: function(record) {
                return record.get('category');
            }
        },
        proxy: {
            type: 'jsonp',
            url: 'http://app.hgm8.com:8080/public/variety'
        }
    }
});
