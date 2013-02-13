Ext.define('Ejemplo4Nested.model.Comuna', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id', type: 'auto'},
            {name: 'nombre', type: 'auto'},    
            {name: 'id_ciudad', type: 'auto'}
        ],
		belongsTo: 'Ejemplo4Nested.model.Ciudad'
	}
});
