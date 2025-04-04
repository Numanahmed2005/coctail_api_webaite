
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
.then(res=>res.json())
.then(data=>{
    data_show(data)

})
.catch(error=>{
    console.log(error)
})

function data_show(datas){
    console.log(datas)

}



