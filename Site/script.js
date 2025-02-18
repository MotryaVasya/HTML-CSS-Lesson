fetch('http://localhost:8000/tasks?user_id=1826538119', {
mode: 'no-cors'
}).then(response => response.json())
.then(data =>{
  var a = data.name;
  for(var i=0; i<a.length; i++){
    console.log(a[i]);
  }
}).catch(error => error);