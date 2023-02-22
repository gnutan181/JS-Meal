$.ajax({
    type :'get',
    // url : 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    url : 'https://dog.ceo/api/breeds/image/random',
    success : function(response)
    {
        console.log(response)
        // for(var i=0; i<response.meals.length;i++){
        //     var newItem = `<div class ='col-md-3 m-2 shadow-lg p-3 mb-5 bg-white rounded'>
        //     <p>${response.meals[i].strMeal}</p>
        //     <img src=${response.meals[i].strMealThumb} class='img-fluid'  />
        //     <p>${response.meals[i].idMeal}</p>
        //     </div>`
        //     $("#myitems").append(newItem)
        // }
        // console.log(response.meals)
    },
    error : function(error)
    {
        console.log(error)
    }
})