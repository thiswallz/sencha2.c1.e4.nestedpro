Ext.define('Ejemplo4Nested.controller.Regiones', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            main: 'main',
            listaRegiones: 'listaregiones'        
        },
        control: {
            'button[action=nestedList]': {
                tap: 'nestedList'
            }
        }
    },
    launch: function() {
        //console.log(this);
    },
    nestedList: function(){
        /*
        var st = Ext.StoreMgr.get('mgrRegionId');
        st.on({
            load: 'onRegionesLoad',
            scope: this
        });
        st.load(); */   
    },
    onRegionesLoad: function(r){
        console.log(r)
    }

});