var args = arguments[0] || {};


function route2phreaknic(){
 var intent = Ti.Android.createIntent({
        action: Ti.Android.ACTION_VIEW,
        data:'geo:0,0+?q='+"2025 Rosa L Parks Blvd Nashville, TN 37228"
    });
    Ti.Android.currentActivity.startActivity(intent);	
}