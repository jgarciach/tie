var article, timeEstimation, wordCount, words, wordsPerMinute, timeInvestmentSpan;

wordsPerMinute = 200;
timeInvestmentSpan = '<span style="color: #666;font-size: 19px;">Time Investment: <strong> ~ <span id="time-estimation"></span> minutes</strong></span>'

$('#content').bind('DOMNodeInserted', function() {
  if ($(".text_body").length != 0) {
    $('#content').unbind('DOMNodeInserted');
    $('.text_body').bind('DOMNodeInserted', function() {
      article = $(".text_body").text();

      words = article.split(" ");

      wordCount = words.length;

      timeEstimation = Math.ceil(wordCount / wordsPerMinute);

      if ($('#time-estimation').length == 0){
        $(".reader_head h1").after(timeInvestmentSpan);
      }

      $('#time-estimation').html(timeEstimation);
    });
  }
});
