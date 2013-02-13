Ext.define('Ejemplo4Nested.store.Regiones', {
    extend: 'Ext.data.Store',
    requires: [
    	'Ejemplo4Nested.model.Region'
    ],
    onStLoad: function(r) {
        //sample relation  NESTED DATA
        var region = r.first();
        console.log(region)
        console.log(region.get('nombre'));
        //nested store effect instance : parent.children()
        region.ciudades().each(function(ciudad) {
            console.log(ciudad.get('nombre'))
            ciudad.comunas().each(function(comuna) {
                console.log("::"+comuna.get('nombre'))
            });
        });
    },
    config:{
        listeners: [{
            fn: 'onStLoad',
            event: 'load'
        }],
	storeId : 'mgrRegionId',
	model: 'Ejemplo4Nested.model.Region',
        autoSync: true,
        autoLoad: true,
	proxy:{
            type:'ajax',
            url: 'http://localhost/sencha/c1.core/services/buscaregiones.php',
            reader:{
               type:'json',
               rootProperty:'data'
            }
        }
    }
});
