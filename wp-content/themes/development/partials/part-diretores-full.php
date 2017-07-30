
<?php
// the query
$args = array(
	'post_type' => 'diretores',
	'posts_per_page' => -1
	);
$the_query = new WP_Query( $args );
if ( $the_query->have_posts() ) : ?>
	
		<div class="owl-carousel owl-diretores">
			<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

				<?php if( have_rows('projetos') ): ?>

					<?php while ( have_rows('projetos') ) : the_row(); ?>
						<?php $img = get_sub_field('imagem_do_projeto'); ?>

						<div
						class="owl-slide" 
						style="
						background: url('<?php echo $img['url']; ?>') no-repeat;
						-webkit-background-size: cover;
						background-size: cover;
						background-position: center;
						">
  						
  						<div class="owl--text">
   						<div class="item-title"><?php the_title(); ?></div>
						<div class="item-sub"><?php the_sub_field('nome_do_projeto'); ?></div>
   						</div>
 						
 						</div>
						
					<?php endwhile; ?>

				<?php endif; ?>

		<?php endwhile ?><?php wp_reset_postdata(); ?>
	</div>

<?php endif ?>