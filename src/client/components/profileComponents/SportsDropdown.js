import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
    { key: 'streetWorkout', text: 'Street Workout', value: 'streetWorkout' },
    { key: 'gym', text: 'Kondi Terem', value: 'gym' },
    { key: 'soccer', text: 'Foci', value: 'soccer' },
    { key: 'tenis', text: 'Tenisz', value: 'tenis' },
    { key: 'dance', text: 'Tánc', value: 'dance' },

];

const SportsDropdown = () => (
    <Dropdown placeholder='Sportok' fluid multiple selection options={options} />
);

export default SportsDropdown;
