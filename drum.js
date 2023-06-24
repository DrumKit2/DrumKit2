
/*let amiii=document.querySelectorAll('.item').length;
for( let i=0;i<amiii;i++)
{
    document.querySelectorAll('.item')[i].addEventListener("click",handclick);

    function handclick()
    {
        alert("heloo");
    }
    

}*/
let amiii=document.querySelectorAll('.item').length;
for( let i=0;i<amiii;i++)
{
    document.querySelectorAll('.item')[i].addEventListener("click",handclick);

    function handclick()
    {
      let audio=new Audio("tom-1.mp3");
      audio.play()
    }
    

}
/*
let amiii=document.querySelectorAll('.item').length;
for( let i=0;i<amiii;i++)
{
    document.querySelectorAll('.item')[i].addEventListener("click",handclick);

    function handclick()
    {
        this.style.color="orange";
    

}

}
/*
let amiii=document.querySelectorAll('.item').length;
for( let i=0;i<amiii;i++)
{
    document.querySelectorAll('.item')[i].addEventListener("click",handclick);

    function handclick()
    {
        let Buttonss=this.innerHTML;
        switch(Buttonss)
        {
            case "w":
                this.style.color="red";
                break;

                case "a":
               let a=new Audio("tom-3.mp3");
                a.play()
                break;
                
        
                case "s":
        
               let s=new Audio("tom-4.mp3");
                audio.play()
                    break;
                    
                    case "d":
                        this.style.color="blue";
                        break;
                        
                        case "j":
                            let j=new Audio("tom-1.mp3");
                           j.play()
                            
      
                           
                            
                    default:
                        this.style.color="red";
                        break;
        }
                
            
        


        }
    

}

*/
setInterval(updateTime,2000);
    
    function updateTime(){
        time.innerHTML=new Date;
    }
