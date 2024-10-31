jQuery(document).ready(function($){

	var datalogin = localStorage.getItem("userlogin");
	var datagrav = localStorage.getItem("usergrav");
	var dataname =localStorage.getItem("display_name");
	var datatable = '<center><table id="table_session_save" aling="center">';
	var cont = 1;
	var style_temp='';
	datatable+='<caption id="caption_text" style="display:none;"><center><button class="ssuv_next">Next</button></center></caption>';
	if(datalogin!=null && datalogin.indexOf(',')>(-1)){
		datalogintemp = datalogin.split(',');
		datagravtemp = datagrav.split(',');
		datanametemp = dataname.split(',')
		//abriendo el for
		datatable+='<tr>';
		for(i=0; i<datalogintemp.length; i++){
			if(datalogintemp[i]!='null' && datagravtemp[i]!=''){
				if(cont>3){
					style_temp = 'display:none';
				}
				datatable+='<td class="ssuv_td_user" style="'+style_temp+'" width="95px;">';
				datatable+='<center>';
				datatable+='<span class="delete_user" dname="'+datanametemp[i]+'" grav="'+datagravtemp[i]+'" iduser="'+datalogintemp[i]+'">X</span>';
				datatable+='<a href="#" class="ssuv_button">';
				datatable+='<img src="'+datagravtemp[i]+'"  class="ssuv_avatar">';
				datatable+='<p class="ssuv_p_avatar">'+datanametemp[i]+'</p></a>';
				datatable+='<div class="data_format_ssuv">';
				datatable+='<input type="hidden" value="'+datalogintemp[i]+'">';
				datatable+='</div>';
				datatable+='</center></td>';
				cont+=1;
			}
		}//cierre del for
		datatable+='</tr>';
		datatable+='</table>';
	}

	var pos_visible = 0;
	$("div#login").find('h1').after(datatable);
	var total_td = parseInt(jQuery("#table_session_save").find('tr td').length);
	if(cont>4){$("#caption_text").show(0); }
	$(document).on('click','.ssuv_button',function(){
		user = $(this).parent().find('div.data_format_ssuv input').val();
		$("#user_login").val(user);
		$("#user_pass").val("").focus();
		return false;
	});	
	
		$(document).on('click','.ssuv_next',function(){
		$(".ssuv_td_user").each(function(i){
			if($(this).is(':visible')){
				pos_visible = i;
			}
		});
		$(".ssuv_td_user").hide(0);
		if(typeof $(".ssuv_td_user").eq(pos_visible+1).html()!=='undefined'){
			$(".ssuv_td_user").eq(pos_visible+1).show(0);
		}else{
			$(".ssuv_td_user").eq(0).show(0);
			$(".ssuv_td_user").eq(1).show(0);
			$(".ssuv_td_user").eq(2).show(0);
			return false;	
		}
		if(typeof $(".ssuv_td_user").eq(pos_visible+2).html()!=='undefined'){
			$(".ssuv_td_user").eq(pos_visible+2).show(0);
		}
		if(typeof $(".ssuv_td_user").eq(pos_visible+3).html()!=='undefined'){
			$(".ssuv_td_user").eq(pos_visible+3).show(0);
		}
		
	});
	$(document).on('click','.delete_user',function(){
		iduser = $(this).attr('iduser');
		name = $(this).attr('dname');
		grav = $(this).attr('grav');
		buttom = $(this);
		if(confirm("Desea Eliminar este elemento")){
			datalogin = datalogin.replaceAll(iduser,'');
			datalogin = datalogin.replaceAll(',,',',');
			datagrav = datagrav.replaceAll(grav,'');
			datagrav = datagrav.replaceAll(',,',',');
			dataname = dataname.replaceAll(name,'');
			dataname = dataname.replaceAll(',,',',');
			//guardamos los datos
			localStorage.setItem("userlogin", datalogin);
			localStorage.setItem("usergrav", datagrav);
			localStorage.setItem("display_name", dataname);
			buttom.parent().parent().remove();

			$(".ssuv_td_user").each(function(i){
					if($(this).is(':visible')){
						pos_visible = i;
					}
				});
			if(typeof $(".ssuv_td_user").eq(pos_visible+1).html()!=='undefined')
			{
				$(".ssuv_td_user").eq(pos_visible+1).show(0);
			}else{
				$(".ssuv_td_user").hide();
				$(".ssuv_td_user").eq(0).show(0);
				$(".ssuv_td_user").eq(1).show(0);
				$(".ssuv_td_user").eq(2).show(0);
			}
		

		}
	});

	String.prototype.replaceAll = function(search, replacement) {
	    var target = this;
	    return target.split(search).join(replacement);
	};

});



							
							
							