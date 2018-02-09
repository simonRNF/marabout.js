**********README PLUGIN MARABOUT.JS**********


==========BG_blur.js==========
...files required :
......include BG_blur.js and BG_blur.css in your html file
......jquery plugin :
......<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
.
.
...HTML integration :
......add class="BG_blur_append" to the box you want to apply the BG blur
......WARNING: the plugin generate an absolute box after your target, be aware of your target's parent position
.
.
.
...Function call syntax :
......BG_blur_func(percent per cycle, time interval, array of items (1 color = 1 item), wallpaper color of the blur div, size of items (px), blur value (px))
......Example :
......BG_blur_func(incrementation=1, interval=40, BG_blur_array=["#85ef3c","#60b129","#85ef3c","#60b129","#85ef3c","#85ef3c","#85ef3c"], BG_wallpaper_color="#00ffd0", items_size_px=200, blur_value_px=50);
==========end BG_blur.js==========
