exports.definition = {
	config: {
		columns: {
		    "time"	 	 	: "TEXT",
		    "room"			: "TEXT",
		    "title"			: "TEXT",
		    "speaker"		: "TEXT",
		    "description"	: "TEXT",
		    "speakerbio"	: "TEXT",
			"speakerpic"	: "TEXT",
        "myindex"       : "INTEGER"
		},
		adapter: {
			type: "sql",
			collection_name: "day2"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};