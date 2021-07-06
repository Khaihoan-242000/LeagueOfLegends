import {images} from '../constants'
const userData = [{
    id: 1,
    name: 'Khai Hoan',
    avatar: images.avatar,
    banner: images.banner,
    level: '30',
    season: [
        {
            seasonId: 1,
            rankPhoto: images.challenger,
            rankName: 'Challenger',
        },
        {
            seasonId: 2,
            rankPhoto: images.grandmaster,
            rankName: 'Grandmaster',
        },
        {
            seasonId: 3,
            rankPhoto: images.master,
            rankName: 'Master'
        }
    ]
}]

export default userData