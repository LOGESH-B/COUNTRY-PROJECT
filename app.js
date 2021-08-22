const getData= async (link)=>{
    let data= await fetch(link);
    let resData=await data.json();
    return resData;
}
let content=document.querySelector("#alertt");
getData("https://restcountries.eu/rest/v2/all").then(resdData=>{
    inData=resdData;
    if(inData===null || inData.length===0 || inData===undefined){
        content.innerHTML=`<div id="alertt" class="text-center pt-3">
        <h5>DATA NOT FOUND</h5>
    </div>`;
    }
    else
    {
         disData(inData.slice(0,20));
    }
})
.catch(err=>{
    console.log(err.message);
})



let backG=document.querySelector("#root");
const style =()=>{
   
    backG.style.backgroundPosition="center";
    backG.style.backgroundSize="cover";
    backG.style.backgroundAttachment="fixed";
    backG.classList.add("back");
}
const disData=(dData)=>{
    let urll=dData[0].flag;
    backG.style.background=`url(${urll})`;
    style();  
    content.innerHTML=dData.map((country)=>content.innerHTML=`<div class="card my-4" style="width: 18rem;">
    <div class="card-header bg-transparent text-center">${country.alpha2Code}</div>
    <a href="https://www.google.com/search?q=${country.name}&rlz=1C1GCEB_enIN945IN945&oq=india&aqs=chrome.0.69i59j35i39j0i67j0i67i131i433j46i67i131i199i291i433j0i67j0i20i131i263i433i512j0i20i263i512j0i67j0i67i433.2330j0j15&sourceid=chrome&ie=UTF-8"  data-bs-toggle="tooltip" data-bs-placement="right" title="Click for more Info" ><img src="${country.flag}"  class="card-img-top border border-secondary cimg"  alt="img"></a>
    <div class="card-body">
      <h5 class="card-title text-center fs-5 fw-bold ">${country.name}</h5>
      <p class="card-text">Capital  :${country.capital}</p>
      <p class="card-text">Region   :${country.region}</p>
      <p class="card-text">TimeZone :${country.timezones}</p>
      <p class="card-text">CALL Code:${country.callingCodes}</p>
      <p class="card-text">Currencies:${country.currencies[0].name}(${country.currencies[0].symbol})</p>
    </div>
  </div>`) 
 
}

document.querySelector("#name").addEventListener("input",(event)=>{
    let finalData=inData.filter(country=>
        country.name.toLowerCase().startsWith(event.target.value.toLowerCase()))
        if(finalData.length===0){
            content.innerHTML=`<div class="alert alert-warning my-3" role="alert">
            Country NOT Found
          </div>`
          let ul="https://general.futuregenerali.in/general-insurance/img/404.png";
          backG.style.background=`url(${ul})`;;
          style();
        }
        else
        {
            disData(finalData);
        }
})

