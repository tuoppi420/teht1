function jarjesta() {
    var in1, in2, in3;
    in1 = parseInt(document.getElementById('in1').value);
    in2 = parseInt(document.getElementById('in2').value);
    in3 = parseInt(document.getElementById('in3').value);
    document.write("annoit: " + in1 + ' ' + in2 + ' ' + in3 + "<br>");
    if(in1<in2 && in1<in3) {
        if(in2 < in3){
            document.write("järjuestys on: " + in1 + ' ' + in2 + ' ' + in3);
        }
        else {
            document.write("järjuestys on: " + in1 + ' ' + in3 + ' ' + in2);
        }
    }
    else if(in2 < in1 && in2 < in3) {
        if(in1<in3){
            document.write("järjuestys on: " + in2 + ' ' + in1 + ' ' + in3);
        }
        else{
            document.write("järjuestys on: " + in2 + ' ' + in3 + ' ' + in1);
        }
    }
    else if(in3 < in1 && in3 < in2){
        if(in1 < in2){
            document.write("järjuestys on: " + in3 + ' ' + in1 + ' ' + in2);
        }
        else{
            document.write("järjuestys on: " + in3 + ' ' + in2 + ' ' + in1);
        }
    }
}

function lakse() {
    var lu1, lu2, lu3, lu4, lu5;
    lu1 = parseInt(document.getElementById('num1').value);
    lu2 = parseInt(document.getElementById('num2').value);
    lu3 = parseInt(document.getElementById('num3').value);
    lu4 = parseInt(document.getElementById('num4').value);
    lu5 = parseInt(document.getElementById('num5').value);
    document.write("annoit: " + lu1 + ' ' + lu2 + ' ' + lu3 + ' ' + lu4 + ' ' + lu5 +"<br>");
    if(lu2 < lu1 && lu3 < lu1 && lu4 < lu1 && lu5 < lu1){
        document.write("isoin numero on: " + lu1)
    }
    else if(lu1 < lu2 && lu3 < lu2 && lu4 < lu2 && lu5 < lu2){
        document.write("isoin numero on: " + lu2)
    }
    else if(lu1 < lu3 && lu2 < lu3 && lu4 < lu3 && lu5< lu3){
        document.write("isoin numero on: " + lu3)
    }
    else if(lu1 < lu4 && lu2 < lu4 && lu3 < lu4 && lu5 < lu4){
        document.write("isoin numero on: " + lu4)
    }
    else if(lu1 < lu5 && lu2 < lu5 && lu3 < lu5 && lu4 < lu5){
        document.write("isoin numero on: " + lu5)
    }
}

function par() {
    var luk;
    luk = parseInt(document.getElementById('pa').value);
    document.write("annoit: " + luk + "<br>");
    if(luk % 2 == 0) {
        document.write("parillinen")
    }
    else {
        document.write("pariton")
    }
}

function ika() {
    var ik;
    ik = parseInt(document.getElementById('ika1').value);
    document.write("ikäsi on: " + ik + "<br>");
    if(ik < 15) {
        document.write("olet " + ik + " vuotias ja saat ajaa pyörää")
    }
    else if(ik < 18){
        document.write("olet " + ik + " vuotias ja saat ajaa mopolla")
    }
    else{
        document.write("olet yli 18 vuotias ja saat ajaa autoa")
    }
}

function kieli() {
   var ki = document.getElementById('kieli1').value;
   if(ki == 'eng')
    {
      document.write("Hello world!")
    }
    else if(ki == 'swe')
    {
      document.write("Hej världen!")
    }
    else {
      document.write("Hola Mundo!")
    }
  }
