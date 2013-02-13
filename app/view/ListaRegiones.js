Ext.define('Ejemplo4Nested.view.ListaRegiones', {
    extend: 'Ext.navigation.View',
    alias: "widget.listaregiones",    
    requires: [
        'Ext.TitleBar',
        'Ejemplo4Nested.model.Region',
        'Ext.data.TreeStore',
        'Ext.data.proxy.Ajax',
        'Ext.data.Store',
        'Ext.dataview.NestedList'    
    ],
    initialize: function() {
        this.callParent();
        var me = this;

        var ciudades = Ext.create('Ext.List',{
            title: 'Ciudad',
            itemTpl: '{nombre}',
            store: 'mgrCiudadId',
            listeners: {
                itemtap: function(l,i,t,r,e) {
 
                }
            }
        });

        var regiones = Ext.create('Ext.List',{
            title: 'Region',
            itemTpl: '{nombre}',
            store: 'mgrRegionId',            
            listeners: {
                itemtap: function(l,i,t,r,e) {
                    var region = r;
                    region.ciudades().each(function(ciudad) {
                        console.log(ciudad.get('nombre'))
                        ciudad.comunas().each(function(comuna) {
                            console.log("::"+comuna.get('nombre'))
                        });
                    });
                    var store = ciudades.getStore();
                    var records = store.getRange();
                    store.remove(records);
                    ciudades.setData(r.raw.ciudades);
                    me.push(ciudades);
                }
            }        
        });
        me.push(regiones);
    },
    config: {
        centered: true,
        width: '100%',
        height: '100%',        
        autoDestroy: false,        
        items: []    
    }
});
