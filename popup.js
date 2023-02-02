const openPopup1 = document.querySelector('.see__project1');
const openPopup2 = document.getElementById('see__project2');
const openPopup3 = document.getElementById('see__project3');
const openPopup4 = document.getElementById('see__project4');
const openPopup5 = document.getElementById('see__project5');
const openPopup6 = document.getElementById('see__project6');
const openPopup7 = document.getElementById('see__project7');

const openPopups = [
  openPopup2,
  openPopup3,
  openPopup4,
  openPopup5,
  openPopup6,
  openPopup7,
];


const body = document.querySelector(
  'body .body__section main .project__section .card',
);

const data = [
  {
    title: 'Multi-Post Stories',
    techButton: {
      tech1: 'html',
      tech2: 'Boostrap',
      tech3: 'Ruby on rails',
    },
    projImg: './icons_copy/Snapshoot Portfolio.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    descButton: {
      seeLive: {
        seeLiveTxt: 'See Live',
        seeLiveIcon: './icons_copy/seeLive.svg',
      },
      seeSource: {
        seeSourceTxt: 'See Source',
        seeSourceIcon: './icons_copy/seeSource.svg',
      },
    },
  },
  {
    projectTitile: {
      title: 'My Recent Works',
      titleBar: './icons_copy/Vectortitle.svg',
    },
    story: {
      storyImg: './icons_copy/ImgPlaceholder.svg',
    },
    storyProjectBtn: 'See Project',
  },
];

const projectiSection = document.querySelector(
  'body .body__section main .card ',
);


const titleDiv = document.createElement('div');
titleDiv.className = 'titleDiv';

const projectTitile = document.createElement('h2');
projectTitile.className = 'projectTitle';
projectTitile.innerHTML = data[1].projectTitile.title;
const titleBar = document.createElement('img');
titleBar.className = 'titleBar';
titleBar.setAttribute('src', data[1].projectTitile.titleBar);

const storyDiv = document.createElement('div');
storyDiv.className = 'storyDiv';
const storyImg = document.createElement('img');
storyImg.className = 'storyImg';
storyImg.setAttribute('src', data[1].story.storyImg);

const multiStoryDiv = document.createElement('div');
multiStoryDiv.className = 'multiStoryDiv';
const multiStoryTitle = document.createElement('h3');
multiStoryTitle.className = 'multiStoryTitle';
multiStoryTitle.innerHTML = data[0].title;
const multiStoryPara = document.createElement('p');
multiStoryPara.className = 'multiStoryPara';
multiStoryPara.innerHTML = data[0].description;

const storyBtnDiv = document.createElement('div');
storyBtnDiv.classList = 'storyBtnDiv';

const storyBtn1 = document.createElement('button');
storyBtn1.className = 'storyBtn';
storyBtn1.innerHTML = data[0].techButton.tech1;

const storyBtn2 = document.createElement('button');
storyBtn2.className = 'storyBtn';
storyBtn2.innerHTML = data[0].techButton.tech2;

const storyBtn3 = document.createElement('button');
storyBtn3.className = 'storyBtn';
storyBtn3.innerHTML = data[0].techButton.tech3;

const storyProjectBtn = document.createElement('button');
storyProjectBtn.className = 'storyProjectBtn';
storyProjectBtn.id = 'see__project1';
storyProjectBtn.innerHTML = data[1].storyProjectBtn;

titleDiv.appendChild(projectTitile);
titleDiv.appendChild(titleBar);
projectiSection.appendChild(titleDiv);
projectiSection.appendChild(storyDiv);
storyDiv.appendChild(storyImg);
storyDiv.appendChild(multiStoryDiv);
multiStoryDiv.appendChild(multiStoryTitle);
multiStoryDiv.appendChild(multiStoryPara);
multiStoryDiv.appendChild(storyBtnDiv);
multiStoryDiv.appendChild(storyBtnDiv);
storyBtnDiv.appendChild(storyBtn1);
storyBtnDiv.appendChild(storyBtn2);
storyBtnDiv.appendChild(storyBtn3);
multiStoryDiv.appendChild(storyProjectBtn);

for (let popup = 0; popup < openPopups.length; popup += 1) {
  openPopups[popup].addEventListener('click', () => {
    const mainDiv = document.createElement('div');
    mainDiv.className = 'section';
    const popup = document.createElement('div');
    popup.className = 'popup__section';

    const topContainer = document.createElement('div');
    topContainer.className = 'topContainer';

    const close = document.createElement('div');
    close.className = 'close';
    const bar1 = document.createElement('div');
    bar1.className = 'bar';
    const bar2 = document.createElement('div');
    bar2.className = 'bar';
    const bar3 = document.createElement('div');
    bar3.className = 'bar';

    const tittle = document.createElement('h1');
    tittle.className = 'tittle';
    tittle.innerHTML = data[0].title;

    const techBtn = document.createElement('div');
    techBtn.className = 'technologyButtons';
    const btn1 = document.createElement('button');
    btn1.className = 'btn';
    btn1.innerHTML = data[0].techButton.tech1;
    const btn2 = document.createElement('button');
    btn2.className = 'btn';
    btn2.innerHTML = data[0].techButton.tech2;
    btn1.innerHTML = data[0].techButton.tech1;
    const btn3 = document.createElement('button');
    btn3.className = 'btn';
    btn3.innerHTML = data[0].techButton.tech3;

    const popImg = document.createElement('img');
    popImg.className = 'popImg';
    popImg.setAttribute('src', data[0].projImg);

    const descContainer = document.createElement('div');
    descContainer.className = 'descContainer';

    const description = document.createElement('p');
    description.className = 'description';
    description.innerHTML = data[0].description;

    const descBtnContainer = document.createElement('div');
    descBtnContainer.className = 'descBtnContainer';

    const descButton = document.createElement('div');
    descButton.className = 'descButton';
    const seeLive = document.createElement('button');
    seeLive.className = 'seeLive';
    seeLive.innerHTML = data[0].descButton.seeLive.seeLiveTxt;
    const seeLiveIcon = document.createElement('img');
    seeLiveIcon.classList = 'seeLiveIcon';
    seeLiveIcon.setAttribute('src', data[0].descButton.seeLive.seeLiveIcon);

    const seeSource = document.createElement('button');
    seeSource.className = 'seeSource';
    seeSource.innerHTML = data[0].descButton.seeSource.seeSourceTxt;
    const seeSourceIcon = document.createElement('img');
    seeSourceIcon.classList = 'seeSourceIcon';
    seeSourceIcon.setAttribute(
      'src',
      data[0].descButton.seeSource.seeSourceIcon,
    );

    topContainer.appendChild(tittle);
    topContainer.appendChild(close);
    close.appendChild(bar1);
    close.appendChild(bar2);
    close.appendChild(bar3);
    popup.appendChild(topContainer);
    popup.appendChild(techBtn);
    techBtn.appendChild(btn1);
    techBtn.appendChild(btn2);
    techBtn.appendChild(btn3);
    popup.appendChild(descContainer);
    descContainer.appendChild(popImg);
    descContainer.appendChild(descBtnContainer);
    descBtnContainer.appendChild(description);
    descBtnContainer.appendChild(descButton);
    descButton.appendChild(seeLive);
    seeLive.appendChild(seeLiveIcon);
    descButton.appendChild(seeSource);
    seeSource.appendChild(seeSourceIcon);
    mainDiv.appendChild(popup);
    body.appendChild(mainDiv);

    close.addEventListener('click', () => {
      mainDiv.remove();
    });
  });
}
