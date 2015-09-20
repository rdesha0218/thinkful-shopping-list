$(document).ready(function() {
    $('button').click(function() {
    	var toAdd = $('input[name=list_item]').val();
    	$('.list').append('<div class="item">' + toAdd + '</div>');
    });
    $(document).on('click', '.item', function() {
    	$(this).remove();
    });
});

/*
$(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });
    $(document).on('click', '.item', function() {
        $(this).remove();
    });
});

<body>
		<h2>To Do</h2>
		<form name="checkListForm">
			<input type="text" name="checkListItem"/>
		</form>
		<div id="button">Add!</div>
		<br/>
		<div class="list"></div>
	</body>
	*/