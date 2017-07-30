<?php
/**
 * Gridworks Funções e definições
 *
 * @package Gridworks
 */

// Requires

require_once("inc/wp/create-post-types.php");

function gridworks_scripts() {

	// CSS
	wp_enqueue_style( 'gridworks-style', get_template_directory_uri() . '/app/css/style.css' );

  // Vendors
  wp_enqueue_style( 'slick-css', get_template_directory_uri() . '/app/vendors/slick/slick/slick.css' );

	// JS
  wp_enqueue_script( 'slick-js', get_template_directory_uri() . '/app/vendors/slick/slick/slick.min.js', array(), false , true );
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
