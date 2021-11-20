import Image from 'next/image'
import profilePic from '../public/profile.jpg'

export default function Hero() {
    return (
        <div className="flex items-stretch border-b-2">
            <div className="w-7/12 p-32 text-lg">
                <p>I’m <strong>Dries Pieters</strong>, a Brussels based front-end developer. Over the 9 years of my career I've specialized myself in Shopify, helping start-ups and established brands with their e-commerce strategy.</p>
                <p>If you think I'd be a good fit for your project, please get in touch and we can chat.</p>
                <p>
                    <a href="mailto:hello@driespieters.com" target="_blank" rel="noopener noreferrer">hello@driespieters.com</a>
                </p>
            </div>
            <div className="w-5/12 bg-green-300 flex border-l-2">
                <Image src={profilePic} placeholder="blur" objectFit="cover" />
            </div>
        </div>
    )
}