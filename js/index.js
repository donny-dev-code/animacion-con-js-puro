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
     */
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



      
       
       