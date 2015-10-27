// This is the template cz we extend Rally App
Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
	
	//Internally APP calls Launch method
	launch: function(){
		console.log("Our first App, YEY!!!!!");
		this._loadData();
			
	},
	
	// Get Data from Rally
	_loadData: function(){
		var myStore = Ext.create('Rally.data.wsapi.Store', {
			model: 'User Story',
			autoLoad: true,
			listeners: {
				load: function(myStore, data, success) {
					console.log("Got data!!", myStore, data, success);
					this._loadGrid(myStore);				
					//process data
				},
				scope: this
			},
			fetch: ['FormattedID','Name', 'Owner', 'ScheduleState']
		});
	},
	
	// Create and show grid
	_loadGrid: function(myStore){
		var myGrid = Ext.create('Rally.ui.grid.Grid', {
			store: myStore,
			// Columns to fetch on the Grid
			columnCfgs: [
				 'FormattedID',
				 'Name',
				 'Owner',
				 'ScheduleState'
			 ],
		});
		
		console.log("My GRID",myGrid);
		this.add(myGrid);
		console.log("What is this ",this);
	}
});
