

var aText = new Array(
    "Before Start you should follow some rules adha follow panna dhan solluven sariya?", 
    "1. HeadSet or Headphone edhachum onnu kandipa pottukanum.",
    "2. Oru nalla silent aana place la ukkandhukanum ,yaarum disturb panna kudadhu...",
    "3. Romaba mukkiyam endha oru light um iruka kudadhu maybe after this pottuko but ipa ellame off la irukanum",
    "4. idhu edhume mudiyadhuna mela screen ah close pandra x symbol irukum adha click pannitu kilambu😏 ."
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();

    function no(){
        window.location.href = "no1.html";
    }
    function yes1(){
        window.location.href="start.html";
    }
