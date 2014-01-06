/**
 * Plugin para marcacao de campo obrigatorio
 *
 * Fabio Jr. Policeno <fabiojpoli@hotmail.com> 
 * 03/09/2011
 */

Ext.define('Ext.ux.form.field.MarkAllowBlank', {
	extend: 'Ext.AbstractPlugin',
	alias: 'plugin.markallowblank',
	colorNotAllow: 'red',
	colorAllow: 'green',
	showColorAllow: true,
	markWidth: 2,

	init: function(cmp) {
		var me = this;
		me.cmp = cmp;

		me.cmp.setAllowBlank = Ext.bind(me.setAllowBlank, me);
		me.cmp.on('afterrender', function() {
			me.setAllowBlank(me.cmp.allowBlank);
		});
	},
	
	setAllowBlank: function(allowBlank) {
		var me = this,
			cmp = me.cmp || me,
			styleWithColor = {'border-right': me.markWidth+'px solid '+(allowBlank === false ? me.colorNotAllow : me.colorAllow), 'padding-right': '2px'},
			styleWithoutColor = {'border-right': '0px'},
			style = allowBlank === false ? styleWithColor : (me.showColorAllow ? styleWithColor : styleWithoutColor);

		cmp.allowBlank = allowBlank;
		if(!Ext.isEmpty(cmp.labelCell)) {
			cmp.labelCell.setStyle(style);
		}
	}
});