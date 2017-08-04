<?php 
$args = array(
'post_type' => 'slider',
'posts_per_page' => -1
);
?>

<?php $the_query = new WP_Query( $args ); ?>

<?php if ( $the_query->have_posts() ) : ?>
	<div class="owl-carousel owl-slider go-slider">
	<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

		<div class="item">
		<div class="go-slider-item" 
		style="
		background: url('<?php the_field('slider_image') ?>');
		opacity: <?php if(!(get_field('html_text'))): echo "1"; endif ?>
		">
		</div>
		
			<div class="inner">
				<?php if(get_field('html_text')): ?>
				<div class="title">
					<?php the_field('slider_title') ?>
				</div>

				<div class="text">
					<?php the_field('slider_text') ?>
				</div>
				<?php endif ?>
			</div>

		</div>
	<?php endwhile; ?>
	</div>
<?php endif; ?>