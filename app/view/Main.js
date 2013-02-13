Ext.define('Ejemplo4Nested.view.Main', {
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
                title: 'Welcome',
                iconCls: 'home',
                styleHtmlContent: true,
                scrollable: true,
                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                }
            },
            {
                title: 'Lista',
                iconCls: 'action',
                items: [
                    {xtype: 'listaregiones'}
                ]
            }
        ]
    }
});
