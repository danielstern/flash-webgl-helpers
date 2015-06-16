window.onMouseEnterMovieClip = function(mc,callback){
	var inside = false;
	window.addEventListener('mousemove',function mouseDown(e) {
		var clickedAt = new flwebgl.geom.Point(e.pageX, e.pageY);
		var bounds = mc.getBounds(player.getStage());
		if (isPointInsideRect(clickedAt,bounds) && !inside){
			callback(e);
			inside = true;
		};
		
		if (!isPointInsideRect(clickedAt,bounds)) {
			inside = false;
		};
	});
};

window.onMouseExitMovieClip = function (mc,callback){
	var inside = false;
	window.addEventListener('mousemove',function mouseDown(e) {
		var clickedAt = new flwebgl.geom.Point(e.pageX, e.pageY);
		var bounds = mc.getBounds(player.getStage());
		if (isPointInsideRect(clickedAt,bounds) && !inside){
			inside = true;
		};
		
		if (!isPointInsideRect(clickedAt,bounds) && inside) {
			callback(e);
			inside = false;
		};
	});
};

window. addListener = function(type,mc,callback){
	window.addEventListener(type,function mouseDown(e) {
		var clickedAt = new flwebgl.geom.Point(e.pageX, e.pageY);
		var bounds = mc.getBounds(player.getStage());
		if (isPointInsideRect(clickedAt,bounds)){
			callback(e);
		}
	});
};

window. isPointInsideRect = function(point, rect) {
  if (point.x > rect.left && point.x < (rect.left + rect.width)) {
    if (point.y > rect.top && point.y < (rect.top + rect.height)) {
      return true;
    }
  }

  return false;
}

window.setOpacity = function(mc,opacity){
		var transform = startButton.getLocalColorTransform();
		transform.setAlphaMultiplier(opacity);
		startButton.setLocalColorTransform(transform);
}
