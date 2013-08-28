Ext.define('cwlover.store.Pet', {
    extend: 'Ext.data.Store',

    config: {
        model: 'cwlover.model.Pet',
        autoLoad: true,
        sorters: 'nickName',
        grouper: {
            groupFn: function(record) {
                return record.get('variety')[0];
            }
        },
        proxy: {
            type: 'ajax',
            url: 'pet.json'
        }
    }
});
