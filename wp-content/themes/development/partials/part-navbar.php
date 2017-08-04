<div class="go-navbar">
	<div class="inner">
		<div class="logo">
			<?php the_custom_logo(); ?>
		</div>

		<?php
		wp_nav_menu( array( 
			'theme_location' => 'navbar-menu', 
			'container_class' => 'wp_float_right' ) ); 
			?>

		</div>
	</div>

