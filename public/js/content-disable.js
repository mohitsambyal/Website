
//Disable cut copy paste
$(document).ready(function () {
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });
    //Disable mouse right click Inspect
    $("body").on("contextmenu",function(e){
        return false;
    });
});
 $('body').on('dragstart drop', function(e){
    e.preventDefault();
    return false;
});
//Disable Source Code//
$(document).ready(function() {
    document.onkeydown = function(e){
        if (e.ctrlKey &&
            (e.keyCode === 67 ||
                e.keyCode === 86 ||
                e.keyCode === 85 ||
                e.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
    };
});
//Disable Dev Key//
window.oncontextmenu = function () {
				return false;
			}
			$(document).keydown(function (event) {
				if (event.keyCode == 123) {
					return false;
				}
				else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
					return false;
				}
			});
//Disable Cntrl+S Key	//		
			
			document.body.addEventListener('keydown', event => {
  if (event.ctrlKey && 'cvxspwuaz'.indexOf(event.key) !== -1) {
    event.preventDefault()
  }
});
