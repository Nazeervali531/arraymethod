let states = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]

let Btn= document.querySelector('#btn')
Btn.addEventListener('click',()=>{
    states.map(state=>{
        
        let Result= document.querySelector('.result')
        let headingThree=document.createElement('h3')
        headingThree.innerHTML=state
        Result.appendChild(headingThree)
        

    })})
    let HideState= document.querySelector('#btntwo')
      HideState.addEventListener('click',()=>{
        let Hide= document.querySelector('.result')
        Hide.style.display="none"
        
    })

