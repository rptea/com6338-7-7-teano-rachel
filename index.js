// Your code here

// Rules: do not use alert, confirm and prompt. User only has 30 seconds to answer each question.
// Must: create a variable named questionsArr (will contain all of the quiz data for the app) and must be an array of objects, should contain at least FIVE question objects, each set of possible choices in options should have at least two choices.

var questionsArr = [
    {
        question: 'What is raced in Formula 1 (F1)?',
        answer: 'Cars',
        options: [
            'Drones',
            'Planes',
            'Cars',
            'Boats',
        ]
    },
    {
        question: 'What energy drink company owns an F1 team?',
        answer: 'Red Bull',
        options: [
            'Monster Energy',
            'Red Bull',
            'Celsius',
            'Sting Energy',
        ]
    },
    {
        question: 'Are F1 cars hybrids?',
        answer: 'Yes',
        options: [
            'Yes',
            'No',
        ]
    },
    {
        question: 'What is the top speed an F1 car reaches?',
        answer: '233 mph (375 km/h)',
        options: [
            '200 mph (322 km/h)',
            '180 mph (290 km/h)',
            '250 mph (402 km/h)',
            '233 mph (375 km/h)',
        ]
    },
    {
        question: 'Which one of these teams aren\'t in F1 this year?',
        answer: 'Cadillac',
        options: [
            'Mclaren',
            'Mercedes',
            'Ferrari',
            'Cadillac',
        ]
    }
]

// On first page load, should display a "start quiz" button. Must have an id attribute of "start-quiz"; if the user has taken the quiz before, the app should display the previous score.