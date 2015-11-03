var args = arguments[0] || {};


var tabs = Alloy.Globals.Tabs.createPagerTabs({
    current: 0,
    tab: {
        indicatorColor      : Alloy.Globals.viewPager.indicatorColor,
        backgroundColor     : Alloy.Globals.viewPager.backgroundColor,
        alignment           : Alloy.Globals.Tabs.ALIGNMENT_LEFT,
        shouldExpand        : true,
        color               : Alloy.Globals.viewPager.color,
        upperCase           : Alloy.Globals.viewPager.upperCase
    },
    views: [
        {
            title: L("day1_caption"),
            view: Alloy.createController('day1').getView()
        },
        {
            title: L("day2_caption"),
            view: Alloy.createController('day2').getView()
        },
        {
            title: L("day3_caption"),
            view: Alloy.createController('day3').getView()
        }
    ]
});

$.schedule.add(tabs);
