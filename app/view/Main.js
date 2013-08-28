Ext.define('cwlover.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'list',
                title: '宠物秀场',
                iconCls: 'favorites',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '宠物秀场'
                },

                itemTpl: '{title}',

                store: {

                    fields: ['title', 'url'],

                    data: [

                        {title: 'Ext Scheduler 2.0', url: 'ext-scheduler-2-0-upgrading-to-ext-js-4'},

                        {title: 'Previewing Sencha Touch 2', url: 'sencha-touch-2-what-to-expect'},

                        {title: 'Sencha Con 2011', url: 'senchacon-2011-now-packed-with-more-goodness'},

                        {title: 'Documentation in Ext JS 4', url: 'new-ext-js-4-documentation-center'}

                    ]

                }
            },
            {
                title: '宠物商城',
                iconCls: 'bookmarks',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '欢迎来到宠物商城'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: '附近宠物',
                iconCls: 'maps',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: '附近宠物'
                    },
                    {
                        xtype: 'map'
                    }
                ]
            },
            {
                title: '我的宠物',
                iconCls: 'settings',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: '我的宠物'
                    },
                    {
                        html:["我的宠物"]
                    }
                ]
            }
        ]
    }
});
