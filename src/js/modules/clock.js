var customClock = {
    init: function() {
        var customClock = $('#header-clock svg');
        if (!customClock) {
            return;
        }
        var dotS = customClock.find('#dots path'),
            dotH = customClock.find('#doth path'),
            sep = customClock.find('#separator'),
            min_1 = customClock.find('#min_1 path'),
            min_2 = customClock.find('#min_2 path'),
            hr_1 = customClock.find('#hr_1 path'),
            hr_2 = customClock.find('#hr_2 path');
        //codes of digits
        var dataNumers = [
            [0, 1, 2, 3, 4, 5, 6, 7, 14, 21, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 27, 20, 13],
            [0, 1, 2, 3, 4, 5, 6],
            [0, 1, 2, 3, 6, 7, 10, 13, 14, 17, 20, 21, 24, 27, 28, 32, 33, 34],
            [0, 1, 2, 4, 5, 6, 7, 10, 13, 14, 17, 20, 21, 24, 27, 28, 34],
            [0, 1, 2, 3, 4, 5, 6, 10, 17, 24, 28, 29, 30, 31],
            [0, 4, 5, 6, 7, 14, 21, 28, 29, 30, 31, 24, 17, 10, 3, 13, 20, 27, 34],
            [0, 4, 5, 6, 7, 14, 21, 28, 29, 30, 31, 24, 17, 10, 3, 13, 20, 27, 34, 33, 32],
            [0, 1, 2, 3, 4, 5, 6, 7, 14, 21, 28],
            [0, 1, 2, 3, 4, 5, 6, 7, 14, 21, 28, 29, 30, 31, 32, 33, 34, 35, 36, 28, 20, 13, 10, 17, 24, 27],
            [0, 1, 2, 3, 4, 5, 6, 7, 14, 21, 28, 29, 30, 31, 35, 36, 27, 20, 13, 10, 17, 24, 34]
        ];

        dotH.css("fill-opacity", "1");
        window.setInterval(function() {
            $(dotS).css("fill-opacity", "0");
            var date = new Date();
            var seconds = date.getSeconds(),
                minutes = date.getMinutes(),
                hours = date.getHours(),
                sec1 = 0,
                sec2 = 0,
                min1 = 0,
                min2 = 0,
                hr1 = 0,
                hr2 = 0;
            if (seconds <= 9) {
                sec1 = seconds;
                sec2 = 0;
            } else {
                sec1 = (seconds + '')[1] * 1;
                sec2 = (seconds + '')[0] * 1;
            }
            if (minutes <= 9) {
                min1 = minutes;
                min2 = 0;
            } else {
                min1 = (minutes + '')[1] * 1;
                min2 = (minutes + '')[0] * 1;
            }
            if (hours <= 9) {
                hr1 = hours;
                hr2 = 0;
            } else {
                hr1 = (hours + '')[1] * 1;
                hr2 = (hours + '')[0] * 1;
            }
            for (var i = 0; i <= seconds; i++) {
                $(dotS[i]).css("fill-opacity", "1");
                if (i % 2) {
                    sep.css("fill-opacity", "1");
                } else {
                    sep.css("fill-opacity", "0");
                }
            }
            drow(min_1, min1);
            drow(min_2, min2);
            drow(hr_1, hr1);
            drow(hr_2, hr2);

        }, 1000);

        function drow(numberEl, value) {
            $(numberEl).css("fill-opacity", "0");
            for (var j = 0; j <= 9; j++) {
                if (j === value) {
                    for (var n = 0; n <= dataNumers[j].length; n++) {
                        $(numberEl[dataNumers[j][n]]).css("fill-opacity", "1");
                    }
                }
            }
        }
    }
};

export default customClock;