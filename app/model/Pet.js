Ext.define('AddressBook.model.Pet', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'nickName',
            'parentName',
            'petshot',
            'description',
            'variety',
            'age',
            'sex',
            'weight',
            'city',
            'state',
            'country'
        ]
    }
});
