import Zuck from "zuck.js"
import {getThemeValue} from '../functions';
function getThemeValue(){
    const themeValue = window.sessionStorage.getItem('night');
    return JSON.parse(themeValue);
}
var initDemo = function () {
    var header = document.getElementById("header");
    var skin = location.href.split('skin=')[1];

    if (!skin) {
        skin = 'Snapgram';
    }

    if (skin.indexOf('#') !== -1) {
        skin = skin.split('#')[0];
    }

    var skins = {
        'Snapgram': {
            'avatars': true,
            'list': false,
            'autoFullScreen': false,
            'cubeEffect': true
        },

        'VemDeZAP': {
            'avatars': false,
            'list': true,
            'autoFullScreen': false,
            'cubeEffect': false
        },

        'FaceSnap': {
            'avatars': true,
            'list': false,
            'autoFullScreen': true,
            'cubeEffect': false
        },

        'Snapssenger': {
            'avatars': false,
            'list': false,
            'autoFullScreen': false,
            'cubeEffect': false
        }
    };

    var timeIndex = 0;
    var shifts = [35, 60, 60 * 3, 60 * 60 * 2, 60 * 60 * 25, 60 * 60 * 24 * 4, 60 * 60 * 24 * 10];
    var timestamp = function () {
        var now = new Date();
        var shift = shifts[timeIndex++] || 0;
        var date = new Date(now - shift * 1000);

        return date.getTime() / 1000;
    };


    const myTheme = getThemeValue();
  console.log(myTheme);
  var stories = new Zuck('stories', {
        backNative: true,
        previousTap: true,
        autoFullScreen: false,
        skin: skin,
        avatars: skins[skin]['avatars'],
        list: skins[skin]['list'],
        cubeEffect: skins[skin]['cubeEffect'],
        localStorage: false,
        backButton: true,
        stories: [
            {
                id: "1",
                photo: myTheme?"./img/1stW.png":"./img/1stD.png",
                name: "Дипломы",
                link: "",
                lastUpdated: '',
                items: [
                    Zuck.buildItem("ramon-1", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", '', false, false,),
                    Zuck.buildItem("ramon-3", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png", '', 'Дипломы', false,)
                ]
            },
            {
                id: "2",
                photo: myTheme?"./img/2stW.png":"./img/2stD.png",
                name: "Прайс",
                link: "",
                lastUpdated: "",
                items: [
                    Zuck.buildItem("gorillaz-2", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg", '', false, false, ''),
                ]
            },
            {
                id: "3",
                photo: myTheme?"./img/3stW.png":"./img/3stD.png",
                name: "Специалисты",
                link: "",
                lastUpdated: "",
                items: [
                    Zuck.buildItem("ladygaga-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", '', false, false, ''),
                    Zuck.buildItem("ladygaga-2", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg", '', false, false, ''),
                ]
            },
            {
                id: "4",
                photo: myTheme?"./img/4stW.png":"./img/4stD.png",
                name: "Акции",
                link: "",
                lastUpdated: "",
                items: [
                    Zuck.buildItem("starboy-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", '', false, false, '')
                ]
            },
            {
                id: "5",
                photo: myTheme?"./img/5stW.png":"./img/5stD.png",
                name: "Контакты",
                link: "",
                lastUpdated: '',
                items: [
                    Zuck.buildItem("riverscuomo", "photo", 10, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg", '', false, false, '')
                ]
            }
        ]
    });

    var el = document.querySelectorAll('#skin option');
    var total = el.length;
    for (var i = 0; i < total; i++) {
        var what = (skin == el[i].value) ? true : false;

        if (what) {
            el[i].setAttribute('selected', what);

            header.innerHTML = skin;
            header.className = skin;
        } else {
            el[i].removeAttribute('selected');
        }
    }

};


if ($(window).width() < 992) {
    initDemo();
}