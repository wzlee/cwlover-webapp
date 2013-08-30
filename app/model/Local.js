Ext.define('cwlover.model.Local', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['key','value'],
        proxy: {
            type: 'localstorage',
            id  : 'localstorage'
        }
    }
});
