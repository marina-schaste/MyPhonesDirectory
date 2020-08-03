Ext.define('PhonesDir.view.AddWindowForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.addWindowForm',
    autoShow: true,
    layout: 'fit',
    modal: true,

    items: [
        {
            bodyPadding: 10,
            xtype: 'form',
            items: [
                {
                    xtype: 'textfield',
                    name: 'firs_name',
                    fieldLabel: 'first_name',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'last_name',
                    fieldLabel: 'last_name',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'middle_name',
                    fieldLabel: 'middle_name',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    "xtype": 'textfield',
                    "fieldLabel": 'position',
                    "name": 'position',
                    "allowBlank": false,
                    "blankText": 'Это поле должно быть заполнено'
                },
                {
                    "xtype": 'textfield',
                    "fieldLabel": 'type',
                    "name": 'type',
                    "allowBlank": false,
                    "blankText": 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'phone_number',
                    fieldLabel: 'phone_number',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                }
            ]
        }
    ],

    buttons: [
        {
            text: 'Save',
            action: 'save',
            disabled: true
        },
        {
            text: 'Cancel',
            handler: function () {
                this.up('window').close();
            }

        }
    ]
});