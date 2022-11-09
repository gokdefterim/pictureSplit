const style = document.createElement('style');
style.innerHTML = `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
    }
    `;
document.getElementsByTagName('head')[0].appendChild(style);

const divBig = document.createElement('div');
divBig.id = 'divBig';
divBig.style.margin = '100px';
divBig.style.display = 'flex';
divBig.style.justifyContent = 'space-between';
document.getElementsByTagName('body')[0].appendChild(divBig);

const divLeft = document.createElement('div');
divLeft.style.height = '300px';
divLeft.style.width = '300px';
divLeft.innerHTML = '<img src="jelly.png"/><div><h1>Full Resim</h1></div>';
document.getElementById('divBig').appendChild(divLeft);

const divRight = document.createElement('div');
divRight.id = 'divRight';
divRight.style.height = '600px';
divRight.style.width = '600px';
divRight.style.display = 'block';
document.getElementById('divBig').appendChild(divRight);

const divBlock1 = document.createElement('div');
divBlock1.id = 'divBlock1';
divBlock1.style.display = 'flex';
divBlock1.style.height = '100px';
divBlock1.style.width = '600px';

const div1 = document.createElement('div');
div1.style.height = '100px';
div1.style.width = '100px';
div1.style.margin = '0 100px 0 0';

const div2 = document.createElement('div');
div2.style.height = '100px';
div2.style.width = '100px';
div2.style.margin = '0 100px 0 0';

const div3= document.createElement('div');
div3.style.height = '100px';
div3.style.width = '100px';
div3.style.margin = '0 100px 0 0';

const divBlock2 = document.createElement('div');
divBlock2.style.height = '100px';
divBlock2.style.width = '600px';

const divBlock3 = document.createElement('div');
divBlock3.id = 'divBlock3';
divBlock3.style.display = 'flex';
divBlock3.style.height = '100px';
divBlock3.style.width = '600px';

const div4= document.createElement('div');
div4.style.height = '100px';
div4.style.width = '100px';
div4.style.margin = '0 100px 0 0';

const div5= document.createElement('div');
div5.style.height = '100px';
div5.style.width = '100px';
div5.style.margin = '0 100px 0 0';

const div6= document.createElement('div');
div6.style.height = '100px';
div6.style.width = '100px';
div6.style.margin = '0 100px 0 0';

const divBlock4 = document.createElement('div');
divBlock4.style.height = '100px';
divBlock4.style.width = '600px';

const divBlock5 = document.createElement('div');
divBlock5.id = 'divBlock5';
divBlock5.style.display = 'flex';
divBlock5.style.height = '100px';
divBlock5.style.width = '600px';

const div7= document.createElement('div');
div7.style.height = '100px';
div7.style.width = '100px';
div7.style.margin = '0 100px 0 0';

const div8= document.createElement('div');
div8.style.height = '100px';
div8.style.width = '100px';
div8.style.margin = '0 100px 0 0';

const div9= document.createElement('div');
div9.style.height = '100px';
div9.style.width = '100px';
div9.style.margin = '0 100px 0 0';

const divEmpty= document.createElement('div');
divEmpty.style.height = '100px';
divEmpty.style.width = '100px';

document.getElementById('divRight').appendChild(divBlock1);
document.getElementById('divRight').appendChild(divBlock2);
document.getElementById('divRight').appendChild(divBlock3);
document.getElementById('divRight').appendChild(divBlock4);
document.getElementById('divRight').appendChild(divBlock5);

document.getElementById('divBlock1').appendChild(div1);
document.getElementById('divBlock1').appendChild(div2);
document.getElementById('divBlock1').appendChild(div3);

document.getElementById('divBlock3').appendChild(div4);
document.getElementById('divBlock3').appendChild(div5);
document.getElementById('divBlock3').appendChild(div6);

document.getElementById('divBlock5').appendChild(div7);
document.getElementById('divBlock5').appendChild(div8);
document.getElementById('divBlock5').appendChild(div9);
