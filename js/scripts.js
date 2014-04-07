//

function home()
{
	console.log("test");
$("#show").empty();
$("#show").append('<div><table class="lab"><tr><td >google</td><td >TOS</td><td >2014-04-01</td><td >110err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table></div>')
$("#show").append('<hr/><div id="test"><table class="lab"><tr><td >Settings</td><td >battery</td><td >2014-04-02</td><td >90err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table></div>');
$('#show').append('<hr/><div><table class="lab"><tr><td >google</td><td >message</td><td >2014-04-05</td><td >60err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table></div>');
$('#show').append('<hr/><div><table class="lab"><tr><td >Settings</td><td >battery</td><td >2014-04-17</td><td >55err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table></div><hr><div><table class="lab"><tr><td >Settings</td><td >battery</td><td >2014-03-20</td><td >40err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table></div><div>');
$('#show').append('<hr><div><table class="lab"><tr><td >Settings</td><td >battery</td><td >2014-04-07</td><td >30err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table></div>');
$('#show').append('<hr><div><table class="lab"><tr><td >Travis-Reporter</td><td >oolab</td><td >2014-04-08</td><td >Nerver</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table></div>');
}

function com_component()
{

//<td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td>
var combox=document.getElementById("cb_component");
	if(combox[combox.selectedIndex].value=="Google"){
  		$("#show").empty();
		$('#show').append('<table class="lab"><tr><td >Google</td><td >TOS</td><td >2014-04-07</td><td >40err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Google</td><td >message</td><td >2014-06-07</td><td >30err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Google</td><td >battery</td><td >2013-05-05</td><td >20err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Google</td><td >TOS</td><td >2009-04-20</td><td >10err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Google</td><td >app</td><td >2100-05-07</td><td >5err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Google</td><td >bluetooth</td><td >1992-11-28</td><td >7err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
		
 	}
 	else if(combox[combox.selectedIndex].value=="Settings")
 	{
 		$("#show").empty();
		$('#show').append('<table class="lab"><tr><td >Settings</td><td >calendar</td><td >2015-04-12</td><td >90err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Settings</td><td >message</td><td >2014-25-08</td><td >50err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Settings</td><td >battery</td><td >2000-05-07</td><td >30err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Settings</td><td >bluetooth</td><td >2014-06-11</td><td >10err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Settings</td><td >calendar</td><td >2012-02-29</td><td >5err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');

 	}

	
}
function com_error_range()
{
	var combox=document.getElementById("cb_Error_range");
	if(combox[combox.selectedIndex].value==">50"){
		$("#show").empty();
		$('#show').append('<table class="lab"><tr><td >Settings</td><td >calendar</td><td >2015-04-12</td><td >100err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Settings</td><td >message</td><td >2014-25-08</td><td >60err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></table>');

	}
	else if(combox[combox.selectedIndex].value==">90")
	{
		$("#show").empty();
		$('#show').append('<table class="lab"><tr><td >Settings</td><td >calendar</td><td >2015-04-12</td><td >100err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
	}
	else if (combox[combox.selectedIndex].value=="") {
		$("#show").empty();
		$('#show').append('<table class="lab"><tr><td >Settings</td><td >calendar</td><td >2015-04-12</td><td >90err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Settings</td><td >message</td><td >2014-25-08</td><td >60err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Settings</td><td >battery</td><td >2000-05-07</td><td >45err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Google</td><td >bluetooth</td><td >1992-11-28</td><td >8err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');

	};


}
function com_date_range()
{
	var combox=document.getElementById("cb_date_range");
	if(combox[combox.selectedIndex].value=="10 ago"){
		$("#show").empty();
		$('#show').append('<table class="lab"><tr><td >Settings</td><td >calendar</td><td >2014-03-26</td><td >90err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
			$('#show').append('<hr><table class="lab"><tr><td >Settings</td><td >battery</td><td >2014-03-20</td><td >37err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Google</td><td >bluetooth</td><td >2014-02-28</td><td >25err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Google</td><td >battery</td><td >2014-02-25</td><td >25err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
	}
	else if(combox[combox.selectedIndex].value=="30 ago")
	{

		$("#show").empty();
		$('#show').append('<table class="lab"><tr><td >Google</td><td >bluetooth</td><td >2014-02-28</td><td >25err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Google</td><td >battery</td><td >2014-02-25</td><td >25err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
	}
	else if (combox[combox.selectedIndex].value=="") {
		$("#show").empty();
		$('#show').append('<table class="lab"><tr><td >Settings</td><td >calendar</td><td >2014-03-26</td><td >90err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Google</td><td >message</td><td >2014-04-06</td><td >56err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Settings</td><td >battery</td><td >2014-03-20</td><td >37err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Google</td><td >bluetooth</td><td >2014-02-28</td><td >25err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Google</td><td >battery</td><td >2014-02-25</td><td >25err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');
		$('#show').append('<hr><table class="lab"><tr><td >Google</td><td >bluetooth</td><td >2014-04-05</td><td >22err/day</td><td><form action="details.html" target="_blank"><input id="bt_detail" type="Submit" value="" /></form></td></tr></table>');

	};

}
