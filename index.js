//Main Function.
var P1rollvalue = roll();
var P2rollvalue = roll();

//Change Image for Player 1
    if(P1rollvalue == 1 || P1rollvalue == 0)
    {
        document.querySelector("img.p1").setAttribute('src','./images/dice1.png');
    }
    else if(P1rollvalue == 2)
    {
        document.querySelector("img.p1").setAttribute('src','./images/dice2.png');
    }
    else if(P1rollvalue == 3)
    {
        document.querySelector("img.p1").setAttribute('src','./images/dice3.png');
    }
    else if(P1rollvalue == 4)
    {
        document.querySelector("img.p1").setAttribute('src','./images/dice4.png');
    }
    else if(P1rollvalue == 5)
    {
        document.querySelector("img.p1").setAttribute('src','./images/dice5.png');
    }
    else if(P1rollvalue == 6)
    {
        document.querySelector("img.p1").setAttribute('src','./images/dice6.png');
    }


//Change Image for Player 2
    if(P2rollvalue == 1 || P2rollvalue == 0)
    {
        document.querySelector("img.p2").setAttribute('src','./images/dice1.png');
    }
    else if(P2rollvalue == 2)
    {
        document.querySelector("img.p2").setAttribute('src','./images/dice2.png');
    }
    else if(P2rollvalue == 3)
    {
        document.querySelector("img.p2").setAttribute('src','./images/dice3.png');
    }
    else if(P2rollvalue == 4)
    {
        document.querySelector("img.p2").setAttribute('src','./images/dice4.png');
    }
    else if(P2rollvalue == 5)
    {
        document.querySelector("img.p2").setAttribute('src','./images/dice5.png');
    }
    else if(P2rollvalue == 6)
    {
        document.querySelector("img.p2").setAttribute('src','./images/dice6.png');
    }

//Check For Winner: 
    if(P2rollvalue == P1rollvalue)
    {
        document.querySelector("p").innerHTML = "<h2>It is a Draw!!</h2>";
    }
    else if(P2rollvalue > P1rollvalue)
    {
        document.querySelector("p").innerHTML = "<h2>P2 Wins!</h2>";
    }
    else if(P2rollvalue < P1rollvalue)
    {
        document.querySelector("p").innerHTML = "<h2>P1 Wins!</h2>";
    }

//Random Number Function:

function roll()
{
    var value = Math.floor(Math.random() * 7)
    return value;
}