    /*var numero= 12;
    var numero2=12;

    console.log(numero)

    if(numero !== numero2){
        document.write("Se cumplio la condicion")
    }
    else{
        document.write("no se cumplio la condicion") 
    }
        
       var numero3= 8
        var numero4= 9
       
    
       if (!(numero ==numero2 )){
        document.write("entro al if")
       }
       else{document.write("lo negaron,"+'<br>')}
       //escope
    
       var collection=["coleccion cero","coleccion uno","coleccion dos","coleccion tres",6000];
       collection[0]="coleccion uno"
        collection[1]="coleccion dos"
         collection[2]="coleccion tres"
          collection[3]="coleccion cuatro"
 
    var addFinal="agregado al final"
    collection.push(addFinal)
    collection.unshift("agregado al principio")
    collection.pop()
    collection.shift()
   

          for ( let x of collection){
            document.write(x+"<br>")
          }
          const objeto='{"nombre": "ayúdame", "edad": 30, "Señor": "Todopoderoso"}'
          const jason=JSON.parse(objeto)
          document.write(jason.nombre+" "+jason.Señor,'<br>')
          document.write(collection.at())
          var wre= collection.splice(1,2,'elimine C_uno y C_dos ');document.write('<br>')
          document.write(collection)
         

       document.write(varias)
       
    
       if(2==2){
        var variable="esto es una variable";
        document.write(variable+" ")
       }
       document.write(variable) 
       */
      /*var item1=document.getElementById('item1')
      var item2=document.getElementById('item2')
      var item3=document.getElementById('item3')
      const li1= function(){alert('diste click en el item 1 ')}
      const li2= function(){alert('diste click en el item 2 ')}
      const li3= function(){alert('diste click en el item 3 ')}

      
       item1.addEventListener('click', li1)
       item2.addEventListener('click', li2)
       item3.addEventListener('click', li3)*/

     /* var dell= document.querySelector('.lista')
    var color=  document.querySelectorAll('.item1');
    color.forEach(lista=> {lista.style.color='blue';})
      var listaitem1=document.querySelector('.lista li:nth-child(1)')
      var listaitem2=document.querySelector('.lista li:nth-child(2)')
      var listaitem3=document.querySelector('.lista li:nth-child(3)')
      var contador=0
     /* dell.addEventListener('click', ()=>{
        setInterval(()=>{
          listaitem1.innerText=contador
          contador++
        },1000)
      
      })
     dell.addEventListener('click', ()=>{
      let nuevo=document.createElement('li')
      nuevo.innerText='este es el nuevo elemento'
      nuevo.classList.add('nuevaClase')
      nuevo.id='nuevoId'
      nuevo.setAttribute('name', 'name')
     // dell.appendChild(nuevo)
     dell.insertBefore(nuevo,listaitem3)
     })
    
    var parr="My Parrafo con innerHtml reemplazó el html "
 //div hijo creado de div prueba
  var MyDiv=document.querySelector('#prueba')
  MyDiv.innerHTML=parr
   NuevoDiv=document.createElement('div')
      NuevoDiv.setAttribute('name', 'divHijo')
      NuevoDiv.id='divHijo'
      NuevoDiv.classList.add('divHijo')
      MyDiv.appendChild(NuevoDiv)

 //subtitulo del div hijo creado de div prueba
    var h2=document.createElement('h2')
      h2.setAttribute('name', 'subtitulo')
      h2.classList.add('subtitulo')
      h2.id='subtitulo'
      h2.innerText='Subtitulo'
      NuevoDiv.appendChild(h2)
      
    const myMove= ()=>{
    
      let id= null;
      const elemen=document.querySelector('#animation');
      let post=0;
      if(!elemen){
        console.log('no existe elemento de animación')
        return;
      }
      const frame= ()=>{
        if(post == 250){
          clearInterval(id)
        }else{
          post++
          elemen.style.top=post + 'px'
          elemen.style.right=post + 'px'
        }
      }
      id= setInterval(frame, 5);
    }
    document.write('<br>')
    //callback 
    const imprimir=(sum)=>{
      document.write('el resultado es: '+sum)
    }

    var micalculadora= (num1, num2, imprimir)=>{
      let sum=num1+num2
      imprimir(sum)
     
    }
    micalculadora(3,5,imprimir)

    //async awayt

const pruebaAsincrona = async()=>{
  let resultado= await fetch('https://rickandmortyapi.com/api/character')
  let respuesta= await resultado.json()
  let results=respuesta.results

 let recoge=document.querySelector('.cuerpo-table')
  Object.keys(results).forEach((key)=>{
   let fila = document.createElement('tr')
   let colNombre=document.createElement('td')
   colNombre.innerText=results[key].name
   let colEstado=document.createElement('td')
   colEstado.innerText=results[key].status
   let colEspecie=document.createElement('td')
   colEspecie.innerText=results[key].species
   let colGener=document.createElement('td')
   colGener.innerText=results[key].gender
  fila.appendChild(colNombre)
  fila.appendChild(colEstado)
  fila.appendChild(colEspecie)
  fila.appendChild(colGener)
  recoge.appendChild(fila)
  })
}
  */
//pruebaAsincrona()
//api form
var Submit=document.querySelector('.btn-submit')
var User=document.querySelector('.usuario')
var password=document.querySelector('.contraseña')
var textUser=document.querySelector('.text-user')
var textContra=document.querySelector('.text-contraseña')

Submit.addEventListener('click', () =>{
if(User.checkValidity()==false){
  textUser.innerText=User.validationMessage;
}else{
   textUser.innerText=''
}
if(password.checkValidity()==false){
  textContra.innerText=password.validationMessage
}else{
 textContra.innerText=''
}

})

function irAdelante(){
  window.history.forward()
}
//api storage
localStorage.setItem('usuario', 'Carlos')
localStorage.setItem('usuario2', 'Donny')
localStorage.setItem('usuario3', 'Isaias')
localStorage.setItem('usuario4', 'Bene')
localStorage.setItem('usuario5', 'Elineth')
localStorage.clear();
console.log(localStorage.getItem('usuario5'))

//localStorage.removeIem('usuario')
//alert(localStorage.getItem('usuario'))






      
       
       