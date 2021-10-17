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

                       if(nums.length != 10){
                           alert("You haven't entered 10 values");
                           return;                           
                       }

                       let isNubers = true;
                       nums.forEach( function IsNuber( currentValue ) {
                        if( isNubers && isNaN( currentValue ) ) { alert("Invalid input"); isNubers = false; }
                       });
                       
                       nums = nums.map(Number);
                       if(isNubers){
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

document.body.onload = function(){
    document.querySelector('.left-main').style.color = localStorage.getItem('task4-color') ?? leftPanel.style.color;
    document.getElementById('button1').style.color = localStorage.getItem('task4-color') ?? btn1.style.color;
    document.getElementById('button2').style.color = localStorage.getItem('task4-color') ?? btn2.style.color;   
    
    if(btn3){ 
        document.getElementById('button3').style.color = localStorage.getItem('task4-color') ?? btn3.style.color;  

    }
};

//window.onunload = function(){ localStorage.removeItem('task4-color'); }

function ChangeColor() {
    let color = colorPicker.value
    localStorage.setItem('task4-color', color)
}



//TASK5

let topPanel = document.getElementById('hdr');

let form_header =  'form_header'
//topPanel.addEventListener('dblclick', createForm(topPanel, form_top));

topPanel.ondblclick = createForm(topPanel, form_header);


function createForm(panel, form){
    if(!form)
    {
        let form = document.createElement('form')
        form.id = 'task5-form'
    
        let br = document.createElement('br')
    
        let label = document.createElement('label')
        label.htmlFor = 'items-input'
        label.innerHTML = 'Enter an item:'
    
        let itemsInput = document.createElement('input')
        itemsInput.type = 'text'
        itemsInput.id = 'items-input'
        itemsInput.placeholder = 'Item'
    
        let btn1 = document.createElement('input')
        btn1.type = 'submit'
        btn1.value = 'ADD'
        btn1.id = 'button5_add'
        btn1.addEventListener('click', (e) => {
            e.preventDefault()
        })
    
        let btn2 = document.createElement('input')
        btn2.type = 'submit'
        btn2.value = 'SAVE'
        btn2.id = 'button5_save'
        btn2.addEventListener('click', (e) => {
            e.preventDefault()
        })
    
        form.appendChild(label)
        form.appendChild(br)
        form.appendChild(br)
        form.appendChild(itemsInput)
        form.appendChild(br)
        form.appendChild(br)
        form.appendChild(btn1)
        form.appendChild(br)
        form.appendChild(btn2)
    
        
        document.getElementById(form).appendChild(form)
        
        form = true;
    }
}












