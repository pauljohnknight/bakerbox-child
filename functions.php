<?php

//  ----------------   enqueue custom fonts for childtheme ----------------

wp_enqueue_style ('child-rational-font', get_stylesheet_directory_uri() . '/fonts/rational/childfonts.css');
wp_enqueue_style ('child-didonesque-font', get_stylesheet_directory_uri() . '/fonts/didonesque/childfonts.css');
wp_enqueue_style ('child-worksans-font', get_stylesheet_directory_uri() . '/fonts/worksans/childfonts.css');


//  ----------------   enqueue custom jquery file for childtheme ----------------
function add_my_jquery () {
wp_register_script ('paulScript', get_stylesheet_directory_uri() . '/js/baker_custom.js', array('jquery'), '1.1', true);
wp_enqueue_script ('paulScript');
}
add_action( 'wp_enqueue_scripts', 'add_my_jquery');



//  ----------------   enqueue Greensock TweenMax for childtheme ----------------

function add_my_greensock () {
wp_register_script ('greenScript', get_stylesheet_directory_uri() . '/greensock/TweenMax.min.js', array('jquery'), '', true);
wp_enqueue_script ('greenScript');
}
add_action( 'wp_enqueue_scripts', 'add_my_greensock');


//  ----------------   enqueue Greensock CSS rule plugin for childtheme ----------------

function add_my_gs_css_rule () {
wp_register_script ('cssruleScript', get_stylesheet_directory_uri() . '/greensock/CSSRulePlugin.min.js', array('jquery'), '', true);
wp_enqueue_script ('cssruleScript');
}
add_action( 'wp_enqueue_scripts', 'add_my_gs_css_rule');

//  ----------------   enqueue ScrollMagic for childtheme ----------------

function add_my_scrollmagic () {
wp_register_script ('scrollMagicScript', get_stylesheet_directory_uri() . '/scrollmagic/ScrollMagic.min.js', array(), '', true);
wp_enqueue_script ('scrollMagicScript');
}
add_action( 'wp_enqueue_scripts', 'add_my_scrollmagic');

//  ----------------   enqueue scrollmagic add-indicators plugin for childtheme ----------------


function add_my_indicators () {
wp_register_script ('indicatorsMagicScript', get_stylesheet_directory_uri() . '/scrollmagic/debug.addIndicators.min.js', array(), '', true);
wp_enqueue_script ('indicatorsMagicScript');
}
add_action( 'wp_enqueue_scripts', 'add_my_indicators');

//  ----------------   enqueue gsap for ScrollmMgic plugin ----------------

function add_my_gsapMagic () {
wp_register_script ('gsapMagicScript', get_stylesheet_directory_uri() . '/scrollmagic/animation.gsap.min.js', array(), '', true);
wp_enqueue_script ('gsapMagicScript');
}
add_action( 'wp_enqueue_scripts', 'add_my_gsapMagic');



//   ----------------   ALLOW SVG UPLOADS ---------------

function svg_mime_types( $mimes ) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;}
add_filter( 'upload_mimes', 'svg_mime_types' );  // allows SVG uploads
