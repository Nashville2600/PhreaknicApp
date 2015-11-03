Alloy.Globals.tabGroup=$.index;

$.index.addEventListener('open',function(evt){
	if (OS_ANDROID){
		var activity=evt.source.getActivity();
		var actionbar=activity.actionBar;
		actionbar.title="PhreakNIC 18 Conference";
	}
});

$.index.open();
