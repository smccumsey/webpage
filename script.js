//var droppables = $("#outlet > g");
//var overlapThreshold = "10%";

/*
droppables.addEventListener("dragend", function(){
  alert('a');
});
*/

function onDrop(dragged, dropped) {
  //TweenMax.fromTo(dropped, 0.1, {opacity:1}, {opacity:0, repeat:3, yoyo:true});
  //dropped.addClass("highlight");
  //console.log(dropped);
  //$('#bulb').addClass("highlight");
  
}

Draggable.create(droppables, {
  bounds:{minX:-47, maxX:0},
  type:"x",
  lockAxis:true,
  onDragEnd:function(e) {
		var i = droppables.length;
    
		while (--i > -1) {
			if (this.hitTest(droppables[i], overlapThreshold)) {
				onDrop(this.target, droppables[i]);
        $('#bulb').addClass("highlight");
        //$('#path_x5F_inner_1_').addClass('glow');
        $('#path_inner').addClass('glow');
			}
		}
	},
  onDrag: function(e) {
    var i = droppables.length;
		 while (--i > -1) {
       if (this.hitTest(droppables[i], overlapThreshold)) {
         $('#bulb').addClass("highlight");
         $('#path_inner').addClass('glow');
         //$(droppables[i]).addClass("highlight");
       } else {
         $('#bulb').removeClass("highlight");
         $('#path_inner').removeClass('glow');
         //$(droppables[i]).removeClass("highlight");
       }
       
       
    }
  }
  /*
  onDrag: function(e) {
    var i = droppables.length;
		 while (--i > -1) {
       if (this.hitTest(droppables[i], overlapThreshold)) {
         $(droppables[i]).addClass("highlight");
       } else {
         $(droppables[i]).removeClass("highlight");
       }
       
       
    }
  },
  onDragEnd:function(e) {
		var i = droppables.length;
		while (--i > -1) {
			if (this.hitTest(droppables[i], overlapThreshold)) {
				onDrop(this.target, droppables[i]);
			}
		}
	}
*/
});
