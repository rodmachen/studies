var main = function (toDoObjects) {
    "use strict";

    var toDos = toDoObjects.map(function (toDo) {
          // we'll just return the description
          // of this toDoObject
          return toDo.description;
    });
var organizeByTags = function (toDoObjects) {
    var tags = [];

    // iterate over all toDos
    toDoObjects.forEach(function (toDo) {

        // iterate over each tag in this toDo
        toDo.tags.forEach(function (tag) {

            // make sure the tag is not already
            // in the tag array
            if (tags.indexOf(tag) === -1) {
                tags.push(tag);
            }
        });
    });

    console.log(tags);

    var tagObjects = tags.map(function (tag) {
        // here we find all the to-do objects
        // that contain that tag
        var toDosWithTag = [];
        toDoObjects.forEach(function (toDo) {

            // check to make sure the result
            // of indexOf is *not* equal to -1
            if (toDo.tags.indexOf(tag) !== -1) {
                toDosWithTag.push(toDo.description);
            }
        });

        // we map each tag to an object that
        // contains the name of the tag and an array
        return { "name": tag, "toDos": toDosWithTag };
    });
    console.log(tagObjects);
};
	$(".tabs a span").toArray().forEach(function (element) {
		$(element).on("click", function () {
			var $element = $(element),
                $content,
                $input,
                $inputLabel,
                $inputTag,
                $inputTagLabel,
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
            console.log("the tags tab was clicked!");

            var organizedByTag = [
                {
                    "name": "shopping",
                    "toDos": ["Get groceries"]
                },

                {
                    "name": "chores",
                    "toDos": ["Get groceries", "Take Gracie to the park"]
                },

                {
                    "name": "writing",
                    "toDos": ["Make up some new ToDos", "Finish writing this book"]
                },

                {
                    "name": "work",
                    "toDos": ["Make up some new ToDos", "Prep for Monday's class",
                              "Answer emails", "Finish writing this book"]
                },

                {
                    "name": "teaching",
                    "toDos": ["Prep for Monday's class"]
                },

                {
                    "name": "pets",
                    "toDos": ["Take Gracie to the park"]
                }
            ];

            organizedByTag.forEach(function (tag) {
                    var $tagName = $("<h3>").text(tag.name),
                        $content = $("<ul>");


                    tag.toDos.forEach(function (description) {
                        var $li = $("<li>").text(description);
                        $content.append($li);
                    });

                    $("main .content").append($tagName);
                    $("main .content").append($content);
                });

        } else if ($element.parent().is(":nth-child(4)")) {
                $input = $("<input>").addClass("description"),
                $inputLabel = $("<p>").text("Description: "),
                $inputTag = $("<input>").addClass("tags"),
                $inputTagLabel = $("<p>").text("Tags: "),
                $button = $('<button class="button tiny radius">').text("+");

                $button.on("click", function () {
                    var description = $input.val(),
                        tags = $inputTag.val().split(","); // split on the comma

                    toDoObjects.push({"description":description, "tags":tags});

                    // update toDos
                    toDos = toDoObjects.map(function (toDo) {
                          return toDo.description;
                    });

                    $input.val("");
                    $inputTag.val("");
                });
                $content = $("<div>").append($inputLabel)
                                    .append($input)
                                    .append("<p>")
                                    .append($inputTagLabel)
                                    .append($inputTag)
                                    .append($button);
        }
        $("main .content").append($content);

				return false;
			});
			$(".tabs a:first-child span").trigger("click");
		});
	}


$(document).ready(function () {
    $.getJSON("todos.json", function (toDoObjects) {
        // call main with the to-dos as an argument
        main(toDoObjects);
    });
});