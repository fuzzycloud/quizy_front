export interface Team {
    name?: string
    position?: string
    info?: string
    image?: string
    t_link?: string
    f_link?: string
    e_link?: string
}
export interface Question {
    q_id?: string
    a_id?: string
    link?: string
que?: string
    data?: string
   
}

export type Props = {


  title?: string
  info?: string
    team?: Array<Team>
    que?:Array<Question>


}

export let index = {
title: 'Welcome to Quizy',
info: 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.',
  
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
    ],
    que:[
        {
            q_id:'headingOne',
            a_id:'collapseOne',
            link:'#collapseOne',
            que:'Why choose us?',
            data:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
        },
        {
            q_id:'headingTwo',
            a_id:'collapseTwo',
            link:'#collapseTwo',
            que:'What we Do?',
            data:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
        },
        {
            q_id:'headingThree',
            a_id:'collapseThree',
            link:'#collapseThree',
            que:'Offer Services',
            data:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
        }
    ]

}
