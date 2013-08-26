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
                title: '宠物秀场',
                iconCls: 'favorite',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '宠物秀场'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: '宠物商城',
                iconCls: 'buy',

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
                iconCls: 'user',

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
