const textarea=document.querySelector('.text-area');
const char_element= document.querySelector(".char-number")
const twitter_element= document.querySelector(".twitter-number")
const insta_element= document.querySelector(".insta-number")
const word_element= document.querySelector('.word-number');

let x_char_limit=280;
let insta_char_limit=2200;

//chamhge the color fun
const colorChange=(name,count)=>{
    if(name==="twitter"){
        if(count>280){
            twitter_element.classList.add('change-color');
            //insta_element.classList.add('change-color');
        }
        else{
            twitter_element.classList.remove('change-color');
        }
    }
    else    {
        if(count>2200){
            //twitter_element.classList.add('change-color');
            insta_element.classList.add('change-color');
        }
        else{
            insta_element.classList.remove('change-color');
        }
    }
    
}


const charCounter=(e)=>{
    // console.log(e.target.value);
    char_element.innerText=e.target.value.length;
}

const twitterCounter=(e)=>{ 
    // console.log(e.target.value);
    twitter_element.innerText=x_char_limit-e.target.value.length;
    colorChange("twitter",e.target.value.length);
}

const instaCounter=(e)=>{ 
    // console.log(e.target.value);
    insta_element.innerText=insta_char_limit-e.target.value.length;
    colorChange("instagram",e.target.value.length);
}

textarea.addEventListener("input",(e)=>{
    charCounter(e);
    twitterCounter(e);
    instaCounter(e);
    wordcounter(e);
})


let space_number=0;

const wordcounter=(e)=>{
    let str=e.target.value;
    str= str.trim();
    if(str===""){
        space_number=0;
    }
    else if(str.indexOf(" ")=== -1){
            space_number=1;
        }
    
    else{
        const words= str.split(/\s+/);
        space_number=words.length;
    }
    //str= str.split(' ');
    console.log(str.length)
    word_element.innerText=space_number;



}