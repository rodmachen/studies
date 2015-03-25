var main = function () {
    "use strict";

    var toDos = [
        "Finish writing this book",
        "Take Gracie to the park",
        "Answer emails",
        "Prep for Monday's class",
        "Make up some new ToDos",
        "Get Groceries"
    ];

	$(".tabs a span").toArray().forEach(function (element) {
		$(element).on("click", function () {
			var $element = $(element),
								$content,
                $input,
                $button,
                i;

        $(".tabs a span").removeClass("active");
        $element.addClass("active");
        $("main .content").empty();

        if ($element.parent().is(":nth-child(1)")) {
        	$content = $("<ul>");
        	for (var i = (toDos.length - 1); i >= 0; i -= 1) {
		        $content.append($("<li>").text(toDos[i]));
        	}

        } else if ($element.parent().is(":nth-child(2)")) {
					$content = $("<ul>");
					toDos.forEach(function (todo) {
	            $content.append($("<li>").text(todo));
	        });
        } else if ($element.parent().is(":nth-child(3)")) {
                $input = $("<input>"),
                $button = $('<button class="button tiny radius">').text("+");

                function addInput() {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                  }
                $button.on("click", function () {
                	addInput()
                });

                $input.on("keypress", function () {
									if (event.keyCode === 13) {
										addInput()
                  }
                });

                $content = $("<div>").append($input).append($button);
        }
        $("main .content").append($content);

				return false;
			});
			$(".tabs a:first-child span").trigger("click");
		});
	}


$(document).ready(main);
