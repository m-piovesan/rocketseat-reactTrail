import { Post, PostType } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts:PostType[] = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/m-piovesan.png',
            name:'Matheus Piovesan',
            role: 'Software Developer',
        },
        content: [
            { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!' },
            { type: 'paragraph', text: 'Pokem ipsum dolor sit amet Ruby Slaking Staravia Shiftry but nothing happened Sandslash. Soul Badge Qwilfish Poison Sting Burnt Berry Totodile Corphish Gligar. Hive Badge Silph Scope Geodude Zapdos sunt in culpa qui officia ullamco laboris nisi Burmy. Celadon City Cascoon Swoobat Klang Chingling Helix Fossil Snorunt. Johto Lugia Finneon Scizor Junichi Masuda to protect the world from devastation Keldeo.' },
            { type: 'link', text: 'Link para a página' },
        ],
        publishedAt: new Date ('2023-12-20 10:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name:'Diego Fernandes',
            role: 'CTO Rocketseat',
        },
        content: [
            { type: 'paragraph', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!' },
            { type: 'paragraph', text: 'Bulbasaur Yanma to extend our reach to the stars above Electivire Bulbasaur Kadabra Marsh Badge. Slash Blue Hydro Pump Servine Poison Golem consectetur adipisicing elit. Water Gun Grimer Weavile Super Potion Kyurem Lillipup Golduck. Anim id est laborum Vanilluxe Palpitoad Snover Shroomish Riolu Starmie. Ut enim ad minim veniam Chansey ut enim ad minim veniam Vibrava Wormadam Pokedex Tyranitar' },
            { type: 'link', text: 'Link para a página' },
        ],
        publishedAt: new Date ('2023-12-19 11:30:00')
    },    
];

export function App() {
  return (
    <div>
        <Header />

        <div className={styles.wrapper}>
            <Sidebar />
            <main>
                {posts.map(post => {
                    return (
                        <Post
                            key={post.id} 
                            post={post}
                        />
                    )
                })}
            </main>
        </div>
    </div>
  )
}
