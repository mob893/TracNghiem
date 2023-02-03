// Create Question template
/*
    template 
    QuestionJS({
        id: (id của cái div lớn),
        doTrue: (callback khi chọn câu đúng),
        doFasle: (callback khi chọn câu sai),
        doResult: (callback kết quả khi bấm kết thúc) (nếu có),
        questions: [
            (bộ các câu hỏi là 1 object)
            {
                title: tên câu hỏi,
                trueAnswer: đáp án đúng,
                answers: [
                    (bộ các đáp án)
                    vd1,
                    vd2,
                    vd3,
                    vd4
                ]
            },
            (các câu hỏi khác)...
        ]
    })
*/
function QuestionJS(option) {
    let questionSet     = document.createElement('div');
    let questionSetId   = option.id;
    questionSet.id      = questionSetId;
    questionSet.classList.add('set');
    let questions       = [...option.questions];
    let order           = 0;
    
    //console.log(questions);
    // console.log([questionSet]);
    // console.log(questionSet);
    // console.log(typeof questionSet);
    
    //Lặp qua từng question để tạo ra div
    while (questions.length > 0) {
        order++;
        let question = questions.splice(Math.round(Math.random() * (questions.length - 1)), 1)[0];
        let answers = [...question.answers];
        let inHTML = '';
        inHTML += `
        <div class="question" --data-true-answer="${question.trueAnswer}">
        <span class="question__title">Câu ${order}: ${question.title}</span>
        <ol type="A" class="answers">
        `
        while (answers.length > 0 ) {
            inHTML += `<li class="answer">${answers.splice(Math.round(Math.random() * (answers.length - 1)), 1)}</li>` 
        };
        inHTML += `
        </ol> 
        </div>
        `
        
        questionSet.innerHTML += inHTML
    }; 

    //Delete set button  
    let deleteBnt = document.createElement('button');
    deleteBnt.classList.add('deleteBnt');
    deleteBnt.innerText = 'Xong';
    deleteBnt.onclick = function (e) {
        doResult();
        this.parentElement.remove();
    }
    questionSet.appendChild(deleteBnt)

    document.body.appendChild(questionSet);
    questionization(questionSet);
    
    // Question check
    /*
    - tham số vào là selector(hoặc element) của cái question cần thiết
    - cái answer nào có --data-boolean thì là đáp án đúng
    - ifTrue là hàm sẽ thực hiện khi chọn câu đúng
    - ifFalse là hàm sẽ thực hiện khi chọn câu sai
    */
   function qCheck(question) {
       // nếu tham số là element
        answers  = question.querySelectorAll('.answer');
        
        for (var i=0; i < answers.length; i++) {
            //console.log(answers[i].attributes.getNamedItem('--data-boolean'));
        answers[i].onclick = e => {
            let answer = e.target;
            // console.log(answer.innerText);
            // console.log(question.attributes.getNamedItem('--data-true-answer').value);
            if (answer.innerText.trim() == question.attributes.getNamedItem('--data-true-answer').value.trim()){
                if (typeof option.doTrue === 'function') option.doTrue(answer);
            }
            else {
                if (typeof option.doFalse === 'function') option.doFalse(answer);
            };
        };
    };
};


// questionization
/* 
    -Tham số là selector của bộ câu hỏi
*/
function questionization(selector) {
    let exam;
    if (typeof selector === 'string') {
        exam = document.querySelector(selector)
    } else {
        exam = selector;
    };

    // đặt onclick event cho từng câu hỏi
    let questions = exam.querySelectorAll('.question');
    for (var i=0; i < questions.length; i++) {
        qCheck(questions[i]);
    }
}

};
