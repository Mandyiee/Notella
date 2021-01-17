let subBtn = document.querySelector('#button');

let show = document.querySelector('.grid');
let notes = document.getElementById('notes');
let ids ;
let cancel = document.querySelector('.noteTab1');
let openNote = document.querySelector('.openUp');
let note = document.querySelector('.note')
openNote.addEventListener('click', function() {
  note.classList.toggle('noteUp')

})
cancel.addEventListener('click', function() {
  note.classList.toggle('noteUp');

})

window.onload = () => {
  if (!localStorage.password) {
    localStorage.setItem('password', '1234')
  }
  guide.textContent = 'Input old password'
for (var i = 0; i < 10000 ;i++) {

    //instead of saving just the notes save everything   
    if (localStorage.getItem('note' + [i]) !== null) {
      let newNoteCon = document.createElement('div')
      newNoteCon.classList.add('demoCon')
   newNoteCon.innerHTML = localStorage.getItem('note' + [i])
      show.appendChild(newNoteCon);
      

    }

  }
  getButt();
  reveal();
  defineIds();
};
function defineIds () {
  ids = localStorage.length + 1
}
function getButt() {
  var del = document.getElementsByClassName('del');
 
  for (var i = 0; i < del.length; i++) {
    del[i].onclick = function() {
  var parent = this.parentElement;
  parent.style.display = "none";    
      localStorage.removeItem('note' + this.id)
      
    }
  } 
}


subBtn.addEventListener('click', function() {
  if (notes.value == null || notes.value == "") {
    alert("please input something")
  } else {
    NotesApp()
    note.classList.toggle('noteUp');
  notes.value = ''
  }
})

function NotesApp() {
let newNoteCon = document.createElement('div')
  newNoteCon.classList.add('demoCon');
  newNoteCon.innerHTML = `<div class = 'demo'> ${notes.value} </div> <button class = 'del' id = ${ids} > <i class='fas fa-trash'> </i> </button>`;
  
show.appendChild(newNoteCon);
localStorage.setItem('note' + ids, newNoteCon.innerHTML)

  ids++;
  getButt()
  reveal()
}

function reveal() {
  let revealIt = document.querySelectorAll('.demo');
  revealIt.forEach(item => {
    item.addEventListener('click', function() {
      //toggle the yunno and put the content there
      note.classList.toggle('noteUp');
      notes.value = item.textContent;
    })
  })
}


let guide = document.querySelector('.guideP');

let numbers = document.querySelectorAll('.numbers')
let input = document.querySelector('#pin');
let body = document.querySelector('.pinBody')
let submit = document.getElementById('submit');
let del = document.getElementById('delete');
del.addEventListener('click', function l() {
  input.value = input.value.slice(0, -1);
})

submit.addEventListener('click', function() {
  if (input.value == localStorage.password) {
    body.style.display = 'none'
 document.querySelector('.pins').style.display = 'none';
    document.querySelector('.bodice').style.display = 'block';
  } else{
    input.classList.add('error');
    input.value = ''
  }
})

numbers.forEach(item => {
  item.addEventListener('click', function() {
    if (!isNaN(item.value)) {
      if (input.value.length !== 4) {
        input.value += item.value;
        input.classList.remove('error');
      }
    }
  })
})
let icon = document.querySelector('.modal-icon')

icon.addEventListener('click', function() {
  this.parentElement.style.display = 'none';
});
let down = document.querySelector('.down')
let closeDown = document.querySelector('.close-down');
let downIcon = document.querySelector('.fa-chevron-down')
closeDown.addEventListener('click', function() {
  down.classList.toggle('up');
  closeDown.classList.toggle('close-up')
  downIcon.classList.toggle('fa-chevron-up');

});

let numbersPass = document.querySelectorAll('.numbers2');
let inputPass = document.querySelector('#password');
numbersPass.forEach(item => {
  item.addEventListener('click', function() {
    if (!isNaN(item.value)) {
      if (inputPass.value.length !== 4) {
        inputPass.value += item.value;
        inputPass.classList.remove('error');
      }
    }
  })
});
let submit2 = document.getElementById('submit2');
let del2 = document.getElementById('delete2');
del2.addEventListener('click', function() {
  inputPass.value = inputPass.value.slice(0, -1);
})
let no = 0;
submit2.addEventListener('click', function() {
  if (!no) {
    if (inputPass.value == localStorage.password) {
      no = 1;
      guide.textContent = 'Input new password'
      inputPass.value = '';

    } else {


      inputPass.classList.add('error');
      inputPass.value = ''
    }
  }
  if (no) {
    if (inputPass.value.length === 4) {
      localStorage.setItem('password', inputPass.value);
      no = 0;
      guide.textContent = 'Input old password'
      inputPass.value = ''
    }

    if (inputPass.value > 1 && inputPass.value < 4) {
      guide.textContent = 'Length must be 4 characters';
      no = 0;
      inputPass.value = ''
      let newTime = setTimeout(function() {
        guide.textContent = 'Input old password'
      }, 1000);
    }
  }


})
let closePass = document.querySelector('.pass-icon');
let body2 = document.querySelector('.passwordBody');
closePass.addEventListener('click', function() {
  body2.style.display = 'none'
}) 
let changeP = document.querySelector('.menu2');
changeP.addEventListener('click', function() {
 body2.style.display = 'block'
});
function resetIt () {
  event.target.parentElement.style.display = 'none';
  localStorage.clear()
  localStorage.setItem('password','1234')
  location.reload();
}
function closeShow() {
  document.querySelector('.modal-show').style.display= 'none'
}
function showIt () {
  document.querySelector('.modal-show').style.display= 'block'
}