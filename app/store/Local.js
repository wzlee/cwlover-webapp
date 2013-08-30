Ext.define('cwlover.store.Local', {
    extend: 'Ext.data.Store',

    config: {
        model:'cwlover.model.Local',
        storeId:'localstorage',
        autoLoad:true,
        autoSync:true
    }
});
