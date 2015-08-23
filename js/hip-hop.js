function changeBackground(){

    var photo_num = Math.floor((Math.random() * 40) + 1);


    var photo_str ="assets/img/"+photo_num+".jpg";

    document.getElementById("background_image").style.background = "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.5)), url("+photo_str+") no-repeat center center fixed"; 
    document.getElementById("background_image").style.backgroundSize ="cover";


    var iOS = /iPad|iPhone|iPod/.test(navigator.platform);

    if(iOS){
        document.getElementById("background_image").style.cssText = "position: fixed; top: 0; left: 0; min-width: 100%; min-height: 100%;"
    }



    changeQuote();

}


function changeQuote(){

    var nicki_text = [
    "My advice to women in general: Even if you're doing a nine-to-five job, treat yourself like a boss. Not arrogant, but be sure of what you want - and don't allow people to run anything for you without your knowledge.",
    "Maybe your weird is my normal. Who's to say?",
    "My happiness doesn't come from money or fame. My happiness comes from seeing life without struggle.",
    "People face difficulties, no matter who you are. I faced difficulties with a lot of things. I face opposition every day, but I didn't kill myself and now, thank God, I'm here.",
    "I don't mind being called a weirdo. There are a lot of people in hip-hop who are probably never going to get what I do. But, by just being myself, I end up touching a lot more people who might never have paid much attention to a female rapper.",
    "I can't see myself without pink lipstick. I can go without it for a couple days, but if there was no more pink lipstick in the world, I'd be useless. Seriously.",
    "You have to know that as long as you love who you are - your morals, your values, that type of stuff - you're OK.",
    "I want to show little girls that the possibilities are endless. That's my goal - to not only do it for myself, but to show them I can do whatever I put my mind to.",
    "I think a child may be the only thing that could give me true happiness.",
    "I do have a few personalities. When people started making a big deal out of it, I started making names for these people.",
    "When I was younger I didn't have much financially, like we couldn't afford a lot of stuff and I remember seeing little girls' rooms on TV and they'd all be pink. I didn't have my own room, I shared with my brother, so I would have this daydream and imagine that one day I could have my own room and it would all be pink, like Cinderella's.",
    "You wanna know what scares people? Success. When you don't make moves and when you don't climb up the ladder, everybody loves you because you're not competition.",
    "People always want to talk about who I was, but I've always been singing, always been experimenting with pop music.",
    "I vowed that I'd never allow any man to control me or to be an alcoholic or anything like that around me, because I don't want my children seeing that.",
    "I don't want children cursing. I'm very strict on my nieces and my little brother. They have to listen to clean versions of music. Even my music.",
    "I want people - especially young girls - to know that in life, nothing is going to be based on sex appeal. You've got to have something else to go with that.",
    "I don't need to Google myself.",
    "I think sometimes the fashion world isn't even about clothes anymore; it's about this 'in' crowd, and I'm not into that.",
    "Lemme make this clear I'm not difficult, I'm just 'bout my business.",
    "I am a rap legend, just go ask the kings of rap, Who is the queen and things of that.",
    "I came out lookin to party and now I'm owning that building You can't get my spot until I start raisin some children.",
    "Ya'll  ain't got punchlines or flow I have both, and an empire, also.",
    "I'm not into fake industry parties, and fake agendas.",
    "Couldn't test me even if their name was Pop Quiz.",
    "Here we go again, it's the game we love.",
    "True confidence leaves no room for jealousy. When you know your are great, you have no need to hate.",
    "I'mma just do me, when it feel right.",
    "Greatness is what we on the brink of.",
    "Cause I'm still hood, Hollywood couldn't change me.",
    "And yes I call the shots, I am the umpire.",
    "I believe that life is a prize, but to live doesn't mean you're alive.",
    "I fly with the stars in the skies.",
    "All these haters mad because I'm so established They know I'm a beast yeah I'm a savage.",
    "I feel free, I feel freedom Why they mad? You should see them Burn an L cause it's crazy in here Crazy in here, crazy in here.",
    "Starships were meant to fly Hands up and touch the sky Can't stop cause we're so high Let's do this one more time.",
    "Cause I pull up and I'm stuntin but I ain't a stuntman Yes I'm rockin Jordans but I ain't a jumpman.",
    "Yo, I had to reinvent, I put the V in-vent put the heat in vents, man, I've been competing since.",
    "I feel one minute, yeah, we got it then it's gone While we keep waiting for a moment to live for.",
    "This is what I gotta do to keep me from falling Stalling the truth, who knew what you'd do, if I let you in?",
    "Ain't no cruise control, you 'bout to lose control Ain't no smilin' faces here, we slammin' doors and dishes.",
    "I'm losin' a thing I thought I'd win And I'm coming undone, cause the tears don't end.",
    "You got that legendary, this is fake, scary Got me seein' them fireworks, I'm on my Kate Perry.",
    "I just figured if you saw me, if you looked in my eyes You'd remember our connection and be freed from the lies.",
    "Live in the present, that gift is for the gifted.",
    "I ain't never need a man, to take care of me."
    ];

    var nickibar_length = nicki_text.length;

    var text_num = Math.floor((Math.random() * nickibar_length) );


    document.getElementById("nicki_text").innerHTML = nicki_text[text_num];






}


