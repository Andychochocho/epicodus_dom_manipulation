$(function(){
  $("button#cat").click(function() {
    $("ul#user").prepend("<li>meow</li>")
    $("ul#webpage").prepend("<li>woof</li>")
    $("ul#user").after("<li>chirp</li>")
    $("ul#webpage").after("<li>chirp</li>")
  });
  $("button#dog").click(function() {
    $("ul#webpage").prepend("<li>woof</li>")
    $("ul#user").prepend("<li>meow</li>")
    $("ul#webpage").before("<li>moo</li>")
    $("ul#user").before("<li>moo</li>")
  });

});
