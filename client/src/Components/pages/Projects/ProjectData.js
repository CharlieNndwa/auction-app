import image1 from '../../../assets/exca.jpg'; 
import image2 from '../../../assets/ad.jpg'; 
import image3 from '../../../assets/biden.jpg'; 
import image4 from '../../../assets/bkk.jpg'; 
import image5 from '../../../assets/mch.jpg'; 
import image6 from '../../../assets/hino.jpg'; 
import image7 from '../../../assets/ok.jpg'; 
import image8 from '../../../assets/heri.jpg'; 
import image9 from '../../../assets/tumb.jpg'; 
import image10 from '../../../assets/v.jpg'; 
import image11 from '../../../assets/ppii.jpg'; 
import image12 from '../../../assets/otf.jpg'; 
import image13 from '../../../assets/u.jpg'; 
import image14 from '../../../assets/sidecut.jpg'; 
import image15 from '../../../assets/b.jpg';
import image16 from '../../../assets/by.jpg';
import image17 from '../../../assets/n.jpg';
import image18 from '../../../assets/fn.jpg';
import image19 from '../../../assets/ggg.jpg';
import image20 from '../../../assets/jj.jpg';

// Make sure to add any other images you'll be using here

const projectData = {
    data: [
        {
            images: [image1, image10, image15, image13],
            title: 'Earth Moving Equipment',
            secondTitle: 'Heavy machinery and powerful tools for large-scale operations.',
            specData: {
                specificationTitles: ['Venue:', 'Viewing and Registration:', 'Closes:'],
                specifications: ['Johannesburg, Gauteng', '2025-09-02, 09:00 - 16:00', '2025-09-03, 12:00'],
            },
            arrowLeft: false,
            arrowRight: true,
            paths: ['/projects/transformers']
        },
        {
            images: [image2, image3],
            title: 'Transformers',
            secondTitle: 'A wide range of electrical transformers for various applications.',
            specData: {
                specificationTitles: ['Venue:', 'Viewing and Registration:', 'Closes:'],
                specifications: ['Pretoria, Gauteng', '2025-09-05, 09:00 - 16:00', '2025-09-06, 14:00'],
            },
            arrowLeft: true,
            arrowRight: true,
            paths: ['/projects/earth-moving-equipment', '/projects/tipper-trucks']
        },
        {
            images: [image16, image17],
            title: 'Tipper Trucks',
            secondTitle: 'Robust trucks built for construction and transport.',
            specData: {
                specificationTitles: ['Venue:', 'Viewing and Registration:', 'Closes:'],
                specifications: ['Durban, KwaZulu-Natal', '2025-09-08, 09:00 - 16:00', '2025-09-09, 11:00'],
            },
            arrowLeft: true,
            arrowRight: true,
            paths: ['/projects/transformers', '/projects/watertanks']
        },
        {
            images: [image6, image7],
            title: 'Watertanks',
            secondTitle: 'Storage solutions for water, ranging in size and material.',
            specData: {
                specificationTitles: ['Venue:', 'Viewing and Registration:', 'Closes:'],
                specifications: ['Cape Town, Western Cape', '2025-09-11, 09:00 - 16:00', '2025-09-12, 13:00'],
            },
            arrowLeft: true,
            arrowRight: true,
            paths: ['/projects/tipper-trucks', '/projects/tractors']
        },
        {
            images: [image8, image9],
            title: 'Tractors',
            secondTitle: 'Agricultural machinery for farming and land management.',
            specData: {
                specificationTitles: ['Venue:', 'Viewing and Registration:', 'Closes:'],
                specifications: ['Bloemfontein, Free State', '2025-09-14, 09:00 - 16:00', '2025-09-15, 10:00'],
            },
            arrowLeft: true,
            arrowRight: true,
            paths: ['/projects/watertanks', '/projects/truck']
        },
        {
            images: [image11, image12],
            title: 'Truck',
            secondTitle: 'Diverse fleet of trucks for various commercial purposes.',
            specData: {
                specificationTitles: ['Venue:', 'Viewing and Registration:', 'Closes:'],
                specifications: ['Polokwane, Limpopo', '2025-09-17, 09:00 - 16:00', '2025-09-18, 15:00'],
            },
            arrowLeft: true,
            arrowRight: true,
            paths: ['/projects/tractors', '/projects/office-equipment']
        },
        {
            images: [image13],
            title: 'Office Equipment and Furniture',
            secondTitle: 'Everything you need to set up a functional workspace.',
            specData: {
                specificationTitles: ['Venue:', 'Viewing and Registration:', 'Closes:'],
                specifications: ['Port Elizabeth, Eastern Cape', '2025-09-20, 09:00 - 16:00', '2025-09-21, 12:00'],
            },
            arrowLeft: true,
            arrowRight: true,
            paths: ['/projects/truck', '/projects/household-appliances']
        },
        {
            images: [image14],
            title: 'Household Appliances',
            secondTitle: 'From sidecutters to washing machines, for home and garden.',
            specData: {
                specificationTitles: ['Venue:', 'Viewing and Registration:', 'Closes:'],
                specifications: ['Nelspruit, Mpumalanga', '2025-09-23, 09:00 - 16:00', '2025-09-24, 11:00'],
            },
            arrowLeft: true,
            arrowRight: true,
            paths: ['/projects/office-equipment', '/projects/computer-electronics']
        },
        {
            images: [image19, image2], // Using placeholder images
            title: 'Computer Electronics Equipment',
            secondTitle: 'A variety of new and used electronics and computer hardware.',
            specData: {
                specificationTitles: ['Venue:', 'Viewing and Registration:', 'Closes:'],
                specifications: ['Rustenburg, North West', '2025-09-26, 09:00 - 16:00', '2025-09-27, 14:00'],
            },
            arrowLeft: true,
            arrowRight: true,
            paths: ['/projects/household-appliances', '/projects/vehicles']
        },
        {
            images: [image19, image20,image18], // Using placeholder images
            title: 'Vehicles',
            secondTitle: 'A selection of vehicles, including cars and trucks.',
            specData: {
                specificationTitles: ['Venue:', 'Viewing and Registration:', 'Closes:'],
                specifications: ['Kimberley, Northern Cape', '2025-09-29, 09:00 - 16:00', '2025-09-30, 10:00'],
            },
            arrowLeft: true,
            arrowRight: false,
            paths: ['/projects/computer-electronics']
        }
    ]
}

export default projectData;