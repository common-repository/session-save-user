<?php
/**
 * Plugin Name: Session Save User
 * Plugin URI: www.frontuari.com
 * Description: This plugin works in a very simple way allowing you to save the users that have logged in to your wodpress page from your computer, giving them a quick access to your user account when they return again and no less important style to the wordpress login
 * Version: 1.1
 * Author: albertdesinger
 * Author URI: https://www.facebook.com/camila.daniel.thiago
 * License: GPL2+
 * Text Domain: session-save-user
 * Domain Path: /lang/
 *
 *
 */
	
function is_login_page() {
    return in_array($GLOBALS['pagenow'], array('wp-login.php', 'wp-register.php'));
}

add_action( 'plugins_loaded', 'ssuv_init' , 20 );
function ssuv_init(){
	if(is_login_page()){
			add_action( 'login_enqueue_scripts', 'session_save_user_enqueue',10);
			function session_save_user_enqueue(){
				wp_enqueue_style('save_user_enqueuecss', plugin_dir_url( __FILE__ ).'assets/css/file.css');
				wp_enqueue_script('save_user_enqueuejs', plugin_dir_url( __FILE__ ).'assets/js/file.js', array('jquery') );
			}
		}
}

add_action('admin_init','session_save_user_init');
function session_save_user_init(){
	//guardaremos de esta forma e storage
	$current_user = wp_get_current_user();
	$grav_url = "http://www.gravatar.com/avatar.php?gravatar_id=".md5($current_user->user_email)."&default=&size=50";
	wp_enqueue_script('save_user_storage_enqueuejs',plugin_dir_url( __FILE__ ).'assets/js/storage.js', array('jquery'));
	wp_localize_script( 'save_user_storage_enqueuejs', 'save_user_storage_object',
		array(
		   	'userlogin' => $current_user->user_login,
		    'usergrav'=> $grav_url,
		    'display_name'=>$current_user->display_name
		)
	);
}

