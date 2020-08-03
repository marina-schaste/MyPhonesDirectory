Ext.define('PhonesDir.store.PhonesDirectoryStore', {
    extend: 'Ext.data.Store',
    model: 'PhonesDir.model.PhonesDirectoryModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
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