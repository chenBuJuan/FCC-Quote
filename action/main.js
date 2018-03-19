$(document).ready(function() {
    var body = $("body");
    var container = $("#container");
    var twitterBtn = $("#twitterBtn");
    var sinaBtn = $("#sinaBtn");
    var newBtn = $("#newBtn");
    var quote = $("#quote");
    var author = $("#author");

    var colors = [
        "#e74c3c", "#342224", "#27ae60",
        "#f39c12", "#77b1a9", "#16a085", 
    ];
    var colorIndex = 0;

    newBtn.click(function(){
        $.ajax({
            type: "get", 
            url: "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp", 
            jsonp: 'jsonp',
            dataType: 'jsonp',
            success: function(result){
                var color = colors[colorIndex % colors.length];

                quote.text(result.quoteText);
                author.text(result.quoteAuthor);

                body.css("backgroundColor", color);
                container.css("color", color);
                $.each($("#buttonWrapper>button"), function(key, value){
                    $(value).css("backgroundColor", color);
                });

                colorIndex++;
            }
        }); 
    });

    twitterBtn.click(function(){
        window.open('http://twitter.com/intent/tweet?text=' + quote.text() + ' - ' + author.text());
    });
    sinaBtn.click(function(){
        window.open('http://v.t.sina.com.cn/share/share.php?title=' + quote.text() + ' - ' + author.text());
    });

    newBtn.trigger("click");
});