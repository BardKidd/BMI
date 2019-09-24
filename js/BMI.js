//宣告變數
var answer = document.getElementById('answer');
var list = document.querySelector('.list');
var data = JSON.parse(localStorage.getItem('listData')) || [];

//監聽及重整
answer.addEventListener('click', clickBtn, false);
list.addEventListener('click', delLiDiv, false);
repage(data);
answer.textContent = '看結果';
answer.style.backgroundColor = "#FFD366";
answer.style.border = 'none';
answer.style.color = '#424242';

//儲存到localStorage裡面
function clickBtn(e){
    e.preventDefault();
    var txt1 = document.querySelector('.inputValue1').value / 100;
    var txt2 = document.querySelector('.inputValue2').value;
    var BMIvalue = txt2 / (txt1 * txt1);
    BMIvalue = BMIvalue.toFixed(2); //四捨五入取小數點2位
    
    var BMIob = {
        BMI: BMIvalue,
        weight: txt2,
        height: txt1 * 100
    }
    
    if(txt1 == '' && txt2 == ''){
        alert('請輸入身高、體重');
        return false;
    }
    else if(txt1 == ''){
        alert('請輸入身高');
        return false;
    }
    else if(txt2 == ''){
        alert('請輸入體重');
        return false;
    }
    else{
        data.push(BMIob);
        repage(data);
        localStorage.setItem('listData', JSON.stringify(data));
    }
}

//更新頁面、按鈕
function repage(e){
    var str = '';
    var answerTxt = '';
    var dataLen = data.length;
    var today = new Date();
    var clickTs = false;
    
    for(var i = 0; i < dataLen; i++){
        
        if(data[i].BMI < 18.5){
            str += "<li style='border-left: 7px solid #31BAF9'><a href='#' data-index=" + i + ">刪除</a><h3>過輕</h3><span>BMI</span><p>" + data[i].BMI + "</p><span>體重</span><p>" + data[i].weight + "kg</p><span>身高</span><p>" + data[i].height + "cm</p><em>" + today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "</em></li>"
            
            answer.style.backgroundColor = "#424242";
            answer.style.border = '6px solid #31BAF9';
            answer.style.color = '#31BAF9';
            
            answerTxt = "<span>" + data[i].BMI + "</span><span>BMI</span><div class='img' style='background-color: #31BAF9'><img src='JavaScript_HomeWork-gh-pages/assets/icons_loop.png'></div><em>過輕</em>"
            if(clickTs == false){
                answer.innerHTML = answerTxt;
            }
            
            //清除按鈕和輸入框資料
            var roundDiv = document.querySelector('.round div');
            roundDiv.addEventListener('click', function(e){
                e.stopPropagation();
                
                var txt1 = document.querySelector('.inputValue1').value = '';
                var txt2 = document.querySelector('.inputValue2').value = '';
                clickTs = true;
                
                answer.innerHTML = '看結果';
                answer.style.backgroundColor = "#FFD366";
                answer.style.border = 'none';
                answer.style.color = '#424242';
            })
        }
        else if(data[i].BMI >= 18.5 && data[i].BMI < 25){
            str += "<li style='border-left: 7px solid #86D73E'><a href='#' data-index=" + i + ">刪除</a><h3>理想</h3><span>BMI</span><p>" + data[i].BMI + "</p><span>體重</span><p>" + data[i].weight + "kg</p><span>身高</span><p>" + data[i].height + "cm</p><em>" + today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "</em></li>"
            
            answer.style.backgroundColor = "#424242";
            answer.style.border = '6px solid #86D73E';
            answer.style.color = '#86D73E';
            
            answerTxt = "<span>" + data[i].BMI + "</span><span>BMI</span><div class='img' style='background-color: #86D73E'><img src='JavaScript_HomeWork-gh-pages/assets/icons_loop.png'></div><em>理想</em>"
            if(clickTs == false){
                answer.innerHTML = answerTxt;
            }
            
            //清除按鈕和輸入框資料
            var roundDiv = document.querySelector('.round div');
            roundDiv.addEventListener('click', function(e){
                e.stopPropagation();
                
                var txt1 = document.querySelector('.inputValue1').value = '';
                var txt2 = document.querySelector('.inputValue2').value = '';
                clickTs = true;
                
                answer.innerHTML = '看結果';
                answer.style.backgroundColor = "#FFD366";
                answer.style.border = 'none';
                answer.style.color = '#424242';
            })
        }
        else if(data[i].BMI >= 25){
            str += "<li style='border-left: 7px solid #FF1200'><a href='#' data-index=" + i + ">刪除</a><h3>過重</h3><span>BMI</span><p>" + data[i].BMI + "</p><span>體重</span><p>" + data[i].weight + "kg</p><span>身高</span><p>" + data[i].height + "cm</p><em>" + today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "</em></li>"
            
            answer.style.backgroundColor = "#424242";
            answer.style.border = '6px solid #FF1200';
            answer.style.color = '#FF1200';
            
            answerTxt = "<span>" + data[i].BMI + "</span><span>BMI</span><div class='img' style='background-color: #FF1200'><img src='JavaScript_HomeWork-gh-pages/assets/icons_loop.png'></div><em>過重</em>"
            if(clickTs == false){
                answer.innerHTML = answerTxt;
            }
            
            //清除按鈕和輸入框資料
            var roundDiv = document.querySelector('.round div');
            roundDiv.addEventListener('click', function(e){
                e.stopPropagation();
                
                var txt1 = document.querySelector('.inputValue1').value = '';
                var txt2 = document.querySelector('.inputValue2').value = '';
                clickTs = true;
                
                answer.innerHTML = '看結果';
                answer.style.backgroundColor = "#FFD366";
                answer.style.border = 'none';
                answer.style.color = '#424242';
            })
        }// end else if
    }// end for  
    list.innerHTML = str;
}// end repage

//刪除
function delLiDiv(e){
    e.preventDefault();
    
    if(e.target.nodeName !== 'A'){
        return;
    }
    var index = e.target.dataset.index;
    data.splice(index, 1);
    localStorage.setItem('listData', JSON.stringify(data));
    repage(data);
    console.log('finish');
}