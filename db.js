let tinHoc20 = {
    id: 'TinHoc20',
    totalQ: 20,
    clicked: 0,
    trueAns: 0,
    fullfilled: function () {
        if (this.clicked == this.totalQ) {
            alert(`True: ${this.trueAns}/${this.totalQ}`);
        }
    },
    doTrue: function (target) {
        //count 
        this.clicked++;
        this.trueAns++;
        this.fullfilled();

        target.classList.add('true');
        target.onclick = function() {};

        // disable onclick for each answer
        let siblings = target.parentElement.children;
        for (var i=0; i<siblings.length; i++) {
            siblings[i].onclick = function () {};
        }
    },
    doFalse: function (target) {
        //count
        this.clicked++;
        this.fullfilled();

        let trueAnswer = target.parentElement.parentElement.attributes.getNamedItem('--data-true-answer').value;
        let siblings = target.parentElement.children;
        target.classList.add('false');
        for (var i=0; i<siblings.length; i++) {
            // disable onclick
            siblings[i].onclick = function () {};
            // find the trua answer
            if (siblings[i].innerHTML.trim() == trueAnswer.trim()) {
                    siblings[i].classList.add('true');
            };
        }
    },
    questions: [
        {
            title: 'Hãy chọn phương án ghép phù hợp nhất. Ngôn ngữ lập trình là gì :',
            trueAnswer:  'phương tiện diễn đạt thuật toán để máy tính thực hiện công việc;',
            answers: [
                'phương tiện để soạn thảo văn bản trong đó có chương trình',
                'ngôn ngữ Pascal hoặc C;',
                'phương tiện diễn đạt thuật toán để máy tính thực hiện công việc;',
                'phương tiện diễn đạt thuật toán;'
    
            ]

        },
        {
            title: 'Phát biểu nào dưới đây chắc chắn sai ?',
            trueAnswer: 'Lập trình và chương trình là hai khái niệm tương đương, đều là cách mô tả thuật toán bằng ngôn ngữ lập trình;',
            answers: [
                'Lập trình là viết chương trình',
                'Lập trình và chương trình là hai khái niệm tương đương, đều là cách mô tả thuật toán bằng ngôn ngữ lập trình;',
                'Chương trình được tạo thành từ tổ hợp các câu lệnh và các khai báo cần thiết về biến, hằng, hàm, ... ;',
                'Chương trình chưa chắc là đã đúng nếu cho kết quả đúng với rất nhiều bộ dữ liệu vào;'
    
            ]

        },
        {
            title: 'Phát biểu nào sau đây là sai ?',
            trueAnswer: 'Mọi bài toán đều có thể giải được bằng máy tính',
            answers: [
                'Mọi bài toán đều có thể giải được bằng máy tính',
                'Chương trình là một mô tả thuật toán bằng một ngôn ngữ lập trình;',
                'Không thể viết được chương trình để giải một bài toán nếu như không biết thuật toán để giải bài toán đó;',
                'Một bài toán có thể có nhiều thuật toán để giải;'
    
            ]

        },
        {
            title: 'Phát biểu nào sau đây chắc chắn sai ?',
            trueAnswer:   'Mọi người sử dụng máy tính đều phải biết lập chương trình;',
            answers: [
                'Để giải bài toán bằng máy tính phải viết chương trình mô tả thuật toán giải bài toán đó',
                'Mọi người sử dụng máy tính đều phải biết lập chương trình;',
                'Máy tính điện tử có thể chạy các chương trình;',
                'Một bài toán có thể có nhiều thuật toán để giải;'
    
            ]

        },
        {
            title: 'Hãy chọn phương án ghép đúng. Ngôn ngữ lập trình là ngôn ngữ',
            trueAnswer:  'diễn đạt thuật toán để có thể giao cho máy tính thực hiện;',
            answers: [
                'cho phép thể hiện các dữ liệu trong bài toán mà các chương trình sẽ phải xử lí dưới dạng nhị phân để máy tính có thể thực hiện trực tiếp',
                'diễn đạt thuật toán để có thể giao cho máy tính thực hiện;',
                'có tên là “ngôn ngữ thuật toán” hay còn gọi là “ngôn ngữ lập',
                'trình bậc cao” gần với ngôn ngữ toán học cho phép mô tả cách giải quyết vấn đề độc lập với máy tính;'
    
            ]

        },
        {
            title: 'Hãy chọn phương án ghép đúng. Ngôn ngữ máy là',
            trueAnswer: 'ngôn ngữ để viết các chương trình mà mỗi chương trình là một dãy lệnh máy trong hệ nhị phân;',
            answers: [
                'bất cứ ngôn ngữ lập trình nào mà có thể diễn đạt thuật toán để giao cho máy tính thực hiệ',
                'ngôn ngữ để viết các chương trình mà mỗi chương trình là một dãy lệnh máy trong hệ nhị phân;',
                'các ngôn ngữ mà chương trình viết trên chúng sau khi dịch ra hệ nhị phân thì máy có thể chạy được;',
                'diễn đạt thuật toán để có thể giao cho máy tính thực hiện;'
    
            ]

        },
        {
            title: 'Hãy chọn phương án ghép đúng. Hợp ngữ là ngôn ngữ',
            trueAnswer: 'có các lệnh được viết bằng kí tự nhưng về cơ bản mỗi lệnh tương đương với một lệnh máy. Để chạy được cần dịch ra ngôn ngữ máy;',
            answers: [
                'mà máy tính có thể thực hiện được trực tiếp không cần dịch',
                'có các lệnh được viết bằng kí tự nhưng về cơ bản mỗi lệnh tương đương với một lệnh máy. Để chạy được cần dịch ra ngôn ngữ máy;',
                'mà các lệnh không viết trực tiếp bằng mã nhị phân ;',
                'không viết bằng mã nhị phân, được thiết kế cho một số loại máy có thể chạy trực tiếp dưới dạng kí tự.'
    
            ]

        },
        {
            title: 'Hãy chọn phương án ghép sai. Ngôn ngữ lập trình bậc cao là ngôn ngữ',
            trueAnswer: 'sử dụng từ vựng và cú pháp của ngôn ngữ tự nhiên (tiếng Anh);',
            answers: [
                'thể hiện thuật toán theo những quy ước nào đó không phụ thuộc vào các máy tính cụ thể',
                'mà máy tính không hiểu trực tiếp được, chương trình viết trên ngôn ngữ bậc cao trước khi chạy phải dịch sang ngôn ngữ máy;',
                'có thể diễn đạt được mọi thuật toán;',
                'sử dụng từ vựng và cú pháp của ngôn ngữ tự nhiên (tiếng Anh);'
    
            ]

        },
        {
            title: 'Phát biểu nào dưới đây là sai ?',
            trueAnswer: 'Chương trình dịch cho phép chuyển chương trình viết bằng một ngôn ngữ lập trình nào đó sang chương trình trên ngôn ngữ máy để máy có thể thực hiện được mà vẫn bảo toàn được ngữ nghĩa của chương trình nguồn',
            answers: [
                'Chương trình dịch cho phép chuyển chương trình viết bằng một ngôn ngữ lập trình nào đó sang chương trình trên ngôn ngữ máy để máy có thể thực hiện được mà vẫn bảo toàn được ngữ nghĩa của chương trình nguồn',
                'Chương trình dịch giúp người lập trình có thể lập trình trên một ngôn ngữ lập trình gần với ngôn ngữ tự nhiên hơn, do đó giảm nhẹ được nỗ lực lập trình, tăng cường hiệu suất lập trình;',
                'Chương trình dịch giúp tìm ra tất cả các lỗi của chương trình;',
                'Một ngôn ngữ lập trình có thể có cả chương trình thông dịch và chương trình biên dịch;'
    
            ]

        },
        {
            title: 'Phát biểu nào dưới đây là sai khi nói về biên dịch và thông dịch ?',
            trueAnswer:  'Chương trình dịch của ngôn ngữ lập trình bậc cao gọi là biên dịch còn thông dịch là chương trình dịch dùng với hợp ngữ',
            answers: [
                'Chương trình dịch của ngôn ngữ lập trình bậc cao gọi là biên dịch còn thông dịch là chương trình dịch dùng với hợp ngữ',
                'Một ngôn ngữ lập trình có thể có cả chương trình thông dịch và chương trình biên dịch;',
                'Thông dịch lần lượt dịch và thực hiện từng câu lệnh còn biên dịch phải dịch trước toàn bộ chương trình sang mã nhị phân thì mới có thể thực hiện được;',
                'Biên dịch và thông dịch đều kiểm tra tính đúng đắn của câu lệnh;'
    
            ]

        },
        {
            title: 'Phát biểu nào dưới đây là đúng ?',
            trueAnswer: 'Một ngôn ngữ lập trình bậc cao có thể có nhiều chương trình dịch khác nhau;',
            answers: [
                'Mỗi ngôn ngữ lập trình bậc cao đều có đúng một chương trình dịch',
                'Chương trình dịch gồm hợp dịch, thông dịch, biên dịch;',
                'Máy tính chỉ nhận biết được kí tự 0 và kí tự 1 nên chương trình bằng ngôn ngữ máy cũng phải được dịch sang mã nhị phân;',
                'Một ngôn ngữ lập trình bậc cao có thể có nhiều chương trình dịch khác nhau;'
    
            ]

        },
        {
            title: 'Phát biểu nào dưới đây là đúng ?',
            trueAnswer:  'Cú pháp của một ngôn ngữ lập trình là bộ quy tắc cho phép người lập trình viết chương trình trên ngôn ngữ đó;',
            answers: [
                'Ngữ nghĩa trong ngôn ngữ lập trình phụ thuộc nhiều vào ý muốn của người lập trình tạo ra',
                'Mỗi ngôn ngữ lập trình đều có 3 thành phần là bảng chữ cái, cú pháp và ngữ nghĩa, nên việc khai báo kiểu dữ liệu, hằng, biến,... được áp dụng chung như nhau cho mọi ngôn ngữ lập trình;',
                'Cú pháp của một ngôn ngữ lập trình là bộ quy tắc cho phép người lập trình viết chương trình trên ngôn ngữ đó;',
                'Các ngôn ngữ lập trình đều có chung một bộ chữ cái;'
    
            ]

        },
        {
            title: 'Phát biểu nào dưới đây là đúng ?',
            trueAnswer:  'Cú pháp là bộ quy tắc dùng để chương trình;',
            answers: [
                'Ngoài bảng chữ cái, cú pháp, ngữ nghĩa, một ngôn ngữ lập trình còn có các quy tắc để khai báo biến, hằng,...',
                'Ngoài bảng chữ cái, có thể dùng các kí tự thông dụng trong toán học để viết chương trình;',
                'Chương trình có lỗi cú pháp có thể được dịch ra ngôn ngữ máy nhưng không thực hiện được;',
                'Cú pháp là bộ quy tắc dùng để chương trình;'
    
            ]

        },
        {
            title: 'Chọn ý kiến đúng trong các ý kiến sau đây:',
            trueAnswer: 'Chương trình cho kết quả sai khi thực hiện 1 test thì chương trình đó sai;',
            answers: [
                'Chương trình cho kết quả đúng khi thực hiện đủ 20 test / 20 test thì chương trìn đó đúng',
                'Chương trình cho kết quả sai khi thực hiện 1 test thì chương trình đó sai;',
                'Bộ test với kích thước dữ liệu lớn có nhiều khả năng phát hiện lỗi sai của chương trình hơn là các bộ test với kích thước dữ liệu nhỏ;',
                'Khi dịch chương trình không thấy lỗi thì có thể kết luận chương trình là đúng.'
    
            ]

        },
        {
            title: 'Phát biểu nào dưới đây là đúng?',
            trueAnswer:  'Biến là đại lượng được đặt tên và có giá trị thay đổi trong quá trình thực hiện chương trình.',
            answers: [
                'Biến là đại lượng nhận giá trị trước khi chương trình thực hiện',
                'Biến là đại lượng được đặt tên và có giá trị thay đổi trong quá trình thực hiện chương trình.',
                'Biến có thể lưu trữ nhiều loại giá trị khác nhau.',
                'Biến có thể đặt hoặc không đặt tên gọi.'
    
            ]

        },
        {
            title: 'Phát biểu nào dưới đây là hợp lí nhất ?',
            trueAnswer:  'Biến dùng trong chương trình phải khai báo',
            answers: [
                'Biến dùng trong chương trình phải khai báo',
                'Biến được chương trình dịch bỏ qua.',
                'Biến có thể lưu trữ nhiều loại giá trị khác nhau.',
                'Biến là đại lượng nhận giá trị trước khi chương trình thực hiện.'
    
            ]

        },
        {
            title: 'Phát biểu nào dưới đây là đúng ?',
            trueAnswer: 'Hằng là đại lượng nhận giá trị trước khi chương trình thực hiện',
            answers: [
                'Hằng là đại lượng nhận giá trị trước khi chương trình thực hiện',
                'Hằng là đại lượng được đặt tên và có giá trị thay đổi trong quá trình thực hiện chương trình',
                'Hằng có thể lưu trữ nhiều loại giá trị khác nhau.',
                'Hằng được chương trình dịch bỏ qua.'
    
            ]

        },
        {
            title: 'Phát biểu nào dưới đây là đúng?',
            trueAnswer:   'Tên gọi do người lập trình tự đặt theo quy tắc do từng ngôn ngữ lập trình xác định.',
            answers: [
                'Tên gọi là đại lượng nhận giá trị trước khi chương trình thực hiện',
                'Tên gọi là đại lượng được đặt tên và có giá trị thay đổi trong quá trình thực hiện chương trình.',
                'Tên gọi có thể lưu trữ nhiều loại giá trị khác nhau.',
                'Tên gọi do người lập trình tự đặt theo quy tắc do từng ngôn ngữ lập trình xác định.'
    
            ]

        },
        {
            title: 'Hãy chọn biểu diễn hằng đúng trong các biểu diễn sau :',
            trueAnswer:  '1024',
            answers: [
                'Begi',
                '58,5',
                '\'65 ',
                '1024'
    
            ]

        },
        {
            title: 'Hãy chọn biểu diễn tên đúng trong những biểu diễn sau',
            trueAnswer: 'Tensai',
            answers: [
                '\'*****\'',
                '-tenkhongsai',
                '(bai_tap)',
                'Tensai'
    
            ]

        },
    ]
}

