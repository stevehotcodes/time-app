window.addEventListener('load',(e)=>{
    e.preventDefault()
    const inputForm=document.querySelector(".input-form");
    const day_el=document.querySelector("#day");
    const month_el=document.querySelector("#month");
    const year_el=document.querySelector("#year");
    const svg_el=document.querySelector(".svg")

    const year_display=document.querySelector("#year-display");
    const month_display=document.querySelector("#month-display");
    const day_display=document.querySelector("#day-display");

  
    console.log(svg_el)

 svg_el.addEventListener('click',(e)=>{
    const day=day_el.value;
    const month=month_el.value;
    const year=year_el.value;

    year_display.value=year;
    month_display.value=month;
    day_display.value=day;


    //current date
    const todayDate=new Date();
    const inputDate=new Date(day, month, year);

    console.log("Birthday date",inputDate)
    console.log("this is the date for today",todayDate);
    
   
    
    


    
    
 })
    

})