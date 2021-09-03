const resultDiv = document.getElementById('second-blog')


document.getElementById('buttonRn').addEventListener('click', function() {
    resultDiv.textContent = '';
    const count = Math.round((Math.random() * 7));
    console.log(count);
    console.log('hellow')
    const div = document.createElement('div');
    div.innerHTML = `
                    <div class="fs-1 text-center shadow my-5 px-5 py-2 rounded-pill text-danger">Congratulations<img width="70px"  src="photo/—Pngtr.png" alt=""> <span class="fw-bold text-success">Raisa</span>
                    </div>
                    <h1 class="py-2 px-5 fs-1 rounded text-center shadow">Tumi <span class="text-success">${count}</span> baccher <span class="text-primary text-bold">Ma</span> hobe<img width="100px" src="photo/imgbin_baby-png (1) (1).png" alt=""></h1>
         `
    resultDiv.appendChild(div);
})