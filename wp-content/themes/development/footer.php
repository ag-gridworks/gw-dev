<?php wp_footer() ?>

<!-- analytics -->
<?php $ua = 'YOUR_UA' ?>
<?php $domain = 'YOUR_DOMAIN' ?>

<script>
	(function(f,i,r,e,s,h,l){i['GoogleAnalyticsObject']=s;f[s]=f[s]||function(){
		(f[s].q=f[s].q||[]).push(arguments)},f[s].l=1*new Date();h=i.createElement(r),
		l=i.getElementsByTagName(r)[0];h.async=1;h.src=e;l.parentNode.insertBefore(h,l)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', '<?php echo "$ua"; ?>', '<?php echo "$domain"; ?>');
	ga('send', 'pageview');
</script>

</body>
</html>

