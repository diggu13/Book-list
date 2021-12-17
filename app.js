// book constructor
function Book(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;  
}
// ui constructor
function UI(){};

// addBooktolist UI prototype
UI.prototype.addBookToList=function(book){





    const list = document.getElementById('book-list');

// create tr (table row)
    const row = document.createElement('tr')
    row.innerHTML=`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>`

    
    // append to list
    list.appendChild(row)
}
// showAlert prototype
    UI.prototype.showAlert = function(message,className){
        const div = document.createElement('div');
        div.className=`alert ${className}`;
        div.innerHTML=message;
        const container=document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form)

        setTimeout(function(){
            document.querySelector('.alert').remove()
        }, 1000);
    }

// clear input prototype
    UI.prototype.clearInputs=function() {
        title = document.querySelector('#title').value='';
        author = document.querySelector('#author').value='';
        isbn = document.querySelector('#isbn').value='';
    }

    // delete book
    UI.prototype.deleteBook=function (target) {
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
            const ui = new UI();
            ui.showAlert('deleted successfuly','success')
        } 
    }
// event on submit button
document.querySelector('#book-form').addEventListener('submit',function(e){
    const title = document.querySelector('#title').value,
          author = document.querySelector('#author').value,
          isbn = document.querySelector('#isbn').value;
   
        //   instantiate to BOOK
        const book  = new Book(title,author,isbn);
        
        //   instantiate to Ui
        const ui = new UI();

        if(title==''|| author==='' || isbn===''){
            ui.showAlert('enter inputs','error')
        }
        else{
              // new UI prototype
        ui.addBookToList(book);

        // ui clear input prototype
        ui.clearInputs()

        // alert added successfull
        ui.showAlert('added successfully','success')
        }
      

e.preventDefault();
})

// event listner for delete
    document.querySelector('#book-list').addEventListener('click',function(e) {
        const ui = new UI();
        ui.deleteBook(e.target);
        e.preventDefault();
    })