function f1()
{
  var  t1= document.getElementById("t1").value;
   var let= {" ":" ",a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--..", 1:".----",2:"..---",3:"...--",4:"....-", 5:".....",6:"-....",7:"--...",8:"---..",9:"----.",0:"-----"  };
   var  p2= document.getElementById("p2") ;
      p2.innerHTML = "";
      var t2 = t1.toLowerCase();
      var str = "";
      for(var j=0; j<t1.length; j++)
      {
        str += let[t2[j]] + "&nbsp;"; 
      }
      p2.innerHTML = "Given Input: " + t1 + "<br/>Morse Code : " + str + "<br/>"    
}