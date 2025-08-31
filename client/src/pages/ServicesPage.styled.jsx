import styled from 'styled-components';

export const HeroContainer = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    // Updated background with a professional auction image and dark overlay
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${'https://scontent.fjnb2-1.fna.fbcdn.net/v/t39.30808-6/481478313_565966253136222_8876441396370871445_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&cb=99be929b-7bdcbe47&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFpTngo33b7JTnu3vT7QrDYDmh_bZIE_LYOaH9tkgT8tn7QfwcF6bLqZM8DtNge_8Cqaed5g_9MhLl7x0oxRU4z&_nc_ohc=scEu9bB4MhUQ7kNvwH8YgvP&_nc_oc=AdkeSxKn5X_QRAocqDaSQIYX-SfBYWkiQkU4aFyfIpMq3b2NDmLWn9raTdmRO2whynE&_nc_zt=23&_nc_ht=scontent.fjnb2-1.fna&_nc_gid=wNiwoj8pNK1G-1gPg6TzGQ&oh=00_AfVugS0DniNc73LUYewxQBxhE-Lm3NQJSeMzgvgbi_XcEQ&oe=68B7A65D'});
    background-size: cover;
    background-position: center;
    position: relative;

    .hero-content {
        max-width: 800px;
        padding: 0 20px;

        h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
            color: #FFD700;
        }

        p { // This paragraph style is now effectively unused since the <motion.p> was removed
            font-size: 1.25rem;
            margin-bottom: 30px;
        }
    }
`;

export const SectionHeading = styled.h2`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 50px;
    position: relative;
    color: #FFD700;

    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background-color: #FFD700;
    }
`;

export const ServiceCard = styled.div`
    background-color: #1a1a1a;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    color: #fff;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    svg {
        color: #FFD700;
        margin-bottom: 20px;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    p {
        font-size: 1rem;
        color: #ddd;
    }
`;
// TestimonialGrid and TestimonialCard have been removed