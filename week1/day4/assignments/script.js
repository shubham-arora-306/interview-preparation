$('#history').click(function(){
  $('#history1').hide()
  $('#calculator').show()
  $('#history2').show()
})

$('#calculator').click(function(){
  $('#history1').show()
  $('#calculator').hide()
  $('#history2').hide()
})


var displaylocation = document.getElementById('result1');

$('.button-value').click(function(){
  let x = this.innerText;
  var a = parseInt(document.getElementById('input1').value);

  var b = parseInt(document.getElementById('input2').value);

  $('#history2').append("("+a+x+b+"\n"+")")

  var answer;

  if (x == 'calculator'){
    answer = 0
    } else if (x === "+"){
    answer = a+b
    } else if (x == "-"){
      answer = a-b
    } else if (x == "*"){
      answer = a*b
    } else if (x == "/"){
      answer = a/b
    }

    displaylocation.innerText = answer;
})