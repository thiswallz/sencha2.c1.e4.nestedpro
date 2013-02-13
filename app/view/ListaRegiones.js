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
                    // and more....
                }
            }
        });

        var regiones = Ext.create('Ext.List',{
            title: 'Region',
            itemTpl: '{nombre}',
            store: 'mgrRegionId',            
            listeners: {
                itemtap: function(l,i,t,r,e) {
                    //clean list
                    var store = ciudades.getStore();
                    var records = store.getRange();
                    store.remove(records);
                    //set new data
                    ciudades.setData(r.raw.ciudades);
                    //nested effect
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
