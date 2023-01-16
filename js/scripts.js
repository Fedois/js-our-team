const team = [
    {
        name: 'Wayne Barnett',
        rule: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        rule: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        rule: 'Office manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Loper',
        rule: 'Social Media Manager',
        image: 'angela-lopez-social-media-menager.jpg'
    },
    {
        name: 'Scott Estrada',
        rule: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        rule: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];

console.log(team)

for(let i = 0; i < team.length; i++){
    console.log('name: ', team[i].name)
    console.log('rule: ', team[i].rule);
    console.log('image: ', team[i].image)
    console.log('------------------------------------')
    
    const main = document.querySelector('main')
    const dom = document.createElement('h1')
    dom.innerHTML = team[i].name + '<br>' + team[i].rule + '<br>' + team[i].image;
    main.append(dom)

}
