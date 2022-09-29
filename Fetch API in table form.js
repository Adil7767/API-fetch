// function myapi(){
fetch("https://fakestoreapi.com/products")
    .then((data) => {
        // console.log(data);
        // connvert api data in to json mean in js object
        return data.json();
    })
    .then((objectData)=>{
        console.log(objectData[0].title);
        let tableData="";
        objectData.map((values)=>{
            // tableData =tableData+`<h1>${values.title}</h1>`;
            tableData =tableData+`
            <tr>

            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
            <td> <image src=" ${values.image}"></td>
        </tr>`;
        })
        document.getElementById("table_body").innerHTML=tableData;

    })
    .catch((err)=>{
        console.log(err);
    })
    // function sr(){
    //     for(let i =1;i<=20;i++){
    //         return [i];
    //     }
    // }
// }