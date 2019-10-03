module.exports = function zeros(expression) {
  // your solution    
  let res = expression.split('*');
  let count5 = 0;
  let count2 = 0;
  let step;

  res.forEach(item=>{
    if (/\!{2}$/.test(item)) {
      step = 2;
    }
    else {
      step = 1;
    }    
    let str = item.match(/\d+/);    
    let numb = Number(str);    
    for (let i = numb; i >= 2; i = i-step) {      
      for (let j = 5;j <= numb;j = j * 5) {          
        if (i % j === 0) {
          count5++;
        }
      }
      if (i % 2 === 0){
        count2++;
      }
    }        
  });
  if (count2>count5) {
    return count5
  }
  else {
    return count2
  }  
};