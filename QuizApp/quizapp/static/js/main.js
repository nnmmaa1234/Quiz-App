$(document).ready(function(){
    $("#q1a,#q1b,#q1c,#q1d,#q2a,#q2d,#q2c,#q2b,#q3a,#q3b,#q3c,#q3d,#q4a,#q4b,#q4c,#q4d,#q5a,#q5b,#q5c,#q5d,#q6a,#q6d,#q6c,#q6b,#q7a,#q7b,#q7c,#q7d").click(function() {
        $(this).toggleClass("toggled");
        if($(this).hasClass("toggled")){
            $('.qq').not(this).removeClass("toggled");
        }
    });

    var points = [];
    $("#q1b,#q2d,#q3a,#q4c,#q5b,#q6a,#q7c").click(function result() {
        if($(this).hasClass("toggled")){
            points.push(1);
            console.log(points);
        } else {
            points.pop();
            console.log(points);
        }
        var score = points.length;
        document.getElementById('score').innerHTML = `${score} / 7`;

        // $.ajax({
        //     method: 'post',
        //     url: endpoint,
        //     data: {
        //         'score': score,
        //         'csrfmiddlewaretoken': csrfmiddlewaretoken
        //     },
        //     success: function(data) {
        //         console.log('your score is saved in the database'); 
        //     },
        //     error: function(error) {
        //         console.log(error);
        //         // or something else
        //     }
        // });
        
        if(score == 7){document.getElementById('comment').innerHTML = 'CONGRATULATIONS!!! You got full score.';}
        if(score < 7 && score >= 4){document.getElementById('comment').innerHTML = 'Great Gob!';}
        if(score < 4){document.getElementById('comment').innerHTML = 'Don\'t worry! You need to work harder.';}
    });
});


function switchVisible1() {
    if (document.getElementById('q1')) {

        if (document.getElementById('q2').style.display == 'none') {
            document.getElementById('q2').style.display = 'block';
            document.getElementById('q1').style.display = 'none';
        }
        else {
            document.getElementById('q2').style.display = 'none';
            document.getElementById('q1').style.display = 'block';
        }
    }    
}

function switchVisible2() {
    if (document.getElementById('q2')) {

        if (document.getElementById('q3').style.display == 'none') {
            document.getElementById('q3').style.display = 'block';
            document.getElementById('q2').style.display = 'none';
        }
        else {
            document.getElementById('q3').style.display = 'none';
            document.getElementById('q2').style.display = 'block';
        }
    }
}

function switchVisible3() {
    if (document.getElementById('q3')) {

        if (document.getElementById('q4').style.display == 'none') {
            document.getElementById('q4').style.display = 'block';
            document.getElementById('q3').style.display = 'none';
        }
        else {
            document.getElementById('q4').style.display = 'none';
            document.getElementById('q3').style.display = 'block';
        }
    }
}

function switchVisible4() {
    if (document.getElementById('q4')) {

        if (document.getElementById('q5').style.display == 'none') {
            document.getElementById('q5').style.display = 'block';
            document.getElementById('q4').style.display = 'none';
        }
        else {
            document.getElementById('q5').style.display = 'none';
            document.getElementById('q4').style.display = 'block';
        }
    }
}

function switchVisible5() {
    if (document.getElementById('q5')) {

        if (document.getElementById('q6').style.display == 'none') {
            document.getElementById('q6').style.display = 'block';
            document.getElementById('q5').style.display = 'none';
        }
        else {
            document.getElementById('q6').style.display = 'none';
            document.getElementById('q5').style.display = 'block';
        }
    }
}

function switchVisible6() {
    if (document.getElementById('q6')) {

        if (document.getElementById('q7').style.display == 'none') {
            document.getElementById('q7').style.display = 'block';
            document.getElementById('q6').style.display = 'none';
        }
        else {
            document.getElementById('q7').style.display = 'none';
            document.getElementById('q6').style.display = 'block';
        }
    }
}
  
function switchVisible7() {
    if (document.getElementById('q7')) {

        if (document.getElementById('q8').style.display == 'none') {
            document.getElementById('q8').style.display = 'block';
            document.getElementById('q7').style.display = 'none';
        }
        else {
            document.getElementById('q8').style.display = 'none';
            document.getElementById('q7').style.display = 'block';
        }
    }
}