const surveysList = document.querySelector('#surveys-list');

fetch('http://localhost:8000/surveysVH')
.then(response => response.json())
.then(surveys => {
    surveys.forEach(survey => {
        const section = document.createElement('section');
        section.classList.add('survey');
        const name = document.createElement('h2');
        const description = document.createElement('p');
        const voteBtn = document.createElement('a');
        voteBtn.classList.add('button');
        voteBtn.setAttribute('href', '#')
        const surveyDetails = document.createElement('div');
        surveyDetails.classList.add('survey-details')
        const countDiv = document.createElement('div');
        countDiv.classList.add('vote-count');
        const countValue = document.createElement('span');
        countValue.classList.add('count');


        name.textContent = survey.name;
        description.textContent = survey.description;
        voteBtn.textContent = 'Vote Now';
        countValue.textContent = 0 + ' votes';

        countDiv.appendChild(countValue);
        surveyDetails.appendChild(voteBtn);
        surveyDetails.appendChild(countDiv);

        section.appendChild(name);
        section.appendChild(description);
        section.appendChild(surveyDetails);

        surveysList.appendChild(section);
    });
})