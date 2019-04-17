export interface Team {
    name?: string
    position?: string
    info?: string
    image?: string
    t_link?: string
    f_link?: string
    e_link?: string
}
export type Props = {


    title?: string
    info1?: string
    info2?: string
    info3?: string
    info4?: string
    info5?: string
    image?: string
    video_link?: string
    team?: Array<Team>


}

export let about = {

    title: 'Lets Work Together ',
    //  image : '/static/images/img_bg_1.jpg',
    video_link: 'https://vimeo.com/channels/staffpicks/93951774',
    info1: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    info2: 'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.',
    info3: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    info4: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    info5: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    team: [
        {
            name: 'Olivia Young',
            position: 'Professor',
            info: 'Far far away, behind the word mountains, far from the countries Vokalia',
            image: 'url(/static/images/person4.jpg)',
            t_link: '#',
            f_link: '#',
            e_link: '#',

        },
        {
            name: 'Olivia Young',
            position: 'Professor',
            info: 'Far far away, behind the word mountains, far from the countries Vokalia',
            image: '',
            t_link: '#',
            f_link: '#',
            e_link: '#',

        },
        {
            name: 'Olivia Young',
            position: 'Professor',
            info: 'Far far away, behind the word mountains, far from the countries Vokalia',
            image: '',
            t_link: '#',
            f_link: '#',
            e_link: '#',

        },
        {
            name: 'Olivia Young',
            position: 'Professor',
            info: 'Far far away, behind the word mountains, far from the countries Vokalia',
            image: '',
            t_link: '#',
            f_link: '#',
            e_link: '#',

        }
    ]

}
