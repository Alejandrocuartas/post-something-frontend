const sessionSchema = {
    nickname: '',
    content: '',
    reactions: [
        {
            reaction: 'care',
            number: 0
        },
        {
            reaction: 'sad',
            number: 0
        },
        {
            reaction: 'happy',
            number: 0
        }
    ],
    comments: [
        {
            nick: '',
            comment: ''
        }
    ]
} 

export default sessionSchema