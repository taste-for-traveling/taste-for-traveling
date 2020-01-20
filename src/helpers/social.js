const youtube = 'https://www.youtube.com/channel/UC2cpbcMO2louHxVZob43iEw'

const instagram = 'https://www.instagram.com/tastefortraveling/'

const facebook = 'https://www.facebook.com/TasteforTraveling/'

export const social = (site) => {
    let url;
    switch (site) {
        case 'youtube':
            url = 'https://www.youtube.com/channel/UC2cpbcMO2louHxVZob43iEw';
        break;
        case 'instagram':
            url = 'https://www.instagram.com/tastefortraveling/';
        break;
        case 'facebook':
            url = 'https://www.facebook.com/TasteforTraveling/';
        break;
        default:
            url = '#'
    }
    return url
}