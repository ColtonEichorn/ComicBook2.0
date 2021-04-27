import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
                image="https://i.pinimg.com/originals/f3/4d/bf/f34dbf30a4d3a7462b1ca5b219ba9400.jpg"
                profileSrc="https://lh3.googleusercontent.com/a-/AOh14Gg8yMuXwV_TYEEEO9b6SZ_PPpiLpELyme-LjgO7=s96-c"
                title="Colton Eichorn"
            />
            <Story
                image="https://images.unsplash.com/photo-1565081189012-7f02978bc81c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZHIlMjBzdHJhbmdlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                profileSrc="https://static.wixstatic.com/media/7f8af1_fdd26ed5c9c94f06850946d35e6d7b5c~mv2.jpg/v1/fill/w_640,h_588,al_c,q_85,usm_0.66_1.00_0.01/7f8af1_fdd26ed5c9c94f06850946d35e6d7b5c~mv2.webp"
                title="Ricci Eichorn"
            />
            <Story
                image="https://images.pexels.com/photos/2745835/pexels-photo-2745835.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                profileSrc="https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Max Speedman"
            />
            <Story
                image="https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                profileSrc="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Rich Goldman"
            />
            <Story
                image="https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                profileSrc="https://images.pexels.com/photos/3326711/pexels-photo-3326711.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                title="Hertz Humbucker"
            />

        </div>
    );
}

export default StoryReel
