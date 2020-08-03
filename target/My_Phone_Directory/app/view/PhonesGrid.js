Ext.define('PhonesDir.view.PhonesGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.phonesGrid',
    width: 400,
    height: 300,
    frame: true,
    store: 'PhonesDirectoryStore',
    iconCls: 'icon-user',
    columns: [
        {
            text: 'first_name',
            flex: 1,
            sortable: true,
            dataIndex: 'name'

        },
        {
            text: 'last_name',
            flex: 2,
            sortable: true,
            dataIndex: 'last_name'

        },
        {
            text: 'middle_name',
            flex: 3,
            sortable: true,
            dataIndex: 'middle_name'

        },
        {
            text: 'position',
            flex: 4,
            sortable: true,
            dataIndex: 'position'

        },
        {
            text: 'type',
            flex: 5,
            sortable: true,
            dataIndex: 'type'

        },
        {
            flex: 6,
            text: 'phone number',
            sortable: true,
            dataIndex: 'phone'
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'add',
                    action: 'add',
                    iconCls: 'icon-add'
                },
                '-',
                {
                    action: 'edit',
                    text: 'edit',
                    iconCls: 'icon-edit',
                },
                '-',
                {
                    action: 'delete',
                    text: 'delete',
                    iconCls: 'icon-delete',
                    disabled: true
                }
            ]
        }
    ]
});