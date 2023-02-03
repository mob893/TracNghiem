let trueAns = 0;
let clicked = 0;
let totalQ  = 20;

let doTrue = function (target) {
    //count 
    clicked++;
    trueAns++;

    target.classList.add('true');
    target.onclick = function() {};

    // disable onclick for each answer
    let siblings = target.parentElement.children;
    for (var i=0; i<siblings.length; i++) {
        siblings[i].onclick = function () {};
    }
};

let doFalse = function (target) {
    //count
    clicked++;

    let trueAnswer = target.parentElement.parentElement.attributes.getNamedItem('--data-true-answer').value;
    // console.log(trueAnswer);
    let siblings = target.parentElement.children;
    target.classList.add('false');
    for (var i=0; i<siblings.length; i++) {
        // disable onclick
        siblings[i].onclick = function () {};
        // find the trua answer
        if (siblings[i].innerText.trim() == trueAnswer.trim()) {
                siblings[i].classList.add('true');
        };
    }
};

let doResult = function () {
        alert(`True: ${trueAns}/${totalQ}`);
        clicked = 0;
        trueAns = 0;
};



const tinHoc40 = {
    id: 'TinHoc40',
    totalQ: 20,
    doResult: doResult,
    doTrue: doTrue,
    doFalse: doFalse,
    questions: [
        {title:'Phát biểu nào sau đây là đúng ?',
        trueAnswer: 'Mảng một chiều là một dãy hữu hạn các phần tử cùng kiểu dữ liệu.',
        answers: [ 
        'Mảng một chiều là một dãy hữu hạn các số nguyên.',
        'Mảng một chiều là một dãy hữu hạn các phần tử cùng kiểu dữ liệu.',
        'Có thể dùng bất cứ một kiểu dữ liệu chuẩn nào để đánh chỉ số cho các phần tử của mảng một chiều.',
        'Khi xây dựng kiểu mảng một chiều, người lập trình không cần khai báo kiểu dữ liệu của phần tử của mảng.',
        ]},
        {title:'Phát biểu nào sau đây là sai ?',
        trueAnswer: 'Với khai báo xây dựng kiểu mảng một chiều, không thể biết được mảng chứa tối đa bao nhiêu phần tử.',
        answers: [ 
        'Mỗi phần tử của mảng một chiều đều được đánh chỉ số, được chỉ định nhờ chỉ số tương ứng của nó.',
        'Với khai báo xây dựng kiểu mảng một chiều, không thể biết được mảng chứa tối đa bao nhiêu phần tử.',
        'Trong khai báo xây dựng kiểu mảng một chiều, có thể biết được cách đánh chỉ số cho các phần tử của mảng.',
        'Chỉ số được đánh tuần tự, liên tiếp cho các phần tử kề nhau của mảng một chiều, từ phần tử đầu tiên cho đến phần tử cuối.',
        ]},
        {title:'Phát biểu nào dưới đây là sai ?',
        trueAnswer: 'Các phép toán thao tác với xâu tương tự như các phép toán thao tác với mảng.',
        answers: [ 
        'Xâu là một dãy các kí tự trong bảng mã ASCII. Kiểu xâu là một kiểu dữ liệu có cấu trúc.',
        'Có thể xem mỗi xâu có cấu trúc giống như một mảng một chiều mà mỗi phần tử của mảng là một kí tự trong bảng mã ASCII, được đánh chỉ số từ 1.',
        'Số lượng kí tự trong một xâu chính là độ dài của xâu.',
        'Các phép toán thao tác với xâu tương tự như các phép toán thao tác với mảng.',
        ]},
        {title:'Biểu thức quan hệ nào dưới đây cho giá trị TRUE ?',
        trueAnswer: 
        '“MOOR” < “MOORK”;',
        answers: [ 
            '“MOOR” < “LOOK”;',
            '“MATHEMATIC” <  “LOOK”;',
            '“AB123CD” < “ ”;',
            '“MOOR” < “MOORK”;',
        ]},
        {title:'Biểu thức quan hệ nào dưới đây cho giá trị FALSE ?',
        trueAnswer: 
        '“MOOR” < “LOOK”;',
        answers: [ 
            '“MOOR” < “LOOK”;',
        '“MOOR” < “MOORK”;',
        '“AB123CD” < “ABCDAB”;',
        '“ABCDOR” < “ABDOR”;',
        ]},
        {title:'Trong ngôn ngữ lập trình Pascal, trong quá trình nhập dữ liệu của mảng một chiều A, để các phần tử hiển thị như trong cửa sổ chương trình ta viết lệnh như sau:',
        trueAnswer: 
        'Write(‘ A[ ’ , i , ‘ ]= ’); readln(A[i]);',
        answers: [ 
        'Write(‘ A[ ’ , i , ‘ ]= ’); readln(A[i]);',
        'Write(‘ A[ i ]= ’); readln(A[i]);',
        'Write(‘ A[ ’ i ‘ ]= ’); readln(A[i]);',
        'Write(“ A[ ” , i ,“ ]= ”); readln(A[i]);',
        ]},
        {title:`Trong ngôn ngữ lập trình Pascal, đoạn chương trình sau thực hiện việc nào trong các việc sau (A là mảng số có N phần tử) ?
         S:=0;
         For i:=1 to N do S:=S+a[i]`,
         trueAnswer: 
         'Tính tổng các phần tử của mảng A;',
        answers: [ 
        'Tính tổng các phần tử của mảng A;',
        'In ra màn hình mảng A;',
        'Đếm số phần tử của mảng A;',
        'Không thực hiện việc nào trong 3 việc trên.',
        ]},
        {title:`Trong ngôn ngữ lập trình Pascal, với khai báo như sau. Câu lệnh nào dưới đây là hợp lệ ? 
        TYPE mang= array[1..100] of integer;
        VAR a,b: mang;
            c: array[1..100] of integer;`,
        trueAnswer: 
        'a := b ;',
        answers: [ 
            'a := b ;',
        'b := c ;',
        'c := b ;',
        'a := c ;',
        ]},
        {title:'Trong ngôn ngữ lập trình Pascal, xâu kí tự là?',
        trueAnswer: 
        'Dãy các kí tự trong bảng mã ASCII;',
        answers: [ 
        'Mảng các ký tự;',
        'Dãy các kí tự trong bảng mã ASCII;',
        'Tập hợp các chữ cái trong bảng chữ cái tiếng Anh;',
        'Tập hợp các chữ cái và các chữ số trong bảng chữ cái tiếng Anh;',
        ]},
        {title:'Trong ngôn ngữ lập trình Pascal, cách khai báo xâu kí tự nào sau đây là đúng ?',
        trueAnswer: 
        'S : string;',
        answers: [ 
        'S := file of string ;',
        'S : file of char ;',
        'S : string;',
        'Cả 3 câu đều đúng ;',
        ]},
        {title:'Trong ngôn ngữ lập trình Pascal, xâu kí tự có tối đa ?',
        trueAnswer: 
        '255 kí tự;',
        answers: [ 
        '8 kí tự; ',
        '256 kí tự; ',
        '16 kí tự; ',
        '255 kí tự;',
        ]},
        {title:'Trong ngôn ngữ lập trình Pascal, xâu kí tự không có kí tự nào gọi là ?',
        trueAnswer: 
        'Xâu rỗng;',
        answers: [ 
        'Xâu không; ',
        'Xâu rỗng;',
        'Xâu trắng; ',
        'Không phải là xâu kí tự;',
        ]},
        {title:'Trong ngôn ngữ lập trình Pascal, phần tử đầu tiên của xâu ký tự mang chỉ số là ?',
        trueAnswer: 
        '1',
        answers: [ 
        '0 ',
        'Do người lập trình khai báo',
        '1',
        'Không có chỉ số',
        ]},
        {title:'Trong ngôn ngữ lập trình Pascal, khai báo nào trong các khai báo sau là sai khi khai báo xâu kí tự ?',
        trueAnswer: 
        'S : string[256];',
        answers: [ 
        'S : string;',
        'X1 : string[100];',
        'S : string[256];',
        'X1 : string[1];',
        ]},
        {title:'Trong ngôn ngữ lập trình Pascal, thủ tục Delete(c, a, b) thực hiện công việc gì trong các việc sau?',
        trueAnswer: 
        'Xóa trong xâu kí tự c a kí tự bắt đầu từ vị trí b;',
        answers: [ 
        'Xóa trong xâu kí tự c a kí tự bắt đầu từ vị trí b;',
        'Xóa trong xâu a b kí tự từ vị trí c;',
        'Xóa trong xâu c b kí tự bắt đầu từ vị trí a;',
        'Xóa trong xâu b c kí tự bắt đầu từ vị trí a;',
        ]},
        {title:'Trong ngôn ngữ lập trình Pascal, hàm Length(S) cho kết quả gì ?',
        trueAnswer: 
        'Số ký tự hiện có của xâu S.',
        answers: [ 
        'Độ dài xâu S khi khai báo;',
        'Số ký tự hiện có của xâu S không tính các dấu cách;',
        'Số ký tự của xâu không tính dấu cách cuối cùng',
        'Số ký tự hiện có của xâu S.',
        ]},
        {title:'Trong ngôn ngữ lập trình Pascal, sau khi chương trình thực hiện xong đoạn chương trình sau, giá trị của biến S là ? S := ‘Ha Noi Mua thu’; Delete(S,7,8); Insert(‘Mua thu’, S, 1);',
        trueAnswer: 
        'Mua thu Ha Noi;',
        answers: [ 
        'Ha Noi Mua thu;',
        'Mua thu Ha Noi mua thu;',
        'Mua thu Ha Noi;',
        'Ha Noi;',
        ]},
        {title:'Trong ngôn ngữ lập trình Pascal, đoạn chương trình sau thực hiện việc gì? If (ch >= ‘A’) and (ch <= ‘Z’) then ch := chr( ord(ch) + 32 ) ;',
        trueAnswer: 
        'Biến ch thành chữ thường nếu ch là chữ hoa;',
        answers: [ 
        'Xóa ký tự có trong biến ch;',
        'Biến ch thành chữ thường nếu ch là chữ hoa;',
        'Không thực hiện việc gì;',
        'Biến ch thành chữ hoa;',
        ]},
        {title:'Trong ngôn ngữ lập trình Pascal, thủ tục chèn xâu S1 vào xâu S2 bắt đầu từ vị trí vt được viết:',
        trueAnswer: 
        'Insert(S1,S2,vt);',
        answers: [ 
        'Insert(vt,S1,S2); ',
        'Insert(S1,S2,vt);',
        'Insert(S1,vt,S2); ',
        'Insert(S2,S1,vt);',
        ]},
        {title:'Trong ngôn ngữ lập trình Pascal, với xâu kí tự có các phép toán là ?',
        trueAnswer: 
        'Phép ghép xâu và phép so sánh',
        answers: [ 
        'Phép cộng, trừ, nhân, chia',
        'Phép cộng và phép trừ',
        'Chỉ có phép cộng',
        'Phép ghép xâu và phép so sánh',
        ]},

   ]
}