

const data = [
    {
        title: 'Multi-Post Stories',
        techButton: {
            tech1: 'html',
            tech2: 'Boostrap',
            tech3: 'Ruby on rails'
        },
        projImg: './icons_copy/Snapshoot Portfolio.svg',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
        descButton: {
            seeLive: {
                seeLiveTxt: "See Live",
                seeLiveIcon: './icons_copy/seeLive.svg'
            } ,
            seeSource: {
                seeSourceTxt: "See Source",
                seeSourceIcon: "./icons_copy/seeSource.svg"
            }
        }
        
    }
]



const body = document.querySelector("body .body__section main .project__section .card" )
const openPopup1 = document.getElementById("see__project1");
const openPopup2 = document.getElementById("see__project2");
const openPopups = [openPopup1, openPopup2]

for(let popup = 0; popup < openPopups.length; popup++) {
   openPopups[popup].addEventListener("click", () => {
        const mainDiv = document.createElement('div');
    mainDiv.className = 'section';
    const popup = document.createElement('div');
    popup.className = 'popup__section';

    const topContainer = document.createElement("div");
    topContainer.className = "topContainer"

    const close = document.createElement("div");
    close.className = "close"
    const bar1 = document.createElement("div");
     bar1.className = "bar"
    const bar2 = document.createElement("div");
     bar2.className = "bar"
    const bar3 = document.createElement("div");
     bar3.className = "bar"
    
    const tittle = document.createElement("h1");
    tittle.className = "tittle";
    tittle.innerHTML = data[0].title;
    
    const techBtn = document.createElement("div");
    techBtn.className = "technologyButtons";
    const btn1 = document.createElement("button")
    btn1.className = "btn"
    btn1.innerHTML = data[0].techButton.tech1
    const btn2 = document.createElement("button")
    btn2.className = "btn"
    btn2.innerHTML = data[0].techButton.tech2
    btn1.innerHTML = data[0].techButton.tech1
    const btn3 = document.createElement("button")
    btn3.className = "btn"
    btn3.innerHTML = data[0].techButton.tech3

    const popImg = document.createElement("img")
    popImg.className = "popImg"
    popImg.setAttribute('src', data[0].projImg)

    const descContainer = document.createElement("div")
    descContainer.className = "descContainer";

    const description = document.createElement("p");
    description.className = "description"
    description.innerHTML = data[0].description

    const descBtnContainer = document.createElement("div");
    descBtnContainer.className = "descBtnContainer"

    const descButton = document.createElement("div");
    descButton.className = "descButton";
    const seeLive = document.createElement("button");
    seeLive.className = "seeLive";
    seeLive.innerHTML = data[0].descButton.seeLive.seeLiveTxt;
    const seeLiveIcon = document.createElement("img");
    seeLiveIcon.classList = "seeLiveIcon";
    seeLiveIcon.setAttribute("src", data[0].descButton.seeLive.seeLiveIcon)
    

    const seeSource = document.createElement("button");
    seeSource.className = "seeSource";
    seeSource.innerHTML = data[0].descButton.seeSource.seeSourceTxt;
    const seeSourceIcon = document.createElement("img");
    seeSourceIcon.classList = "seeSourceIcon";
    seeSourceIcon.setAttribute("src", data[0].descButton.seeSource.seeSourceIcon)

    topContainer.appendChild(tittle)
    topContainer.appendChild(close)
    close.appendChild(bar1)
    close.appendChild(bar2)
    close.appendChild(bar3)
    popup.appendChild(topContainer)
    popup.appendChild(techBtn)
    techBtn.appendChild(btn1)
    techBtn.appendChild(btn2)
    techBtn.appendChild(btn3)
    popup.appendChild(descContainer)
    descContainer.appendChild(popImg)
    descContainer.appendChild(descBtnContainer)
    descBtnContainer.appendChild(description)
    descBtnContainer.appendChild(descButton)
    descButton.appendChild(seeLive)
    seeLive.appendChild(seeLiveIcon)
    descButton.appendChild(seeSource)
    seeSource.appendChild(seeSourceIcon)
    mainDiv.appendChild(popup)
    body.appendChild(mainDiv)

    close.addEventListener("click", () => {
        mainDiv.remove();
    })
   })
}

