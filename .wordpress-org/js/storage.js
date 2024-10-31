jQuery(document).ready(function($){
	var verdadero = 0;
	userlogin = save_user_storage_object.userlogin;
	usergrav = save_user_storage_object.usergrav;
	display_name = save_user_storage_object.display_name;

	//primero veremos como esta la data
	datalogin = localStorage.getItem("userlogin");
	datagrav = localStorage.getItem("usergrav");
	dataname =localStorage.getItem("display_name");
	//creamos los separadores
	if(datalogin!=null && datalogin.indexOf(',')>(-1)){
		
			datalogintemp = datalogin.split(',');
			datagravtemp = datagrav.split(',');
			datanametemp = dataname.split(',');
			//haremos el for para guardar los datos
			for(i=0; i<datalogintemp.length; i++){
				if(datalogintemp[i]!=''){
					if(datalogintemp[i] == userlogin){
						verdadero = 1;
					}
				}
			}
		//una ves salido del for lo colocaremos dentro del storage
		if(verdadero == 0){
			datalogin+=','+userlogin;
			datagrav+=','+usergrav;
			dataname+=','+display_name;
			//guardamos en formato local
			localStorage.setItem("userlogin", datalogin);
			localStorage.setItem("usergrav", datagrav);
			localStorage.setItem("display_name", dataname);
		}
	}else{
		if(userlogin!=datalogin){
			datalogin = datalogin+','+userlogin;
			datagrav = datagrav+','+usergrav;
			dataname = dataname+','+display_name;
			localStorage.setItem("userlogin", datalogin);
			localStorage.setItem("usergrav", datagrav);
			localStorage.setItem("display_name", dataname);
		}
	
	}
});