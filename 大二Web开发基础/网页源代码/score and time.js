var starttime1 = 0;
        var starttime2 = 0;
        var starttime3 = 0;
        var starttime4 = 0;
        var starttime5 = 0;
        var starttime6 = 0;
        var final = 0;
        function qishi() {
            starttime5 = new Date();
            starttime1 = starttime5.getMinutes();
            starttime2 = starttime5.getSeconds();
        }
        function score() {
            starttime6 = new Date();
            var yourscore = 0;
            var obj = document.getElementsByName("aa");
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].checked) {
                    yourscore += Number(obj[i].value);
                    break;
                }
            }
            var obj1 = document.getElementsByName("bb");
            for (var i = 0; i < obj1.length; i++) {
                if (obj1[i].checked) {
                    yourscore += Number(obj1[i].value);
                    break;
                }
            }
            var obj2 = document.getElementsByName("cc");
            for (var i = 0; i < obj2.length; i++) {
                if (obj2[i].checked) {
                    yourscore += Number(obj2[i].value);
                    break;
                }
            }
            var obj3 = document.getElementsByName("dd");
            for (var i = 0; i < obj3.length; i++) {
                if (obj3[i].checked) {
                    yourscore += Number(obj3[i].value);
                    break;
                }
            }
            var obj4 = document.getElementsByName("ee");
            for (var i = 0; i < obj4.length; i++) {
                if (obj4[i].checked) {
                    yourscore += Number(obj4[i].value);
                    break;
                }
            }
            var obj5 = document.getElementsByName("ff");
            for (var i = 0; i < obj5.length; i++) {
                if (obj5[i].checked) {
                    yourscore += Number(obj5[i].value);
                    break;
                }
            }
            var puanduan = 0;
            final = yourscore;
            var obj6 = document.getElementsByName("gg");
            for (var i = 0; i < obj6.length; i++) {
                if (obj6[i].checked) {
                    if (obj6[i].value == 0) {
                        puanduan = 1;
                        break;
                    }
                    else {
                        yourscore += Number(obj6[i].value);
                    }
                }
            }
            if (puanduan == 1) {
                yourscore = final;
            }
            else {
                final = yourscore;
            }
            puanduan = 0;
            var obj7 = document.getElementsByName("hh");
            for (var i = 0; i < obj7.length; i++) {
                if (obj7[i].checked) {
                    if (obj7[i].value == 0) {
                        puanduan = 1;
                        break;
                    }
                    else {
                        yourscore += Number(obj7[i].value);
                    }
                }
            }
            if (puanduan == 1) {
                yourscore = final;
            }
            else {
                final = yourscore;
            }
            puanduan = 0;
            var obj8 = document.getElementsByName("ii");
            for (var i = 0; i < obj8.length; i++) {
                if (obj8[i].checked) {
                    if (obj8[i].value == 0) {
                        puanduan = 1;
                        break;
                    }
                    else {
                        yourscore += Number(obj8[i].value);
                    }
                }
            }
            if (puanduan == 1) {
                yourscore = final;
            }
            else {
                final = yourscore;
            }
            puanduan = 0;
            var obj9 = document.getElementsByName("jj");
            for (var i = 0; i < obj8.length; i++) {
                if (obj9[i].checked) {
                    if (obj9[i].value == 0) {
                        puanduan = 1;
                        break;
                    }
                    else {
                        yourscore += Number(obj9[i].value);
                    }
                }
            }
            if (puanduan == 1) {
                yourscore = final;
            }
            else {
                final = yourscore;
            }
            puanduan = 0;
            String(final);
            starttime3 = starttime6.getMinutes();
            starttime4 = starttime6.getSeconds();
            var shijian = "你的所用时间: "
            var shi1 = 0;
            var shi2 = starttime3 - starttime1;
            if( starttime4 > starttime2  )
            {
                shi1=starttime4-starttime2;
            }
            else
            {
                shi1=starttime4-starttime2+60;
                shi2=shi2-1;
            }
            var yongshi = shi2 + "分" + shi1 + "秒";
            var wenben = "你的最终得分: ";
            document.getElementById("shu").value = final;
            alert(wenben + final + "\n" + shijian + yongshi);
            
        }
        function startTime() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            h = checkTime(h);
            if (h >= 0 && h <= 12) {
                document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
                document.getElementById('wenhou').innerHTML = "早上好!";
            }
            else if (h <= 18 && h > 12) {
                document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
                document.getElementById('wenhou').innerHTML = "下午好!";
            }
            else if (h > 18 && h <= 24) {
                document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
                document.getElementById('wenhou').innerHTML = "晚上好!";
            }
            t = setTimeout(function () { startTime() }, 500);
            function checkTime(i) {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            }
        }