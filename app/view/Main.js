Ext.define('MarkAllowBlank.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.ux.form.field.MarkAllowBlank',
        'Ext.form.Panel',
        'Ext.form.field.Date',
        'Ext.form.field.ComboBox',
        'Ext.form.FieldContainer'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'west',
        width: 150
    },{
        region: 'center',
        xtype: 'tabpanel',
        items: {
            title: 'Center Tab 1',
            xtype: 'form',
            bodyPadding: 5,            
            defaultType: 'textfield',
            defaults: {
                plugins: 'markallowblank',
                labelWidth: 170
            },
            items: [{
                fieldLabel: 'Required',
                allowBlank: false
            },{
                fieldLabel: 'Not required with color'
            },{
                xtype: 'textarea',
                fieldLabel: 'Not required without color',
                plugins: {
                    ptype: 'markallowblank',
                    showColorAllow: false
                }
            },{
                xtype: 'datefield',
                fieldLabel: 'Required other color',
                allowBlank: false,
                plugins: {
                    ptype: 'markallowblank',
                    colorNotAllow: 'blue'
                }
            },{
                xtype: 'combo',
                fieldLabel: 'Not required other color',
                plugins: {
                    ptype: 'markallowblank',
                    colorAllow: 'yellow'
                }
            },{
                xtype: 'datefield',
                fieldLabel: 'Required change width mark',
                allowBlank: false,
                plugins: {
                    ptype: 'markallowblank',
                    markWidth: 4
                }
            },{
                xtype: 'fieldcontainer',
                items: [{
                    xtype: 'button',
                    enableToggle: true,
                    text: 'Required',
                    pressed: true,
                    listeners: {
                        toggle: function(btn, pressed) {
                            btn.up('form').down('#fieldDynamic').setAllowBlank(!pressed);
                        }
                    }
                },{
                    xtype: 'textfield',
                    plugins: 'markallowblank',
                    fieldLabel: 'Field Dynamic',
                    itemId: 'fieldDynamic',
                    allowBlank: false
                }]
            }]
        }
    }]
});