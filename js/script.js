let fotos = ['Holyfield.jpg','Mike.jpg','Floyd.jpg','Muhamed.webp','Davis.jpg','Naoya.jpg'] // V responsável por buscar a imagem dos personagens;
let nomes = [ 'Evander Holyfield','Mike Tyson','Floyd Mayweather','Muhammad Ali','Gervonta Davis','Naoya Inoue']


console.log(fotos[1])

const Modal = document.getElementById('modal') // Constante que busca o identificador caixa de descrição;
const Foto = document.getElementById('foto') // Constante que busca o 
const Nome = document.getElementById('nome')

function mostraModal(param) {
    Modal.style.display = 'flex';
    Foto.src = 'assets/' + fotos[param]
    Nome.innerHTML = nomes[param]
}
function fechaModal(){
    Modal.style.display = 'none';
}