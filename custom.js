$(document).ready(function(e) {
    var len = $('.belt h5').length,
		  belt = $('.belt'),
			prev = $('.shprevarrow'),
			next = $('.shnextarrow'),
			leftPrev = '+=960',
			leftNext = '-=960', 
			leftWidth = '-=960',
			rightWidth = '+=960',
			slide_list = new Array();
	slide_list[2] = "<h2>Heading1</h2><p>this is decription1</p>"
	slide_list[3] = "<h2>Heading2</h2><p>this is decription2</p>"
	slide_list[4] = "<h2>Heading3</h2><p>this is decription3</p>"
	slide_list[5] = "<h2>Heading4</h2><p>this is decription4</p>"
	slide_list[6] = "<h2>Heading5</h2><p>this is decription5</p>"
	slide_list[7] = "<h2>Heading6</h2><p>this is decription6</p>"
	slide_list[8] = "<h2>Heading7</h2><p>this is decription7</p>"
	slide_list[9] = "<h2>Heading8</h2><p>this is decription8</p>"
	
		prev.css('opacity', '0.5');
		belt.width(((960*len)+10));
		counter = 1;
		counter2 = 1;
     $('.slider-desc').html(slide_list[2])
        prev.click(function(){
			if (counter == 1)
				{$(this).css('opacity', '0.5');	}
				else 
				{
					belt.animate({
					left : leftPrev,
					width : leftWidth
					});	
					counter -=1;
					next.css('opacity', '1');
					$('.slider-desc').html(slide_list[counter+1])
				}
			});
			
		 next.click(function(){
				if (counter == len)
				{$(this).css('opacity', '0.5');}
				else
				{
					belt.animate({
					left : leftNext,
					width : rightWidth
					});
					counter +=1;
					prev.css('opacity', '1');
					$('.slider-desc').html(slide_list[counter+1])
				}
			});
			
});
