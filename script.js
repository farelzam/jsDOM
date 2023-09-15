// const judul = document.getElementById(`judul`);
// judul.style.color= " #ffdc3e";
// judul.style.backgroundColor="blue";
// judul.innerHTML="Luxyr-Document"

// const p = document.getElementsByTagName('p');
// p[0].style.backgroundColor='pink';
// p[1].style.backgroundColor='pink';
// p[2].style.backgroundColor='pink';
// p[3].style.backgroundColor='pink';

// for(let i=0; i < p.length; i++){
//     p[i].style.backgroundColor = 'blue';
// }

// const h3= document.getElementsByTagName("h3")[0];
// h3.style.fontsize='100px';

// const container = document.getElementById("container");
// container.style.backgroundColor='#3e61ff';

// const p1 = document.getElementsByClassName("#a p1");
// p1[0].innerHTML="dirubah degan javascript";


// const p4 = document.querySelector('#b p');
// p4.style.color='green';
// p4.style.fontsize='10px';

// const li2 = document.querySelector('#b ul li:nth-child(2)')
// li2.style.backgroundColor='red';

// const p = document.querySelector('p');

// const judul= document.getElementById('judul');
// judul.innerHTML='<i>M faiz farelza</i>'

// const sectiona = document.querySelector('section#a');
// sectiona.innerHTML='hello faiz...!!!';

// const sectiona = document.querySelector('section#a');
// sectiona.innerHTML=<div><p>paragraft baru</p></div>;

let judul = document.querySelector('p');
judul.innerHTML ='my to do list';

let list = document.querySelector('list');
list.innerHTML =`

<div class = "row">
    <div class ="col-8">
        <div class ="form-check">
            <input class="from-check-input" type="checkbox" value="" id="flexcheckdefault">
            <lebel class="from-check-lebel" for="flexcheckdefault">
                tugas baru
            </label>
        </div>

            <div class="col-auto">
                <div class="btn"><i class="bi bi-trash"></i></div>
            </div>
    </div>`

