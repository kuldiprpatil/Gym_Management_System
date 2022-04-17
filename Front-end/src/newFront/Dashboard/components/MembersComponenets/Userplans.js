const  Userplans=({planList}) => {
    const Plans=planList
  
    return( Plans.map((plan)=>{
       
        return(
           
          
           <h6><li>{plan.membershipPlanName}</li></h6>
            
            ) 
    })
 
    )
   
}
export default Userplans;
