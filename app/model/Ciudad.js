Ext.define('Ejemplo4Nested.model.Ciudad', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id', type: 'auto'},
            {name: 'nombre', type: 'auto'},
            {name: 'id_region', type: 'auto'}    
        ],
        associations: [{
            type: 'hasMany',
            model: 'Ejemplo4Nested.model.Comuna',
            primaryKey: 'id',
            foreignKey: 'id_ciudad',
            autoLoad: true,
            associationKey: 'comunas',
            associatedName: 'comunas'
        },{
            type: 'belongsTo',
            model: 'Ejemplo4Nested.model.Region',
            primaryKey: 'id',
            foreignKey: 'id'
        }]
    }
});
