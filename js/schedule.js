// Schedule JS - Any calendar settings can be changed here

$(document).ready(function() { // function called on page load
  // for the sidebar -- not me
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });

  // renders the schedule -- settings can be changed here
  // full documentation at http://fullcalendar.io/docs/
  $('#schedule').fullCalendar({
    header: { // buttons along the header of schedule
      left: 'prev,next',
      // TESTING: button that adds all subjects for testing
      //center: 'addAll',
      right: 'clearAll today'
    },
    theme: true, // enables jQueryUI theme
    defaultView: 'agendaWeek', // weekly calendar
    slotLabelFormat: 'H:mm', // time slot time format
    firstDay: 6, // sets the first day of the week to Saturday, so that on the weekend the schedule skips forward to the next week (weekends are hidden)
    slotEventOverlap: false, // event overlap
    allDaySlot: true, // all day events above normal events, could be used for study days
    weekNumbers: true,
    weekends: false, // hides weekends
    editable: false, // allows events to be dragged around
    minTime: '08:00:00', // start time displayed
    maxTime: '17:00:00', // end time displayed
    eventLimit: true, // allow "more" link when too many events -- don't actually use this
    weekNumberTitle: "W ", // text in front of week number, 'W' to fit on small mobile screens
    weekNumberCalculation: 'ISO', // how week number is calculated, ISO for local
    contentHeight:455, // height of content in schedule, needed to hide extra area below the end time for some reason, probably related to gray bar that ludo hates
    timeFormat: "H:mm", // format for time on events
    customButtons: { // custom buttons for header
       clearAll: {
          text: 'Clear All',
              click: function() {
                  $('#schedule').fullCalendar( 'removeEventSources'); // built in fullCalendar function
                  for (i = 0; i < class_ids.length ; i++) {
                    // set clicked to false for subjects
                    if (class_ids[i].clicked == true) {
                        class_ids[i].clicked = false;
                    };
                    // set cookies so that subjects not saved on schedule
                    if (getCookie(class_ids[i].id) == 'y') {
                        setCookie(class_ids[i].id, 'n', 2000);
                    };
                  };
              }
          },
      //TESTING: button used for testing that adds all subjects
      addAll: {
          text: 'Add All',
              click: function() {
                for (i = 0; i < class_ids.length ; i++) {
                  addEventSource(class_ids[i]);
                }
              }
          }
      }
  });

  // Now that schedule is loaded, events are added if there is a cookie for them
  var i;
  for (i = 0; i < class_ids.length ; i++) {
    if (getCookie(class_ids[i].id) == 'y') {
        addEventSource(class_ids[i]);
    };
  };
  // Events for everyone, universal events, are added (study days, deadlines, etc.)
  for (i = 0; i < universal_events.length ; i++) {
      addEventSource(universal_events[i]);
  };
  // #sidebar is hidden by default, only displayed AFTER schedule is fully loaded, avoids the subjects appearing first while loading on mobile
  $('#sidebar').show();
});

// COOKIE NOTE - this is not how to use cookies. Normally you would set one cookie with an ID number, then store all info in a database referencing that ID. Not really worth a rewrite unless project expanded beyond IB14
// ALSO cookies won't work when you're testing the site offline, only when hosted somewhere (AFAIK)

// writes cookies -- not mine
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname+"="+cvalue+"; "+expires;
}

// gets cookies -- not mine
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

// list of class objects, stored in schedule_data.js
var class_ids  = [  ECOhlEK ,  ECOhlET , ECOhlAN ,  PSYChlHE ,  PSYCslMNP ,  MAhlCNS ,  MAslLGN ,  MAslMP , MASTslKHL ,  MASTslDL ,  HIShlON ,  HIShlLT ,  HIShlANG ,  BMslEDK , SWEBhlPNL ,  SWEBslPNL ,  SWELLhlLTE ,  SWELLslBM ,  SWELhlGD , CHEMhlSM ,  CHEMhlSCH ,  CHEMslJN ,  GLOPOLHR , THEAhlGG ,  PHYhlFM ,  PHYhlEE , PHYslEE , ENVslNNG , ENVslSTD ,  ENGLhlWR , ENGLLhlFD ,  ENGLLhlGG ,  ENGLslWR ,  ENGBhlPNJ ,  ENGBhlMM ,  ENGLLslANM ,  BIOhlLQ ,  BIOhlBOU , BIOslNNG,  FREBhlHK , FREBslHK,  SPABhlTEU , SPABslTEU, TOK_DL , TOK_LGN ,  TOK_WR ,  TOK_EE ]

// list of universal events (study days, deadlines, etc.), stored in schedule_data.js
var universal_events = [STUDY_DAYS]

// adds a whole subject as an 'event source', data in schedule_data.js -- this is actually mine :D
var addEventSource = function(course) {
  //$('#'+course.id).parent().parent().toggleClass('clicked')
  //$('#'+course.id).parent().toggleClass('clicked')
  if (course.clicked == false) {
    setCookie(course.id,'y', 2000)
    course.clicked = true
    $('#schedule').fullCalendar( 'addEventSource', course)

  }
  else {
    setCookie(course.id,'n', 2000);
    course.clicked = false;
    $('#schedule').fullCalendar( 'removeEventSource', course.id )
  };
};
