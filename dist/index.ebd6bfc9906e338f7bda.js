/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/json/en.json
const en_namespaceObject = JSON.parse('{"Get Unlimited <br>Access":"Get Unlimited <br>Access","Unlimited Art <br>Creation":"Unlimited Art <br>Creation","Exclusive <br>Styles":"Exclusive <br>Styles","Magic Avatars <br>With 20% Off":"Magic Avatars <br>With 20% Off","YEARLY ACCESS":"YEARLY ACCESS","BEST OFFER":"BEST OFFER","Just {{price}} per year":"Just {{price}} per year","WEEKLY ACCESS":"WEEKLY ACCESS","{{price}} <br>per week":"{{price}} <br>per week","Terms of Use":"Terms of Use","Privacy Policy":"Privacy Policy","Restore":"Restore","Continue":"Continue"}');
;// CONCATENATED MODULE: ./src/json/de.json
const de_namespaceObject = JSON.parse('{"Get Unlimited <br>Access":"Erhalten Sie unbegrenzten <br>Zugriff","Unlimited Art <br>Creation":"Unbegrenzte <br>Kunstschaffung","Exclusive <br>Styles":"Exklusive <br>Stile","Magic Avatars <br>With 20% Off":"20 % Rabatt auf <br>KI-Avatare","YEARLY ACCESS":"JÄHRLICHER ZUGRIFF","BEST OFFER":"BESTES ANGEBOT","Just {{price}} per year":"Nur {{price}} pro Jahr","WEEKLY ACCESS":"WÖCHENTLICHER ZUGRIFF","{{price}} <br>per week":"{{price}} <br>pro Woche","Terms of Use":"Nutzungsbedingungen","Privacy Policy":"Datenschutzrichtlinie","Restore":"Wiederherstellen","Continue":"Weiter"}');
;// CONCATENATED MODULE: ./src/json/es.json
const es_namespaceObject = JSON.parse('{"Get Unlimited <br>Access":"Obtén acceso <br>ilimitado","Unlimited Art <br>Creation":"Ilimitada creación <br>de arte","Exclusive <br>Styles":"Estilos <br>exclusivos","Magic Avatars <br>With 20% Off":"20 % de descuento en <br>avatares de IA","YEARLY ACCESS":"ACCESO ANUAL","BEST OFFER":"MEJOR OFERTA","Just {{price}} per year":"Solo {{price}} por año","WEEKLY ACCESS":"ACCESO SEMANAL","{{price}} <br>per week":"{{price}} <br>por semana","Terms of Use":"Términos de uso","Privacy Policy":"Política de privacidad","Restore":"Restaurar","Continue":"Continuar"}');
;// CONCATENATED MODULE: ./src/json/ja.json
const ja_namespaceObject = JSON.parse('{"Get Unlimited <br>Access":"無制限アクセス<br>を入手","Unlimited Art <br>Creation":"アート作品を<br>無制限に創造","Exclusive <br>Styles":"特別な<br>スタイル","Magic Avatars <br>With 20% Off":"AIアバターが<br>20%オフ","YEARLY ACCESS":"年間アクセス","BEST OFFER":"ベストオファー","Just {{price}} per year":"わずか{{price}}/年","WEEKLY ACCESS":"週ごとのアクセス","{{price}} <br>per week":"{{price}}/週<br>","Terms of Use":"利用規約","Privacy Policy":"プライバシーポリシー","Restore":"復元する","Continue":"続行する"}');
;// CONCATENATED MODULE: ./src/json/pt.json
const pt_namespaceObject = JSON.parse('{"Get Unlimited <br>Access":"Obtenha Acesso <br>Ilimitado","Unlimited Art <br>Creation":"Criação de Arte <br>Ilimitada","Exclusive <br>Styles":"Estilos <br>Exclusivos","Magic Avatars <br>With 20% Off":"20% de Desconto em <br>Avatares de IA","YEARLY ACCESS":"ACESSO ANUAL","BEST OFFER":"MELHOR OFERTA","Just {{price}} per year":"Apenas {{price}} por ano","WEEKLY ACCESS":"ACESSO SEMANAL","{{price}} <br>per week":"{{price}} <br>por semana","Terms of Use":"Termos de Uso","Privacy Policy":"Política de Privacidade","Restore":"Restaurar","Continue":"Continuar"}');
;// CONCATENATED MODULE: ./src/json/fr.json
const fr_namespaceObject = JSON.parse('{"Get Unlimited <br>Access":"Obtenez un accès <br>illimité","Unlimited Art <br>Creation":"Création artistique <br>illimitée","Exclusive <br>Styles":"Styles <br>exclusifs","Magic Avatars <br>With 20% Off":"20&nbsp;% de réduction <br>sur les avatars IA","YEARLY ACCESS":"ACCÈS ANNUEL","BEST OFFER":"MEILLEURE OFFRE","Just {{price}} per year":"Seulement {{price}} par an","WEEKLY ACCESS":"ACCÈS HEBDOMADAIRE","{{price}} <br>per week":"{{price}} <br>par semaine","Terms of Use":"Conditions d’utilisation","Privacy Policy":"Politique de confidentialité","Restore":"Restaurer","Continue":"Continuer"}');
;// CONCATENATED MODULE: ./src/index.js







window.onload = function () {
  var bannerTitle = document.querySelector('.banner__title');
  var cardItem = document.getElementsByClassName('banner__card-item');
  var selectorItem = document.getElementsByClassName('banner__selector-item');
  var selectorInput = document.getElementsByClassName('banner__selector-radio');
  var selectorLink = document.querySelector('.banner__selector-link');
  var bannerLink = document.getElementsByClassName('banner__link');
  selectorLink.onclick = function () {
    for (var i = 0; i < selectorInput.length; i++) {
      if (selectorInput[i].type == "radio" && selectorInput[i].checked) {
        this.setAttribute('href', selectorInput[i].value);
      }
    }
  };
  function addClassBody() {
    document.body.classList.add('lang-en');
  }
  function removeClassBody() {
    document.body.classList.remove('lang-en');
  }
  function insertText(lang_text) {
    var langTextArr = Object.entries(lang_text);
    var price = {
      year: '$39.99',
      week_yearly: '$0.48',
      week_weekly: '$6.99'
    };
    bannerTitle.innerHTML = langTextArr[0][1];
    cardItem[0].querySelector('.banner__card-item-text').innerHTML = langTextArr[1][1];
    cardItem[1].querySelector('.banner__card-item-text').innerHTML = langTextArr[2][1];
    cardItem[2].querySelector('.banner__card-item-text').innerHTML = langTextArr[3][1];
    selectorItem[0].querySelector('.banner__selector-title').innerHTML = langTextArr[4][1];
    selectorItem[0].querySelector('.banner__selector-label').innerHTML = langTextArr[5][1];
    selectorItem[0].getElementsByClassName('banner__selector-radio-label-col')[0].querySelector('.banner__selector-text').innerHTML = langTextArr[6][1].replace(/{{price}}/g, price.year);
    selectorItem[0].getElementsByClassName('banner__selector-radio-label-col')[1].querySelector('.banner__selector-text').innerHTML = langTextArr[8][1].replace(/{{price}}/g, price.week_yearly);
    selectorItem[1].querySelector('.banner__selector-title').innerHTML = langTextArr[7][1];
    selectorItem[1].querySelector('.banner__selector-text').innerHTML = langTextArr[8][1].replace(/{{price}}/g, price.week_weekly);
    selectorLink.innerHTML = langTextArr[12][1];
    bannerLink[0].innerHTML = langTextArr[9][1];
    bannerLink[1].innerHTML = langTextArr[10][1];
    bannerLink[2].innerHTML = langTextArr[11][1];
  }
  function checkUrlSearchLang() {
    if (urlSearchLang == 'en') {
      insertText(en_namespaceObject);
      addClassBody();
    } else if (urlSearchLang == 'de') {
      insertText(de_namespaceObject);
      removeClassBody();
    } else if (urlSearchLang == 'es') {
      insertText(es_namespaceObject);
      removeClassBody();
    } else if (urlSearchLang == 'ja') {
      insertText(ja_namespaceObject);
      removeClassBody();
    } else if (urlSearchLang == 'pt') {
      insertText(pt_namespaceObject);
      removeClassBody();
    } else if (urlSearchLang == 'fr') {
      insertText(fr_namespaceObject);
      removeClassBody();
    }
  }
  var language = window.navigator.language;
  var languageFistTwo = language.substring(0, 2);
  var urlSearchLang = window.location.search.substring(6);
  switch (languageFistTwo) {
    case "en":
      insertText(en_namespaceObject);
      addClassBody();
      checkUrlSearchLang();
      break;
    case "de":
      insertText(de_namespaceObject);
      removeClassBody();
      checkUrlSearchLang();
      break;
    case "es":
      insertText(es_namespaceObject);
      removeClassBody();
      checkUrlSearchLang();
      break;
    case "ja":
      insertText(ja_namespaceObject);
      removeClassBody();
      checkUrlSearchLang();
      break;
    case "pt":
      insertText(pt_namespaceObject);
      removeClassBody();
      checkUrlSearchLang();
      break;
    case "fr":
      insertText(fr_namespaceObject);
      removeClassBody();
      checkUrlSearchLang();
      break;
    default:
      insertText(en_namespaceObject);
      addClassBody();
      checkUrlSearchLang();
  }
};
/******/ })()
;