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
divLeft.style.display = 'flex';
divLeft.style.flexDirection = 'column';
divLeft.style.alignItems = 'center';
divLeft.style.height = '300px';
divLeft.style.width = '300px';
divLeft.innerHTML = '<img style="margin-bottom: 100px;" src="jelly.png"/>';
document.getElementById('divBig').appendChild(divLeft);

const divLeftText = document.createElement('div');
divLeftText.id = 'divLeftText';
divLeftText.innerHTML = '<h1>Full Resim</h1>';
document.getElementById('divLeft').appendChild(divLeftText);

const divRightContainer = document.createElement('div');
divRightContainer.id = 'divRightContainer';
divRightContainer.style.display = 'flex';
divRightContainer.style.flexDirection = 'column';
divRightContainer.style.alignItems = 'center';
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

const divStyles = 'height: 100px; width: 100px; margin: 0 100px 100px 0; background-image: url("jelly.png")';

var x = 300;
var y = 300;

for (let i=1; i < 10; i++){

    var divNew = document.createElement('div');
    divNew.style.cssText = divStyles;
    divNew.style.backgroundPositionX = x + 'px';
    divNew.style.backgroundPositionY = y + 'px';
    document.getElementById('divRight').appendChild(divNew);
    
    x -= 100;

    if (i%3==0){
        x = 300;
        y -= 100;
    }

}

const divRightText = document.createElement('div');
divRightText.id = 'divRightText';
divRightText.innerHTML = '<h1>Bölünmüş Hali</h1>';
divRightText.style.marginRight = '100px';
document.getElementById('divRightContainer').appendChild(divRightText);

document.getElementById('divRight').appendChild(div1);
document.getElementById('divRight').appendChild(div2);
document.getElementById('divRight').appendChild(div3);
document.getElementById('divRight').appendChild(div4);
document.getElementById('divRight').appendChild(div5);
document.getElementById('divRight').appendChild(div6);
document.getElementById('divRight').appendChild(div7);
document.getElementById('divRight').appendChild(div8);
document.getElementById('divRight').appendChild(div9);