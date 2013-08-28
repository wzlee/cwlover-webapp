Ext.define('cwlover.view.VarietyList', {
    extend: 'Ext.List',
    xtype: 'varietylist',

    config: {
        title: '品种列表',
        cls: 'x-contacts',
        variableHeights: true,

        store: 'Variety',
        itemTpl: [
            '<div style="margin:10 20;">',
                '<img style="float:left;" src="{introduction}" width="50" height="40"/>',
                '<div>',
                    '<p><strong>{varietyName}</strong><br>',
                    '{tips}',
                    '</p>',
                '</div>',
            '</div>'
        ].join('')
    }
});
