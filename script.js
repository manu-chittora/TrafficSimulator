var i=0;
var redtime=0, yellowtime=0, greentime=0;
var arr=["red", "yellow", "green"];
function fun(){
    console.log("ok");
    var l=document.getElementsByClassName('light');
    for(var j=0; j<l.length; j++)
    {
        l[j].style.background="black";
    }

    if(redtime<19)
    {
        redtime++;
        l[0].style.background=arr[0];
    }
    else
    {
        if(greentime<15)
        {
            greentime++;
            l[2].style.background=arr[2];
        }
        else
        {
            if(yellowtime<5)
            {
                yellowtime++;
                l[1].style.background=arr[1];
            }
            else
            {
                l[0].style.background=arr[0];
                redtime=0;
                greentime=0;
                yellowtime=0;
                
            }
        }
    }
}
setInterval(fun, 1000);