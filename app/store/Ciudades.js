Ext.define('Ejemplo4Nested.store.Ciudades', {
    extend: 'Ext.data.Store',
    requires: [
    	'Ejemplo4Nested.model.Ciudad'
    ],
	config:{
		storeId : 'mgrCiudadId',
	    model: 'Ejemplo4Nested.model.Ciudad'	
    }
});