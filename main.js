window.addEventListener('load',(e)=>{
    e.preventDefault()
    const inputForm=document.querySelector(".input-form");
    const day_el=document.querySelector("#day");
    const month_el=document.querySelector("#month");
    const year_el=document.querySelector("#year");
    const svg_el=document.querySelector(".svg")

    const year_display=document.querySelector(".year-display");
    const month_display=document.querySelector(".month-display");
    const day_display=document.querySelector(".day-display");
    const errorMsg=document.querySelectorAll(".error")


  
    console.log(errorMsg)

 svg_el.addEventListener('click',(e)=>{
    const day=day_el.value;
    const month=month_el.value;
    const year=year_el.value;

//convert the numbers/input to date
   const inputDate= new Date(`${day}-${month}-${year}`);
  
   const currentDate=new Date()


   //checking validility of inputs
   function inputValidation(){
      let counter=0
      if(month<0 ||month>12 ||isNaN(month) || month=== ""){
         // counter +=1
         errorMsg[0].style.opacity=1 
         month_el.style.border="2px solid red"
         // inputForm.style.border="2px solid red"
         setTimeout(()=>{
            location.reload()
         },2000)
      }

      else{
         errorMsg[0].style.opacity=0
      }
      if(day< 0 ||day >31 ||isNaN(day)||day===""){
         // counter +=1
         errorMsg[1].style.opacity=1
         day_el.style.border="2px solid red"
         setTimeout(()=>{
            location.reload()
         },5000)
        


      }else{
         errorMsg[1].style.opacity=0
         
      }

      if(year <1900 || year>2023||isNaN(year) || year ===""){
         
         errorMsg[2].style.opacity=1 
         year_el.style.border="2px solid red"
         setTimeout(()=>{
            location.reload()
         },5000)
         
      }
      else{
         errorMsg[2].style.opacity=0
      }
   
   }
   inputValidation()
   

   
   const timeDiff=dateDiff(inputDate, currentDate);

   year_display.value=timeDiff.years;
   month_display.value=timeDiff.months;
   day_display.value=timeDiff.days;
    
 })

//function for date difference
   function dateDiff(d1,d2){
   let years=d2.getFullYear()-d1.getFullYear();
   let months=d2.getMonth()-d1.getMonth();
   let days=d2.getDate()-d1.getDate();

  //conditions if d1>d2
   if (days < 0) {
      months--;
      days += new Date(d2.getFullYear(), d2.getMonth(), 0).getDate();
  }

  if (months < 0) {
      years--;
      months += 12;
  }

  return {
      years: years,
      months: months,
      days: days
  };
}

   

})