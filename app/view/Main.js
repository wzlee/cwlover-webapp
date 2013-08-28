Ext.define('cwlover.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.Map'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'list',
                title: '品种大全',
                iconCls: 'favorites',

                styleHtmlContent: true,
                scrollable: true,

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: '宠物品种介绍'
                    },{
                        xtype:'varietylist'
                    }
                ]
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
                        xtype: 'map',
                        flex: 1,
                        mapOptions: {
                            zoomControl: false,
                            panControl: false,
                            rotateControl: false,
                            streetViewControl: false,
                            mapTypeControl: false,
                            zoom: 13
                        }
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
