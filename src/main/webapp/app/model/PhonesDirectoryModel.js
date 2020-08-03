Ext.define('PhonesDir.model.PhonesDirectoryModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'phone'],
    proxy: {
        pageParam: 'search',
        type: 'rest',
        api: {
            create: 'phone',
            read: 'phone',
            destroy: 'phone'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});