import './styles.scss';

import lang_en from './json/en.json';
import lang_de from './json/de.json';
import lang_es from './json/es.json';
import lang_ja from './json/ja.json';
import lang_pt from './json/pt.json';
import lang_fr from './json/fr.json';

window.onload = function () {

    const bannerTitle = document.querySelector('.banner__title');
    const cardItem = document.getElementsByClassName('banner__card-item');
    const selectorItem = document.getElementsByClassName('banner__selector-item');
    const selectorInput = document.getElementsByClassName('banner__selector-radio');
    const selectorLink = document.querySelector('.banner__selector-link');
    const bannerLink = document.getElementsByClassName('banner__link');

    selectorLink.onclick = function() {
        for (let i = 0; i < selectorInput.length; i++) {
            if (selectorInput[i].type == "radio" && selectorInput[i].checked) {
                this.setAttribute('href', selectorInput[i].value);
            }
        }
    }

    function addClassBody() {
        document.body.classList.add('lang-en');
    }
    function removeClassBody() {
        document.body.classList.remove('lang-en');
    }

    function insertText(lang_text){

        let langTextArr = Object.entries(lang_text);
        let price = {
            year: '$39.99',
            week_yearly: '$0.48',
            week_weekly: '$6.99'
        }

        bannerTitle.innerHTML = langTextArr[0][1];

        cardItem[0]
            .querySelector('.banner__card-item-text')
            .innerHTML = langTextArr[1][1];
        cardItem[1]
            .querySelector('.banner__card-item-text')
            .innerHTML = langTextArr[2][1];
        cardItem[2]
            .querySelector('.banner__card-item-text')
            .innerHTML = langTextArr[3][1];

        selectorItem[0]
            .querySelector('.banner__selector-title')
            .innerHTML = langTextArr[4][1];
        selectorItem[0]
            .querySelector('.banner__selector-label')
            .innerHTML = langTextArr[5][1];
        selectorItem[0]
            .getElementsByClassName('banner__selector-radio-label-col')[0]
            .querySelector('.banner__selector-text')
            .innerHTML = langTextArr[6][1].replace(/{{price}}/g, price.year);
        selectorItem[0]
            .getElementsByClassName('banner__selector-radio-label-col')[1]
            .querySelector('.banner__selector-text')
            .innerHTML = langTextArr[8][1].replace(/{{price}}/g, price.week_yearly);

        selectorItem[1]
            .querySelector('.banner__selector-title')
            .innerHTML = langTextArr[7][1];
        selectorItem[1]
            .querySelector('.banner__selector-text')
            .innerHTML = langTextArr[8][1].replace(/{{price}}/g, price.week_weekly);

        selectorLink.innerHTML = langTextArr[12][1];

        bannerLink[0].innerHTML = langTextArr[9][1];
        bannerLink[1].innerHTML = langTextArr[10][1];
        bannerLink[2].innerHTML = langTextArr[11][1];
    }

    function checkUrlSearchLang(){
        if ((urlSearchLang) == 'en') {
            insertText(lang_en);
            addClassBody();
        } else if ((urlSearchLang) == 'de') {
            insertText(lang_de);
            removeClassBody();
        } else if ((urlSearchLang) == 'es') {
            insertText(lang_es);
            removeClassBody();
        } else if ((urlSearchLang) == 'ja') {
            insertText(lang_ja);
            removeClassBody();
        } else if ((urlSearchLang) == 'pt') {
            insertText(lang_pt);
            removeClassBody();
        } else if ((urlSearchLang) == 'fr') {
            insertText(lang_fr);
            removeClassBody();
        }
    }

    let language = window.navigator.language;
    let languageFistTwo = language.substring(0, 2);
    let urlSearchLang = window.location.search.substring(6);

    switch (languageFistTwo) {
        case "en":
            insertText(lang_en);
            addClassBody();
            checkUrlSearchLang();
            break;

        case "de":
            insertText(lang_de);
            removeClassBody();
            checkUrlSearchLang();
            break;

        case "es":
            insertText(lang_es);
            removeClassBody();
            checkUrlSearchLang();
            break;

        case "ja":
            insertText(lang_ja);
            removeClassBody();
            checkUrlSearchLang();
            break;

        case "pt":
            insertText(lang_pt);
            removeClassBody();
            checkUrlSearchLang();
            break;

        case "fr":
            insertText(lang_fr);
            removeClassBody();
            checkUrlSearchLang();
            break;

        default:
            insertText(lang_en);
            addClassBody();
            checkUrlSearchLang();
    }
}