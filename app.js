function requestOfServer() {

    $.ajax({
        type: 'get',
        url: "http://localhost:8000/hello-world?info=Getting"
    }).done(function(data) { 
        document.getElementById('developer').innerHTML = data.name
        document.getElementById('version').innerHTML = data.version
        document.getElementById('value-of-variable').innerHTML = data.value_of_variable_info
        document.getElementById('company-site').innerHTML = data.web_site_company

        $("#show-values").css('display', 'block')

    });

}

function requestOfServerPost(){
    $.ajax({
        type: 'post',
        url: "http://localhost:8000/hello-rota?info=Posting"
    }).done(function(data){
        document.getElementById('developer').innerHTML = data.name
        document.getElementById('version').innerHTML = data.version
        document.getElementById('value_of_variable').innerHTML = data.value_of_variable_info
        document.getElementById('company_site').innerHTML = data.web_site_company

        $("#show-values").css('display','block')
    });
}

function submitDataOfUser(){
    const nameOfUser = $("#name").val()
    const lastNameOfUser = $("#lastname").val()//hashtag na ffrente é pq é Id
    const ageOfUser = $("#age").val()

   $.ajax({//função que vem do jQuery por padrao
    "url":"http://localhost:8000/insert-data",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/JSON; charset=UTF-8"
        },
        "data":JSON.stringify({//passa a estrutura do meu dado, API que eu iz
            name:nameOfUser,
            lastName: lastNameOfUser,
            age: ageOfUser
        })
   }).done(function(response){

    if(response.success){
        alert('Deu boa :)')
    }

    });

    console.log(nameOfUser)
    console.log(lastNameOfUser)
    console.log(ageOfUser)
}

