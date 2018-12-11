// Functions for time tracker
(function() {
	console.log("message");
	const timeData = [
		{
			"entries": {
		  	"1:1": {
		      "30": {
	        	"Payan":"01/01/2018"	        
		      },
		      "30": {
	        	"Nancy":"01/01/2018"	        
		      }
		    }      
		  }
		}
	];

	function buildDataSet() {
		const output = [];
		timeData.forEach((currentEntry, entryType) => {	
		});
		new Chartkick.PieChart("pie", 
			[["1:1",120],["Standup",75],["Retro/Planning",60],["Grooming",60],["Interviews",375]], 
			{download: "pie"}
		);
	}
	buildDataSet();
})();