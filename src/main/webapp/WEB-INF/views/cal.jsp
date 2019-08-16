<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%-- <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>

<%@ include file="inc/header.jsp"%>
 --%>
<link href='/resources/css/fullcalendar/core.css' rel='stylesheet' />
<link href='/resources/css/fullcalendar/daygrid.css' rel='stylesheet' />

<script src='/resources/js/fullcalendar/core.js'></script>
<script src='/resources/js/fullcalendar/daygrid.js'></script>
<script>

  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
    	 plugins: [ 'dayGrid' ],
      defaultView: 'dayGridMonth',
      dateClick: function(info) {
    	    alert('Clicked on: ' + info.dateStr);
    	    alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
    	    alert('Current view: ' + info.view.type);
    	    // change the day's background color just for fun
    	    info.dayEl.style.backgroundColor = 'red';
    	  }
    });

    calendar.render();
  });

</script>

<div  id="calendar"> </div>


<%-- <%@ include file="inc/footer.jsp"%> --%>