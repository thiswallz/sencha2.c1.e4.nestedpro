Ext.define('Ejemplo4Nested.model.Region', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id', type: 'auto'},
            {name: 'nombre', type: 'auto'},
            {name: 'codigo', type:'auto'}        
        ],
        associations: [{
            type: 'hasMany',
            model: 'Ejemplo4Nested.model.Ciudad',
            primaryKey: 'id',
            foreignKey: 'id_region',
            autoLoad: true,
            associationKey: 'ciudades',
            associatedName: 'ciudades'
        }]
    }
});
