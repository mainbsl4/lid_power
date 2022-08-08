const collapsOne=document.querySelector('.collapseOne');
collapsOne.addEventListener("click",(e)=>{
    collapsOne.classList.add('collapsOne-Click');
});

const collapsTwo=document.querySelector('.collapseTwo');
collapsTwo.addEventListener("click",(e)=>{
    collapsTwo.classList.add('collapsTwo-Click');
});

const collapsThree=document.querySelector('.collapseThree');
collapsThree.addEventListener("click",(e)=>{
    collapsThree.classList.add('collapsThree-Click');
});

const collapsFour=document.querySelector('.collapseFour');
collapsFour.addEventListener("click",(e)=>{
    collapsFour.classList.add('collapsFour-Click');
});

const collapsFive=document.querySelector('.collapseFive');
collapsFive.addEventListener("click",(e)=>{
    collapsFive.classList.add('collapsFive-Click');
});

const collapsSix=document.querySelector('.collapseSix');
collapsSix.addEventListener("click",(e)=>{
    collapsSix.classList.add('collapsSix-Click');
});

const collapsSeven=document.querySelector('.collapseSeven');
collapsSeven.addEventListener("click",(e)=>{
    collapsSeven.classList.add('collapsSeven-Click');
});



const productBtnOne=document.querySelector('.productBtnOne');
const productBtnTwo=document.querySelector('.productBtnTwo');
const productBtnThree=document.querySelector('.productBtnThree');
const productBtnFour=document.querySelector('.productBtnFour');
const productBtnFive=document.querySelector('.productBtnFive');
const productBtnSix=document.querySelector('.productBtnSix');
const productBtnSeven=document.querySelector('.productBtnSeven');
const productBtnEight=document.querySelector('.productBtnEight');
const productBtnNine=document.querySelector('.productBtnNine');
const productBtnTen=document.querySelector('.productBtnTen');
const productBtnEleven=document.querySelector('.productBtnEleven');
const productBtnTwelve=document.querySelector('.productBtnTwelve');
const productBtnThirteen=document.querySelector('.productBtnThirteen');
const productBtnFourteen=document.querySelector('.productBtnFourteen');
const productBtnFifteen=document.querySelector('.productBtnFifteen');

const flushCollapsOne=document.querySelector('#flush-collapseOne');
const flushCollapsTwo=document.querySelector('#flush-collapseTwo');
const flushCollapsThree=document.querySelector('#flush-collapseThree');
const flushCollapsFour=document.querySelector('#flush-collapseFour');
const flushCollapsFive=document.querySelector('#flush-collapseFive');
const flushCollapsSix=document.querySelector('#flush-collapseSix');
const flushCollapsSeven=document.querySelector('#flush-collapseSeven');
const flushCollapsEight=document.querySelector('#flush-collapseEight');
const flushCollapsNine=document.querySelector('#flush-collapseNine');
const flushCollapsTen=document.querySelector('#flush-collapseTen');
const flushCollapsEleven=document.querySelector('#flush-collapseEleven');
const flushCollapsTwelve=document.querySelector('#flush-collapseTwelve');
const flushCollapsThirteen=document.querySelector('#flush-collapseThirteen');
const flushCollapsFourteen=document.querySelector('#flush-collapseFourteen');
const flushCollapsFifteen=document.querySelector('#flush-collapseFifteen');


const indexOne=document.querySelector(".One");
const indexTwo=document.querySelector('.Two');
const indexThree=document.querySelector('.Three');
const indexFour=document.querySelector('.Four');
const indexFive=document.querySelector('.Five');
const indexSix=document.querySelector('.Six');
const indexSeven=document.querySelector('.Seven');
const indexEight=document.querySelector('.Eight');
const indexNine=document.querySelector('.Nine');
const indexTen=document.querySelector('.Ten');
const indexEleven=document.querySelector('.Eleven');
const indexTwelve=document.querySelector('.Twelve');
const indexThirteen=document.querySelector('.Thirteen');
const indexFourteen=document.querySelector('.Fourteen');
const indexFifteen=document.querySelector('.Fifteen');


productBtnOne.addEventListener('click',(e)=>{
    flushCollapsOne.classList.toggle('flush-collapseOne-block');
    flushCollapsTwo.classList.remove('flush-collapseTwo-block');
    flushCollapsFifteen.classList.remove('flush-collapseFifteen-block');

    indexOne.classList.toggle('indexOne');
    indexTwo.classList.remove('indexTwo');
    indexFifteen.classList.remove('indexFifteen')
});

productBtnTwo.addEventListener('click',(e)=>{
    flushCollapsTwo.classList.toggle('flush-collapseTwo-block');
    flushCollapsOne.classList.remove('flush-collapseOne-block');
    flushCollapsFifteen.classList.remove('flush-collapseFifteen-block');

    indexTwo.classList.toggle('indexTwo');
    indexOne.classList.remove('indexOne');
    indexFifteen.classList.remove('indexFifteen')
});

productBtnFifteen.addEventListener('click',(e)=>{
    flushCollapsFifteen.classList.toggle('flush-collapseFifteen-block');
    flushCollapsOne.classList.remove('flush-collapseOne-block');
    flushCollapsTwo.classList.remove('flush-collapseTwo-block');

    indexFifteen.classList.toggle('indexFifteen');
    indexOne.classList.remove('indexOne');
    indexTwo.classList.remove('indexTwo')
});

productBtnThree.addEventListener('click',(e)=>{
    flushCollapsThree.classList.toggle('flush-collapseThree-block');
    flushCollapsFour.classList.remove('flush-collapseFour-block');
    flushCollapsFive.classList.remove('flush-collapseFive-block');

    indexThree.classList.toggle('indexThree');
    indexFour.classList.remove('indexFour');
    indexFive.classList.remove('indexFive');

});

productBtnFour.addEventListener('click',(e)=>{
    flushCollapsFour.classList.toggle('flush-collapseFour-block');
    flushCollapsThree.classList.remove('flush-collapseThree-block');
    flushCollapsFive.classList.remove('flush-collapseFive-block');
    
    
    indexFour.classList.toggle('indexFour');
    indexThree.classList.remove('indexThree');
    indexFive.classList.remove('indexFive');

});

productBtnFive.addEventListener('click',(e)=>{
    flushCollapsFive.classList.toggle('flush-collapseFive-block');
    flushCollapsThree.classList.remove('flush-collapseThree-block');
    flushCollapsFour.classList.remove('flush-collapseFour-block');


    indexFive.classList.toggle('indexFive');
    indexThree.classList.remove('indexThree');
    indexFour.classList.remove('indexFour');
});

productBtnSix.addEventListener('click',(e)=>{
    flushCollapsSix.classList.toggle('flush-collapseSix-block');
    flushCollapsSeven.classList.remove('flush-collapseSeven-block');

    indexSix.classList.toggle('indexSix');
    indexSeven.classList.remove('indexSeven');
});

productBtnSeven.addEventListener('click',(e)=>{
    flushCollapsSeven.classList.toggle('flush-collapseSeven-block');
    flushCollapsSix.classList.remove('flush-collapseSix-block');


    indexSeven.classList.toggle('indexSeven');
    indexSix.classList.remove('indexSix');
});

productBtnEight.addEventListener('click',(e)=>{
    flushCollapsEight.classList.toggle('flush-collapseEight-block');
    flushCollapsNine.classList.remove('flush-collapseNine-block');

    indexEight.classList.toggle('indexEight');
    indexNine.classList.remove('indexNine');
});

productBtnNine.addEventListener('click',(e)=>{
    flushCollapsNine.classList.toggle('flush-collapseNine-block');
    flushCollapsEight.classList.remove('flush-collapseEight-block');

    indexNine.classList.toggle('indexNine');
    indexEight.classList.remove('indexEight');
});

productBtnTen.addEventListener('click',(e)=>{
    flushCollapsTen.classList.toggle('flush-collapseTen-block');

    indexTen.classList.toggle('indexTen');
});

productBtnEleven.addEventListener('click',(e)=>{
    flushCollapsEleven.classList.toggle('flush-collapseEleven-block');

    indexEleven.classList.toggle('indexEleven');
});

productBtnTwelve.addEventListener('click',(e)=>{
    flushCollapsTwelve.classList.toggle('flush-collapseTwelve-block');
    flushCollapsThirteen.classList.remove('flush-collapseThirteen-block');
    flushCollapsFourteen.classList.remove('flush-collapseFourteen-block');


   indexTwelve.classList.toggle('indexTwelve');
    indexThirteen.classList.remove('indexThirteen');
    indexFourteen.classList.remove('indexFourteen');
});

productBtnThirteen.addEventListener('click',(e)=>{
    flushCollapsThirteen.classList.toggle('flush-collapseThirteen-block');
    flushCollapsTwelve.classList.remove('flush-collapseTwelve-block');
    flushCollapsFourteen.classList.remove('flush-collapseFourteen-block');

    indexThirteen.classList.toggle('indexThirteen');
    indexTwelve.classList.remove('indexTwelve');
    indexFourteen.classList.remove('indexFourteen');

    
});

productBtnFourteen.addEventListener('click',(e)=>{
    flushCollapsFourteen.classList.toggle('flush-collapseFourteen-block');
    flushCollapsTwelve.classList.remove('flush-collapseTwelve-block');
    flushCollapsThirteen.classList.remove('flush-collapseThirteen-block');

    indexFourteen.classList.toggle('indexFourteen');
    indexTwelve.classList.remove('indexTwelve');
    indexThirteen.classList.remove('indexThirteen');
});
