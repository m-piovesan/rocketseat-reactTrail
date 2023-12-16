// npm run dev -> localhost:5173

import { Post } from './Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
        <Header />

        <div className={styles.wrapper}>
            <Sidebar />
            <main>
                <Post 
                    author="Diego Fernandes"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!"
                />
                <Post 
                    author="Matheus Piovesan"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!"
                />
            </main>
        </div>
    </div>
  )
}
