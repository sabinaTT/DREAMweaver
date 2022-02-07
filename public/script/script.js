let publishedDreams = [{dream: "cows"},{dream: "rabbits"},{ dream: "birds"},{ dream: "fish"}]
let usedNumbers = [];

function dreamPicker() { 
     let randomNumber = Math.floor(Math.random() * (publishedDreams.length)); 
     if (!usedNumbers.includes(randomNumber)) { 
        console.log("First published dreams length: " + publishedDreams.length) 
        //<a href="/dreams/= publishedDreams[randomNumber]._id ">
            publishedDreams[randomNumber].dream //</a>
             usedNumbers.push(randomNumber)     
         console.log("new published dream length: " + publishedDreams.length) 
     } 
     else { (randomNumber = Math.floor(Math.random() * (publishedDreams.length)))  
         if (!usedNumbers.includes(randomNumber)) { 
            console.log("First published dreams length: " + publishedDreams.length) 
    
                //<a href="/dreams/= publishedDreams[randomNumber]._id ">
                    publishedDreams[randomNumber].dream //</a>
                     usedNumbers.push(randomNumber)     
                 console.log("new published dream length: " + publishedDreams.length) 
             } 
             else { (randomNumber = Math.floor(Math.random() * (publishedDreams.length))) 
                 if (!usedNumbers.includes(randomNumber)) { 
                    console.log("First published dreams length: " + publishedDreams.length) 
            
                        //<a href="/dreams/= publishedDreams[randomNumber]._id ">
                            publishedDreams[randomNumber].dream //</a>
                             usedNumbers.push(randomNumber)     
                         console.log("new published dream length: " + publishedDreams.length) 
                     } 
                     else { (randomNumber = Math.floor(Math.random() * (publishedDreams.length))) 
                        //<a href="/dreams/= publishedDreams[randomNumber]._id ">
                            publishedDreams[randomNumber].dream //</a>
                             usedNumbers.push(randomNumber)     
                         console.log("new published dream length: " + publishedDreams.length) 
                     } 
            } 
     }; 
 }; 

 dreamPicker();



 <% function dreamPicker() { %>
    <% let randomNumber = Math.floor(Math.random() * (publishedDreams.length));  %>
    <% if(!usedNumbers.includes(randomNumber))   %>
       <a href="/dreams/= <%=publishedDreams[randomNumber]._id  %>">
        <%= publishedDreams[randomNumber].dream  %></a>
        <% usedNumbers.push(randomNumber)     %> 
        <% console.log("new published dream length: " + publishedDreams.length)} else { %>
        <% randomNumber = Math.floor(Math.random() * (publishedDreams.length));  %>
           
      <% } %>
<% };  %>