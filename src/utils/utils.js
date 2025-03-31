import './utils.css';

export const getBadgeColor = (type) => {
    switch (type) {
        case 'grass':
            return 'badge-success';
        case 'fire':
            return 'badge-error';
        case 'water':
            return 'badge-info';
        case 'electric':
            return 'badge-warning';
        case 'psychic':
            return 'badge-pink';
        case 'rock':
            return 'badge-gray';
        case 'ground':
            return 'badge-brown';
        case 'fairy':
            return 'badge-purple';
        case 'poison':
            return 'badge-indigo';
        case 'bug':
            return 'badge-lime';
        case 'flying':
            return 'badge-cyan';
        case 'fighting':
            return 'badge-orange';
        case 'ice':
            return 'badge-light-blue';
        case 'dragon':
            return 'badge-dark-blue';
        case 'dark':
            return 'badge-black';
        case 'steel':
            return 'badge-silver';
        case 'ghost':
            return 'badge-violet';
        case 'normal':
            return 'badge-gray';
        default:
            return 'badge-secondary';
    }
};