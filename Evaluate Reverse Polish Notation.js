var evalRPN = function(tokens) {
    let ourMap=[]
    let n1,n2 
    
    for(u=0; u<tokens.length; u++){ 
        if(Number.isInteger(+tokens[u]) ){  
            ourMap.push(tokens[u])
        }else{  
            n2=ourMap.pop()
            n1=ourMap.pop()
            ourMap.push(calculate(+n1,+n2,tokens[u])) 
            }
        }
    return ourMap[0] 
    
};

function calculate(first,second,operation){
      let solution
      switch (operation) {
        case "+":
          solution = first + second
          break
        case "-":
          solution = first - second
          break
        case "*":
          solution = first * second
          break
        case "/":  
          solution = (first / second)>0? Math.floor(first/second) : Math.ceil(first/second)
          break
        default:
          return
      }
    return solution
  }