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
divLeft.id = 'divLeft';
divLeft.style.height = '300px';
divLeft.style.width = '300px';
divLeft.innerHTML = '<img src="jelly.png"/>';
document.getElementById('divBig').appendChild(divLeft);

const divLeftText = document.createElement('div');
divLeftText.id = 'divLeftText';
divLeftText.innerHTML = '<h1>Full Resim</h1>';
document.getElementById('divLeft').appendChild(divLeftText);

const divRightContainer = document.createElement('div');
divRightContainer.id = 'divRightContainer';
divRightContainer.style.height = '700px';
divRightContainer.style.width = '600px';
document.getElementById('divBig').appendChild(divRightContainer);

const divRight = document.createElement('div');
divRight.id = 'divRight';
divRight.style.height = '600px';
divRight.style.width = '600px';
divRight.style.display = 'flex';
divRight.style.justifyContent = 'space-between';
divRight.style.flexWrap = 'wrap';
document.getElementById('divRightContainer').appendChild(divRight);

const divRightText = document.createElement('div');
divRightText.id = 'divRightText';
divRightText.innerHTML = '<h1>Bölünmüş Hali</h1>';
document.getElementById('divRightContainer').appendChild(divRightText);1

const div1 = document.createElement('div');
div1.style.height = '100px';
div1.style.width = '100px';
div1.style.margin = '0 100px 100px 0';
div1.style.backgroundImage = 'url("jelly.png")';

const div2 = document.createElement('div');
div2.style.height = '100px';
div2.style.width = '100px';
div2.style.margin = '0 100px 100px 0';
div2.style.backgroundImage = 'url("jelly.png")';
div2.style.backgroundPositionX = '200px';

const div3= document.createElement('div');
div3.style.height = '100px';
div3.style.width = '100px';
div3.style.margin = '0 100px 100px 0';
div3.style.backgroundImage = 'url("jelly.png")';
div3.style.backgroundPositionX = '100px';

const div4= document.createElement('div');
div4.style.height = '100px';
div4.style.width = '100px';
div4.style.margin = '0 100px 100px 0';
div4.style.backgroundImage = 'url("jelly.png")';
div4.style.backgroundPositionY = '200px';

const div5= document.createElement('div');
div5.style.height = '100px';
div5.style.width = '100px';
div5.style.margin = '0 100px 100px 0';
div5.style.backgroundImage = 'url("jelly.png")';
div5.style.backgroundPositionX = '200px';
div5.style.backgroundPositionY = '200px';

const div6= document.createElement('div');
div6.style.height = '100px';
div6.style.width = '100px';
div6.style.margin = '0 100px 100px 0';
div6.style.backgroundImage = 'url("jelly.png")';
div6.style.backgroundPositionX = '100px';
div6.style.backgroundPositionY = '200px';

const div7= document.createElement('div');
div7.style.height = '100px';
div7.style.width = '100px';
div7.style.margin = '0 100px 100px 0';
div7.style.backgroundImage = 'url("jelly.png")';
div7.style.backgroundPositionY = '100px';

const div8= document.createElement('div');
div8.style.height = '100px';
div8.style.width = '100px';
div8.style.margin = '0 100px 100px 0';
div8.style.backgroundImage = 'url("jelly.png")';
div8.style.backgroundPositionX = '200px';
div8.style.backgroundPositionY = '100px';

const div9= document.createElement('div');
div9.style.height = '100px';
div9.style.width = '100px';
div9.style.margin = '0 100px 100px 0';
div9.style.backgroundImage = 'url("jelly.png")';
div9.style.backgroundPositionX = '100px';
div9.style.backgroundPositionY = '100px';


document.getElementById('divRight').appendChild(div1);
document.getElementById('divRight').appendChild(div2);
document.getElementById('divRight').appendChild(div3);
document.getElementById('divRight').appendChild(div4);
document.getElementById('divRight').appendChild(div5);
document.getElementById('divRight').appendChild(div6);
document.getElementById('divRight').appendChild(div7);
document.getElementById('divRight').appendChild(div8);
document.getElementById('divRight').appendChild(div9);