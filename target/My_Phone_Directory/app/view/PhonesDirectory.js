Ext.define('PhonesDir.view.PhonesDirectory', {
    extend: 'Ext.panel.Panel',
    width: 500,
    height: 360,
    padding: 10,
    alias: 'widget.phonesDirectory',
    layout: 'border',
    items: [
        {
            xtype: 'phonesGrid',
            region: 'center'
        },
        {
            xtype: 'panel',
            html: '<div style="font: normal 18px cursive"><center><font size = "10">My Phone Directory</font></center></div>',
            region: 'north',
            height: 80
        }
    ],
    renderTo: Ext.getBody()
});