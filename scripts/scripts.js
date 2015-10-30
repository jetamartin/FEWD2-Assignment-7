$(document).ready(function () {
//The Headings    
    
//3.	Select the <h2> elements within the <section> and <aside> tags and apply a CSS solid, black, 1px border to them.  
    $(":header").css("border", "solid black 1px");
    
//4.    Select the <h2> elements within the <section> and <aside> tags and apply a color of #CC1C0D to them.    
    $(":header").css("color", "#CC1C0D");
    
//5.	Select the <h2> elements within the <section> and <aside> tags and apply a padding of 3px to the top and bottom and 20px to the left side.    
    $(":header").css("padding-top", "3px").css("padding-bottom", "3px").css("padding-left", "20px");
    
//6.	Select the <h2> elements within the <section> and <aside> tags and apply a border radius of 5px to the top right and bottom left corners only.
    $(":header").css("border-top-right-radius", "5px").css("border-bottom-left-radius", "5px");
    
//7.	Select the <h2> elements within the <section> and <aside> tags and apply a background color of #DFE3E6.
    $(":header").css("background-color", "#DFE3E6");


//The Navigation Menu
//8.	Programmatically add the class “navigation” to each of the 5 navigation menu items.
    $("nav li").addClass("navigation");
//9.	Select the navigation classes and apply a CSS solid, #929CA4, 1px border to them.
    $(".navigation").css("border", "solid 1px #929CA4");
//10.	Select the navigation classes and apply a color of #CC1C0D to them.
    $(".navigation a").css("color", "#CC1C0D");
//11.	Select the navigation classes and apply a padding of 3px to the top and bottom and 20px to the left side.
    $(".navigation a").css("padding", "3px 0px 3px 20px");
//12.	Select the navigation classes and apply a background color of #DFE3E6.
    $(".navigation").css("background-color", "#DFE3E6");
    
//Main Content
//13.	Programmatically remove the vprospect, vconvert, and vretain classes from the <p> tags in the main <section> tag.
    $("section p").removeClass("vprospect", "vconvert", "vretain");
    
//14.	Programmatically add the text “Chevy Dealers Association” after the word “President” in the client testimonials section. Make sure to programmatically add a line break after the word “President” so that the new text you’re adding is placed directly underneath.
    $("aside p:last-child").append("<br>Chevy Dealers Association");
//15.	Programmatically wrap the testimonial verbiage with a <q> tag.
    $("aside p:first-of-type").wrapInner("<q></q>");
    
//16.	Programmatically italicize the testimonial verbiage.
    $("aside p:first-of-type").css("font-style", "italic");
    
//17.	Programmatically replace the bolded Vecta Corporation text in the opening paragraph with a hyperlinked version of the text. The link should go directly to http://www.vectacorp.com.
    $("p b").replaceWith("<a href=\"http://www.vectacorp.com\">Vecta Corporation</a>");
//    $("p b").replaceWith("Hello");    
});