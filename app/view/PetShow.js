Ext.define('cwlover.view.PetShow', {
    extend: 'Ext.List',
    xtype: 'petshow',

    config: {
        title: 'Pet Show',
        cls: 'x-contacts',
        variableHeights: true,

        store: 'Pet',
        itemTpl: [
            '<div class="headshot" style="background-image:url(resources/images/petShots/{headshot});"></div>',
            '{nickName} {parentName}',
            '<span>{description}</span>'
        ].join('')
    }
});
