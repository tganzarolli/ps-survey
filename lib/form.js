const QUESTIONS = 
[
    {id:1, text:"Making mistakes on this organization is often viewed negatively. *"},
    {id:2, text:"Members of this team are able to bring up problems and tough issues. *"},
    {id:3, text:"People on this team are not accepting of others' differences. *"},
    {id:4, text:"It is safe to take a risk on this team. *"},
    {id:5, text:"It is difficult to ask other members of this team for help. *"},
    {id:6, text:"No one on this team would deliberately act in a way that disrupts my efforts. *"},
    {id:6, text:"Working with members of this team, my unique skills and talents are valued and utilized. *"},
];

function warmup() {
    var i = 0;
        QUESTIONS.reverse().forEach(function(question) {
            var newElement = $('.ps-template').last().clone(true);
            newElement.addClass('ps-added');
            newElement.find(".question").first().html(question.text)
            newElement.find(".answer").attr('name', 'question-' + question.id);
            $('#ps-fieldset').prepend(newElement);
            if (i % 2 == 0 ) {
                newElement.find('.container2').first().addClass('ps-even');
            } else {
                newElement.find('.container2').first().addClass('ps-odd');
            };
            i++;
        });
        $('.ps-template').last().remove();
        $('.ps-added').toggle();
};
