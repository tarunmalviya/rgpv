﻿// JScript File
//<script language="Javascript" type="text/javascript"">
		function prn(obj)
					{
					if (confirm('Do you want to Print the Report?'))
						{
						    /*obj.style.visibility ='hidden' */
						    window.print()
						}
					}
						
	    function CloseMe()
	            {	
	                window.close();
	            }
	
 
    function textboxMultilineMaxNumber(txt,maxLen){   
        try{   
            if(txt.value.length > (maxLen-1))
            return false;   
           }catch(e){   
           }   
    }
       
   
function RestrictSpecialChar(txtName, maxLength)    
{          
 var exp = String.fromCharCode(window.event.keyCode);
  var address=document.getElementById(txtName).innerHTML;
   //Allowed some special chars and alphabets and numbers        
//If you don’t want any special char you can remove from the below line	     
   var r = new RegExp("[!_.$*@#0-9a-zA-Z\r]", "g");        
   if (exp.match(r) == null)        
   { window.event.keyCode = 0;
     return false;        
   }                
  /* if(maxLen >= maxLength)        
   {               
 
   alert("Maximum of 255 characters are allowed to be entered as a description");             
   //address.value = address.value.substring(0, maxLength);                
   return false;        
   }  */  
 } 
  
	//</script>

///////////Function to Print Control from Web page///////////
function Clickheretoprint(obj)
{ 
  var disp_setting="toolbar=yes,location=no,directories=yes,menubar=yes,resizable=1,";
  disp_setting+="scrollbars=yes,width=655, height=600, left=100, top=25"; 
  var content_vlue=document.getElementById(obj).innerHTML;
  var docprint=window.open("","",disp_setting); 
   docprint.document.open(); 
   docprint.document.write('<html><head><title>".:: Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal ::."</title>'); 
      docprint.document.write('<link href="CSS/Marksheet.css" rel="stylesheet" type="text/css" />'); 
      docprint.document.write('<link href="../ClassCss.css" rel="stylesheet" type="text/css" />'); 
       docprint.document.write('<link href="../CSS/ECS.css" rel="stylesheet" type="text/css" />');
        docprint.document.write('<link href="../CSS/RGPV.css" rel="stylesheet" type="text/css" />'); 
         docprint.document.write('<link href="../CSS/bootstrap.css" rel="stylesheet" type="text/css" />');
         docprint.document.write('<link href="../CSS/resultsCSS.css" rel="stylesheet" type="text/css" />'); 
      docprint.document.write('</head><body onLoad="self.print()"><center>');          
   docprint.document.write(content_vlue);          
   docprint.document.write('</center></body></html>');  
     docprint.document.close(); 
   docprint.focus(); 
}

function ClickheretoprintMarksheet(obj)
{ 
  var disp_setting="toolbar=yes,location=no,directories=yes,menubar=yes,resizable=1,";
  disp_setting+="scrollbars=yes,width=855, height=800, left=100, top=25"; 
  var content_vlue=document.getElementById(obj).innerHTML;
  var docprint=window.open("","",disp_setting); 
   docprint.document.open(); 
   docprint.document.write('<html><head><title>".:: Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal ::."</title>'); 
       docprint.document.write('<link href="../CSS/Marksheet.css" rel="stylesheet" type="text/css" />');
       docprint.document.write('<link href="../CSS/Marksheet.css" rel="stylesheet" type="text/css" />');
             docprint.document.write('<link href="../CSS/ECS.css" rel="stylesheet" type="text/css" />');
             docprint.document.write('<link href="../CSS/Main.css" rel="stylesheet" type="text/css" />');
             docprint.document.write('<link href="../CSS/tabs.css" rel="stylesheet" type="text/css" />');
             docprint.document.write('<link href="../CSS/resultsCSS.css" rel="stylesheet" type="text/css" />');
                       
        docprint.document.write('<link href="../CSS/RGPV.css" rel="stylesheet" type="text/css" />');  
      docprint.document.write('</head><body onLoad="self.print()"><center>');          
   docprint.document.write(content_vlue);          
   docprint.document.write('</center></body></html>');  
     docprint.document.close(); 
   docprint.focus(); 
}
/////////////////////

