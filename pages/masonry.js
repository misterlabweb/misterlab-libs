import cssMS from '../styles/Masonry.module.css'

import Masonry from 'react-masonry-css'

import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container, Row, Col, Button } from 'react-bootstrap';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';


const GridItens = [
    {
        id: '1',
        img: 'https://guiadegatas.com.br/assets/images/girls/chloecooper.webp',
        title: 'Github',
        description: 'Link do meu perfil do github. Link do meu perfil do github. Link do meu perfil do github. ',
        url: 'https://github.com/alexiakattah',
    },
    {
        id: '2',
        img: '/assets/images/JulianaBergami.webp',
        description: 'Link do meu perfil do TikTok. meu perfil do TikTok meu perfil do TikTok meu perfil do TikTokmeu perfil do TikTok meu perfil do TikTok',
        url: 'https://www.tiktok.com/@alexiakattah',
    },
    {
        id: '3',
        img: '/assets/images/JulianaBergami.webp',
        title: 'Github',
        description: 'Link do meu perfil do github. Link do meu perfil do github. Link do meu perfil do github. ',
        url: 'https://github.com/alexiakattah',
    },
    {
        id: '4',
        img: '/assets/images/principal_30012022095214__n3hzxo__julianabergami3_001.jpg',
        description: 'Link do meu perfil do TikTok. meu perfil do TikTokmeu perfil do TikTok meu perfil do TikTok',
        url: 'https://www.tiktok.com/@alexiakattah',
    },
    {
        id: '5',
        img: '/assets/images/chloecooper.webp',
        title: 'Github',
        description: 'Link do meu perfil do github. Link do meu perfil do github. Link do meu perfil do github. Link do meu perfil do github. Link do meu perfil do github. Link do meu perfil do github. Link do meu perfil do github. ',
        url: 'https://github.com/alexiakattah',
    },
    {
        id: '6',
        img: '/assets/images/JulianaBergami.webp',
        title: 'Github',
        description: 'Link do meu perfil do TikTok meu perfil do TikTokmeu perfil do TikTok meu perfil do TikTok',
        url: 'https://www.tiktok.com/@alexiakattah',
    },
    {
        id: '7',
        img: '/assets/images/principal_30012022095214__n3hzxo__julianabergami3_001.jpg',
        title: 'Github',
        description: 'Link do meu perfil do TikTok. meu perfil do TikTokmeu perfil do TikTok meu perfil do TikTok',
        url: 'https://www.tiktok.com/@alexiakattah',
    },
    {
        id: '8',
        img: '/assets/images/JulianaBergami.webp',
        title: 'Github',
        description: 'Link do meu perfil do github. Link do meu perfil do github. Link do meu perfil do github. Link do meu perfil do github. Link do meu perfil do github. Link do meu perfil do github. Link do meu perfil do github. ',
        url: 'https://github.com/alexiakattah',
    },
    {
        id: '9',
        img: '/assets/images/JulianaBergami.webp',
        title: 'Github',
        description: 'Link do meu perfil do TikTok meu perfil do TikTokmeu perfil do TikTok meu perfil do TikTok',
        url: 'https://www.tiktok.com/@alexiakattah',
    },
    {
        id: '10',
        img: '/assets/images/principal_30012022095214__n3hzxo__julianabergami3_001.jpg',
        title: 'Github',        
        description: 'Link do meu perfil do TikTok. meu perfil do TikTokmeu perfil do TikTok meu perfil do TikTok',
        url: 'https://www.tiktok.com/@alexiakattah',
    },
    {
        id: '11',
        img: '/assets/images/JulianaBergami.webp',
        title: 'Github',
        description: 'Link do meu perfil do github. Link do meu perfil do github. Link do meu perfil do github. Link do meu perfil do github. Link do meu perfil do github. Link do meu perfil do github. Link do meu perfil do github. ',
        url: 'https://github.com/alexiakattah',
    },
    {
        id: '12',
        img: 'https://guiadegatas.com.br/assets/images/girls/chloecooper.webp',
        title: 'Github',        
        description: 'Link do meu perfil do TikTok meu perfil do TikTokmeu perfil do TikTok meu perfil do TikTok',
        url: 'https://www.tiktok.com/@alexiakattah',
    },
];

const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2
};

export default function MasonryPage() {

    const itemss = new Array(8).fill().map((item, i) => {
        return (
            <div key={i}>
                <strong>Item #{i + 1}</strong>
                <div><img src="" style={{ width: '100%' }} /></div>
                <div>Texto</div>
            </div>
        )
    });



    return (
        <>
            <div className="container-fluid">

                <h1>Masonry</h1>

                <div className="row">
                    <div className="row">
                        <hr style={{ visibility: 'hidden' }} />
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                            columnAttrs={{ className: 'should be overridden', 'data-test': '', style: { '--test': 'test' } }}
                        >
                            {
                                GridItens.map((item, i) => {
                                    return (
                                        <div className={cssMS.ms_item} key={i}>
                                            {/* <strong>Item #{i + 1}</strong> */}
                                            <div><img src={item.img} style={{ width: '100%' }} /></div>
                                            <div><p>{item.description}</p></div>
                                        </div>
                                    )
                                })
                            }
                        </Masonry>
                    </div>
                </div>
            </div>

        </>
    )
}
