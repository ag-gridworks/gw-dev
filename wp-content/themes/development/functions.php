<?php
/**
 * Gridworks Funções e definições
 *
 * @package Gridworks
 */

// Requires

require_once("inc/wp/create-post-types.php");
require_once("inc/wp/create-fields.php");

function gridworks_scripts() {

	// CSS
  wp_enqueue_style( 'gw-plugins', get_template_directory_uri() . '/dist/css/plugins.css' );
	wp_enqueue_style( 'gw-css', get_template_directory_uri() . '/dist/css/style.css' );

	// JS
  wp_enqueue_script( 'gw-js', get_template_directory_uri() . '/dist/js/main.js', array(), false , true );
}

// Inicia Estilos
add_action( 'wp_enqueue_scripts', 'gridworks_scripts' );

// Remove barra de administrador
add_filter('show_admin_bar', '__return_false');

// Inicia Estilos da área de login
function gridworks_login() {
  echo '<link rel="stylesheet" type="text/css" href="' . get_bloginfo('stylesheet_directory') . '/inc/wp/custom-login-styles.css" />';
}
add_action('login_head', 'gridworks_login');

$menuParameters = array(
  'container'       => 'aaaaa',
  'echo'            => false,
  'items_wrap'      => '%3$s',
  'depth'           => 0,
);

// Theme Supports

add_theme_support('menus');
add_theme_support( 'post-thumbnails' ); 

// Add SVG support

function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

add_theme_support( 'custom-logo' );

function wpb_custom_new_menu() {
  register_nav_menus(
    array(
      'navbar-menu' => __( 'Navbar (Menu Principal)' )
    )
  );
}
add_action( 'init', 'wpb_custom_new_menu' );