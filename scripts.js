//TASK 3

COOKIE_NAME = 'mins-count'

if (get_cookie(COOKIE_NAME) !== undefined) {
    notify_on_cookies();
}
else {
    add_form()
}


function notify_on_cookies() {    

    alert('Count = ' + get_cookie(COOKIE_NAME)+
    '\nClicking the "OK" button will delete the data from the cookies');
    delete_cookie(COOKIE_NAME);

    add_form();
    alert("The cookies have been deleted");
    location.reload();    
}

function delete_cookie(name) {
    if(get_cookie(name)) {
        document.cookie = name + "=" +
            ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
}

function set_cookie(number) {
    let name = COOKIE_NAME;
    let value = number;    
    let expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + 60 * 1000);

    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; expires=" + expireDate;
}

function get_cookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}


function add_form()
{
    let form = document.createElement('form')
    form.id = 'task3-form'

    let br = document.createElement('br')

    let label = document.createElement('label')
    label.htmlFor = 'nums-input'
    label.innerHTML = 'Enter 10 numbers:'

    let numsInput = document.createElement('input')
    numsInput.type = 'text'
    numsInput.id = 'nums-input'
    numsInput.placeholder = '1 2 3 4 5 6 7 8 9 10'

    let btn = document.createElement('input')
    btn.type = 'submit'
    btn.value = 'TASK 3'
    btn.id = 'button3'
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        mins_count()
    })

    form.appendChild(label)
    form.appendChild(br)
    form.appendChild(br)
    form.appendChild(numsInput)
    form.appendChild(br)
    form.appendChild(br)
    form.appendChild(btn)

    document.getElementById('task3').appendChild(form)
}

function mins_count() {
    let str = document.getElementById('nums-input').value;
    str = str.replace(/\s+/g, ' ').trim();
    let nums = str.split(' ');

    if(nums.length != 10)
    {
        alert("You haven't entered 10 values");
        return;                           
    }

    let isNubers = true;
    nums.forEach( function IsNuber( currentValue ) {
     if( isNubers && isNaN( currentValue ) ) { alert("Invalid input"); isNubers = false; }
    });
    
    nums = nums.map(Number);
    if(isNubers)
    {
        let count =  nums.filter(element => element ==  Math.min.apply(null, nums) ).length;
        let min_numb = Math.min.apply(null, nums);
        set_cookie(count);
        alert("count = " + count +" (" + min_numb +")");                            
    }    
}


//TASK 4
const colorPicker = document.getElementById('task4-color');
colorPicker.addEventListener('change', ChangeColor);

const leftPanel = document.querySelector('.left-main');
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const numsinput = document.getElementById('nums-input')

document.body.onload = function(){
    document.querySelector('.left-main').style.color = localStorage.getItem('task4-color') ?? leftPanel.style.color;
    document.getElementById('button1').style.color = localStorage.getItem('task4-color') ?? btn1.style.color;
    document.getElementById('button2').style.color = localStorage.getItem('task4-color') ?? btn2.style.color;   
    
    if(btn3){ 
        document.getElementById('button3').style.color = localStorage.getItem('task4-color') ?? btn3.style.color; 

    }
};


function ChangeColor() {
    let color = colorPicker.value
    localStorage.setItem('task4-color', color)
}



//TASK5

let topPanel = document.getElementById('hdr');
let asidePanel = document.getElementById('asd')
let leftMainPanel = document.getElementById('leftmain')
let topMainPanel = document.getElementById('topmain')
let bottomMainPanel = document.getElementById('bottommain')
let bottomPanel = document.getElementById('ftr')

let form_header =  [topPanel,'form-header', false]
let form_aside =  [asidePanel,'form-aside', false]
let form_left_main =  [leftMainPanel,'form-left-main', false]
let form_top_main =  [topMainPanel,'form-top-main', false]
let form_bottom_main =  [bottomMainPanel,'form-bottom-main', false]
let form_footer =  [bottomPanel,'form-footer', false]


let forms = [form_header, form_aside, form_left_main, form_top_main, form_bottom_main, form_footer]

forms.forEach(element => {
    element[0].addEventListener('dblclick', (e) => createForm(element))
});



function createForm(form){
    if( !form[2] )
    {
        let form5 = document.createElement('form')
        let panel_identifier = form[1].slice(form[1].indexOf("-"), form[1].length);
        form5.id = 'task5-form' + panel_identifier

        let list5 = document.createElement('ul')
        list5.id = 'task5-list' + panel_identifier
    
        let br = document.createElement('br')
    
        let label = document.createElement('label')
        label.htmlFor = 'items-input'
        label.innerHTML = 'Enter an item:'
    
        let itemsInput = document.createElement('input')
        itemsInput.type = 'text'
        itemsInput.id = 'items-input' + panel_identifier
        itemsInput.placeholder = 'text...'
    
        let btn1 = document.createElement('input')
        btn1.type = 'submit'
        btn1.value = 'ADD'
        btn1.id = 'button5_add' + panel_identifier
        btn1.addEventListener('click', (e) => {
            e.preventDefault()
            addItem(itemsInput, list5)
        })
    
        let btn2 = document.createElement('input')
        btn2.type = 'submit'
        btn2.value = 'SAVE'
        btn2.id = 'button5_save' + panel_identifier
        btn2.addEventListener('click', (e) => {
            e.preventDefault()
            saveList(list5, form)
        })

        if(form[1] == 'form-left-main')
         { 
            itemsInput.style.color = localStorage.getItem('task4-color')
            btn1.style.color = localStorage.getItem('task4-color')
            btn2.style.color = localStorage.getItem('task4-color')
        }
    
        form5.appendChild(label)
        form5.appendChild(br)
        form5.appendChild(br)
        form5.appendChild(itemsInput)
        form5.appendChild(br)
        form5.appendChild(br)
        form5.appendChild(btn1)
        form5.appendChild(br)
        form5.appendChild(btn2)
    
        
        let squareNode = document.getElementById('square')
        if(form[1] == 'form-left-main')
         { 
             document.getElementById(form[0].id).insertBefore(form5, squareNode)
             form[2] = true;        
             document.getElementById(form[0].id).insertBefore(list5, squareNode)
         }
        else
        {   
            document.getElementById(form[0].id).appendChild(form5)        
            form[2] = true;   
            document.getElementById(form[0].id).appendChild(list5)            
        }  
    }
    

}

function addItem(textbox, list)
{
    let str = textbox.value;

    if(str.length != 0)
    {
        let itemToAdd = document.createElement('li');
        itemToAdd.innerHTML = str;
        list.append(itemToAdd); 

        
    }
}

function saveList(ulist, form)
{
    let panel_identifier = form[1].slice(form[1].indexOf("-"), form[1].length);
    let key = "task5-list" + panel_identifier

    if(ulist.children.length != 0)
    {
        var items = {
            'list': []
          };
          let id = '#' + ulist.id
          $(id).children().each(function(i,v){
              items.list.push({ 'id': i, 'value': $(v).text()});
            });
                        
          localStorage.setItem(key, JSON.stringify(items));

          form[0].innerHTML = ulist.innerHTML
    
    }

}




$(window).on('load', function()
{
    let tags = Object.keys(localStorage)
    tags.forEach(tag => 
    {
        if( tag.startsWith('task5') )  { localStorage.removeItem(tag); }        
    });  
});

