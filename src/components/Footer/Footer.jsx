import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-(--red-primary) text-(--white-primary) items-center p-4">
            <aside className="flex flex-col items-center md:flex-row md:items-center text-gray-300 mb-4 md:mb-0">
                <img src="/assets/Kev-logo.png" alt="Logo Kevin Jiménez" className="w-20 mb-2 md:mb-0 md:mr-4" />
                <p className="text-center md:text-left text-(--white-primary) text-lg">
                    Kevin Jiménez © {new Date().getFullYear()} - All rights reserved
                </p>
            </aside>

            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">

                <Link to='https://www.linkedin.com/in/kevin-jim%C3%A9nez94/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                    </svg>
                </Link>

                <Link to='https://github.com/KevinJG994'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                </Link>

            </nav>
        </footer>
    )
}


