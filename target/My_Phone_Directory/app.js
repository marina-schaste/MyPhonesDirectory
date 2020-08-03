Ext.application({
    name: 'PhonesDir',
    appFolder: 'app',
    controllers: 'PhonesDirectoryController',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'phonesDirectory',
                html: '<h2></h2>'
            }
        });
    }
});
