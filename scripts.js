//TASK 3

COOKIE_NAME = 'mins-count'

if (get_cookie(COOKIE_NAME) !== undefined) {
    notify_on_cookies();
}
else {
    add_form()
}


function notify_on_cookies() {    

    alert(get_cookie(COOKIE_NAME)+
    'Clicking the "OK" button will delete the data from the cookies');
    delete_cookie(COOKIE_NAME);

    add_form();
    alert("The cookies have been deleted");
    location.reload();    
}

function delete_cookie(name) {
    if(get_cookie(name)) {
        document.cookie = name + "=" +
            ";expires=-1";
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
document.querySelector('.left-main').addEventListener('load', () =>  {
    applyAndSaveColor()
})

document.querySelector('.left-main').style.color =
    localStorage.getItem('task4-color') ?? document.querySelector('.left-main').style.color

function applyAndSaveColor() {
    let color = document.querySelector('#task4-color').value

    document.querySelector('.left-main').style.color = color
    localStorage.setItem('task4-color', color)
}






