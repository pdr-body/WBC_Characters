// Arrays para a seleção do Modal;
let fotos = ['Holyfield.jpg','Mike.jpg','Floyd.jpg','Muhamed.webp','Davis.jpg','Naoya.jpg'] // Váriavel responsável por buscar a imagem dos personagens;
let nomes = [ 'Evander Holyfield','Mike Tyson','Floyd Mayweather','Muhammad Ali','Gervonta Davis','Naoya Inoue']
let desc = [
    'Evander Holyfield, apelidado de "The Real Deal", é um dos maiores boxeadores da história, reconhecido por sua garra, disciplina e técnica impressionante. Nascido em 1962, ele iniciou sua carreira como peso meio-pesado e brilhou nos Jogos Olímpicos de 1984 com uma medalha de bronze. Após dominar a categoria peso cruzador, Holyfield se tornou pentacampeão mundial dos pesos pesados, enfrentando lendas como Mike Tyson, George Foreman e Larry Holmes. Seu apelido reflete seu estilo autêntico e sua coragem dentro do ringue, especialmente em momentos icônicos como a luta em que teve parte da orelha mordida por Tyson. 🥊',

    'Mike Tyson, apelidado de "Iron Mike", é uma lenda do boxe mundial, conhecido por seu estilo agressivo e poder de nocaute devastador. Nascido em 1966, no Brooklyn, Nova York, Tyson se tornou o campeão mundial dos pesos pesados mais jovem da história, aos 20 anos, ao derrotar Trevor Berbick em 1986. Durante sua carreira, acumulou 50 vitórias (44 por nocaute) em 58 lutas, conquistando os principais cinturões da categoria: WBC, WBA e IBF3. Sua trajetória também inclui momentos polêmicos, como a famosa luta contra Evander Holyfield em 1997, quando foi desclassificado por morder a orelha do adversário. Mesmo após altos e baixos, Tyson permanece como um dos nomes mais icônicos e influentes do esporte.',
    
    'Floyd Mayweather Jr., conhecido como "Money", é um ex-pugilista norte-americano invicto, com um recorde perfeito de 50 vitórias e nenhuma derrota, sendo 27 por nocaute. Nascido em 1977, ele conquistou títulos mundiais em cinco categorias de peso e ficou famoso por sua habilidade defensiva incomparável e estilo técnico refinado. Mayweather também se destacou fora dos ringues, acumulando uma fortuna multimilionária e se tornando o atleta mais bem pago do mundo por vários anos, o que reforçou seu apelido e seu status de ícone no boxe profissional.',
    
    'Muhammad Ali, nascido como Cassius Clay em 1942, foi um dos maiores boxeadores da história e um símbolo de coragem e ativismo. Campeão olímpico e tricampeão mundial dos pesos pesados, ficou famoso pelo seu estilo rápido, provocador e por lutas lendárias contra Sonny Liston, Joe Frazier e George Foreman. Fora dos ringues, sua postura firme contra a Guerra do Vietnã e sua luta pelos direitos civis o tornaram um ícone mundial.',
    
    'Gervonta Davis, apelidado de "Tank", é um dos boxeadores mais explosivos da atualidade, conhecido por seu estilo agressivo e alto índice de nocautes. Nascido em 1994, em Baltimore, nos Estados Unidos, ele é campeão mundial em várias categorias, incluindo superpena, leve e superleve. Com um cartel impressionante de 30 vitórias, 28 por nocaute, e apenas 1 empate, Davis se destaca pela força, velocidade e técnica refinada. Treinado desde os cinco anos de idade, ele superou uma infância difícil para se tornar um dos principais nomes do boxe mundial, mantendo o cinturão dos leves da WBA com vitórias marcantes sobre adversários como Ryan Garcia e Frank Martin',
    
    'Naoya Inoue, apelidado de "Monster", é um dos boxeadores mais dominantes da atualidade, conhecido por seu poder de nocaute e técnica refinada. Nascido em 1993, no Japão, ele é campeão mundial em quatro categorias de peso e o primeiro pugilista da história a se tornar campeão indiscutível no peso galo e supergalo na era dos quatro cinturões. Com um cartel impecável de 30 vitórias e nenhuma derrota, sendo 27 por nocaute, Inoue é respeitado mundialmente por sua velocidade, precisão e inteligência no ringue. Sua ascensão meteórica e conquistas históricas o colocam entre os melhores boxeadores libra por libra do mundo.'
] 


const Modal = document.getElementById('modal') // Constante que busca o identificador do modal;
const Foto = document.getElementById('foto') // Constante que busca o identificador das fotos para adcionar as fotos no modal;
const Nome = document.getElementById('nome') // Constante que busca o identificador de nomes para adcionar nomes no modal;
const Desc = document.getElementById('desc')


function mostraModal(param) {    
    Modal.style.display = 'flex'; // Função que faz o modal aparecer na tela quando clicado na foto da Landing Page;
    Foto.src = 'assets/' + fotos[param]; // Função que busca as fotos no array "fotos" para adcionar as fotos de forma correta e responsiva;
    Nome.innerHTML = nomes[param]; // Função que busca os nomes no array "nomes" para adicionar os nomes de forma correta e responsiva;
    Desc.innerHTML = desc[param]
}
function fechaModal(){
    Modal.style.display = 'none'; // Função que faz o modal desaparecer quando clicado no X ;
}

const som = new Audio('assets/click.mp3')
som.preload = 'auto'

function tocarSom() {
    som.play()
}
document.addEventListener('DOMContentLoaded', () => {
    const imagenss = document.querySelectorAll('.imagem')
    imagenss.forEach(imagem => {
        imagem.addEventListener('mouseover', tocarSom)
    })
})