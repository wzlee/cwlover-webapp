Ext.define('cwlover.store.Variety', {
    extend: 'Ext.data.Store',

    config: {
        model: 'cwlover.model.Variety',
        autoLoad: true,
        sorters: 'category',
        grouper: {
            groupFn: function(record) {
                return record.get('category')[0];
            }
        },
        proxy: {
            type: 'jsonp',
            url: 'http://113.105.131.230:8080/public/variety'
        }
    }
});
